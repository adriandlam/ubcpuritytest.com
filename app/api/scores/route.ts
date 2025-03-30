import sql from "@/utils/db";
import normalizePage from "@/utils/normalizePage";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
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
