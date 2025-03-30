import { NextResponse, type NextRequest } from "next/server";
import sql from "@/utils/db";
import normalizePage from "@/utils/normalizePage";

export async function POST(request: NextRequest) {
	try {
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
		});
	} catch (error) {
		console.error("Error submitting suggestion:", error);

		return NextResponse.json(
			{ error: "Failed to submit suggestion" },
			{ status: 500 },
		);
	}
}
