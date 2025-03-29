import { NextResponse, type NextRequest} from "next/server";
import pool from "@/utils/db";

export async function POST(request: NextRequest) {
	try {
		const { suggestion, page } = await request.json();

    if (!suggestion || typeof suggestion !== 'string' || suggestion.trim() === '') {
      return NextResponse.json(
        { error: "Suggestion is required" },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO suggestions (suggestion_text, page_path, created_at, status)
      VALUES ($1, $2, NOW(), 'pending')
      RETURNING id
    `;

    const result = await pool.query(query, [suggestion.trim(), page || null]);
    
    return NextResponse.json({
      success: true,
      id: result.rows[0].id,
      message: "Suggestion submitted successfully",
    });
  } catch (error) {
    console.error("Error submitting suggestion:", error);
    
    return NextResponse.json(
      { error: "Failed to submit suggestion" },
      { status: 500 }
    );
  }
}