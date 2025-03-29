import { NextResponse, type NextRequest } from "next/server";
import sql from "@/utils/db";
import normalizePage from "@/utils/normalizePage";

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

		return NextResponse.json(null, {
			status: 200,
		});
	} catch (error) {
		console.error("Error submitting score:", error);

		return NextResponse.json(
			{ error: "Failed to submit score" },
			{ status: 500 },
		);
	}
}
