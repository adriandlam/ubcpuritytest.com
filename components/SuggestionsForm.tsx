"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface Message {
	type: "success" | "error";
	text: string;
}

export default function SuggestionsForm() {
	const pathname = usePathname();
	const [suggestion, setSuggestion] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState<Message | null>(null);

	if (pathname === "/") {
		return null;
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!suggestion.trim()) return;

		setIsSubmitting(true);
		setMessage(null);

		try {
			const response = await fetch("/api/suggestions", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					suggestion,
					page: pathname,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to submit suggestion");
			}

			const data = await response.json();
			setMessage({ type: "success", text: "Thank you for your suggestion!" });
			setSuggestion("");
		} catch (error) {
			console.error("Error submitting suggestion:", error);
			setMessage({
				type: "error",
				text: "Failed to submit. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-sm mb-4">
			<h3 className="text-lg font-medium mb-4">
				Suggest new prompts or remove items from the list.
			</h3>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="flex items-center gap-2">
					<input
						type="text"
						placeholder="Enter your prompt suggestion"
						className="w-full border-2 border-gray-300 font-semibold p-2 rounded-md cursor-text transition bg-white"
						value={suggestion}
						onChange={(e) => setSuggestion(e.target.value)}
						disabled={isSubmitting}
					/>
					<button
						type="submit"
						className="border-2 border-black text-nowrap font-semibold px-6 py-2 rounded-md cursor-pointer transition hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
						disabled={isSubmitting || !suggestion.trim()}
					>
						{isSubmitting ? "Submitting..." : "Submit suggestion"}
					</button>
				</div>
			</form>

			{message && (
				<p
					className={`text-sm mt-4 text-center ${message.type === "success" ? "text-green-600" : "text-red-600"}`}
				>
					{message.text}
				</p>
			)}
		</div>
	);
}
