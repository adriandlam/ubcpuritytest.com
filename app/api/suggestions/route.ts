import sql from "@/utils/db";
import normalizePage from "@/utils/normalizePage";
import { type NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_URL,
	token: process.env.UPSTASH_REDIS_TOKEN,
});

const ratelimit = new Ratelimit({
	redis: redis,
	limiter: Ratelimit.slidingWindow(500, "10 m"), // 500 requests per minute
	analytics: true,
});

export async function POST(request: NextRequest) {
	try {
		const ip = request.headers.get("x-forwarded-for") || 
			request.headers.get("x-real-ip") || 
			"127.0.0.1";
		
		const clientIp = ip.split(',')[0].trim();
		
		const identifier = `suggestion:${clientIp}`;
		
		const { success, limit, reset, remaining } = await ratelimit.limit(identifier);
		
		const headers = {
			"X-RateLimit-Limit": limit.toString(),
			"X-RateLimit-Remaining": remaining.toString(),
			"X-RateLimit-Reset": reset.toString()
		};
		
		if (!success) {
			return NextResponse.json(
				{ error: "Too many score submissions. Please try again later." },
				{ 
					status: 429,
					headers
				}
			);
		}
		const { score, page } = await request.json();
		if (!page) {
			return NextResponse.json({ error: "Page is required" }, { status: 400 });
		}
		if (!score || typeof score !== "number" || score < 0 || score > 100) {
			return NextResponse.json(
				{ error: "Score must be a number between 0 and 100" },
				{ status: 400 },
			);
		}
		const result = await sql`
      INSERT INTO scores (score, page, created_at)
      VALUES (${score}, ${normalizePage(page) || null}, NOW())
      RETURNING id
    `;
		if (result.length === 0) {
			return NextResponse.json(
				{ error: "Failed to submit score" },
				{ status: 500 },
			);
		}
		const avgResult = await sql`
	SELECT 
		page,
		AVG(score) as average_score
	FROM
		scores
	WHERE page = ${normalizePage(page)}
	GROUP BY page
	`;
		const avgScore = avgResult.length > 0 ? avgResult[0].average_score : null;
		return NextResponse.json(
			{
				id: result[0].id,
				average_score: avgScore,
			}
		);
	} catch (error) {
		console.error("Error submitting score:", error);
		return NextResponse.json(
			{ error: "Failed to submit score" },
			{ status: 500 },
		);
	}
}