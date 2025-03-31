import { NextResponse, type NextRequest } from "next/server";
import sql from "@/utils/db";
import normalizePage from "@/utils/normalizePage";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_URL,
	token: process.env.UPSTASH_REDIS_TOKEN,
});

const ratelimit = new Ratelimit({
	redis: redis,
	limiter: Ratelimit.slidingWindow(500, "10 m"), // 30 requests per 10 minutes
	analytics: true,
});

export async function POST(request: NextRequest) {
	try {
		const ip = request.headers.get("x-forwarded-for") || 
			request.headers.get("x-real-ip") || 
			"127.0.0.1";
		
		const identifier = `suggestion:${ip}`;
		
		const { success, limit, reset, remaining } = await ratelimit.limit(identifier);
		
		const headers = {
			"X-RateLimit-Limit": limit.toString(),
			"X-RateLimit-Remaining": remaining.toString(),
			"X-RateLimit-Reset": reset.toString()
		};
		
		if (!success) {
			return NextResponse.json(
				{ error: "Too many suggestions. Please try again later." },
				{ 
					status: 429,
					headers
				}
			);
		}
		
		const { suggestion, page } = await request.json();
		if (!page) {
			return NextResponse.json({ error: "Page is required" }, { status: 400 });
		}
		if (
			!suggestion ||
			typeof suggestion !== "string" ||
			suggestion.trim() === ""
		) {
			return NextResponse.json(
				{ error: "Suggestion is required" },
				{ status: 400 },
			);
		}
		
		const result = await sql`
      INSERT INTO suggestions (suggestion_text, page, created_at, status)
      VALUES (${suggestion.trim()}, ${normalizePage(page) || null}, NOW(), 'pending')
      RETURNING id
    `;
		
		if (result.length === 0) {
			return NextResponse.json(
				{ error: "Failed to submit suggestion" },
				{ status: 500 },
			);
		}
		
		return NextResponse.json(null, {
			status: 200,
			headers
		});
	} catch (error) {
		console.error("Error submitting suggestion:", error);
		return NextResponse.json(
			{ error: "Failed to submit suggestion" },
			{ status: 500 },
		);
	}
}