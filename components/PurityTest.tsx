"use client";

import Link from "next/link";
import { useState } from "react";

type PurityTestProps = {
	title: string;
	prompts: string[];
	backLink?: string;
	backText?: string;
};

export default function PurityTest({
	title,
	prompts,
	backLink = "/",
	backText = "Back to Home",
}: PurityTestProps) {
	const [selected, setSelected] = useState<string[]>([]);
	const [submitted, setSubmitted] = useState(false);
	const [score, setScore] = useState(100);

	const handleToggle = (prompt: string) => {
		setSelected((prev) =>
			prev.includes(prompt)
				? prev.filter((item) => item !== prompt)
				: [...prev, prompt],
		);
	};

	const handleSubmit = () => {
		setSubmitted(true);
		setScore(100 - selected.length);
	};

	const handleReset = () => {
		setSelected([]);
		setSubmitted(false);
		setScore(100);
	};

	const getScoreMessage = () => {
		if (score >= 90) return "Practically an angel! 😇";
		if (score >= 70) return "Pretty innocent! 😊";
		if (score >= 50) return "Average college experience. 🙂";
		if (score >= 30) return "You've lived a little... 😏";
		if (score >= 10) return "Wild child! 🔥";
		return "Completely unhinged! 😈";
	};

	return (
		<div className="max-w-3xl mx-auto py-10 px-4">
			<div className="mb-8">
				<Link
					href={backLink}
					className="text-black hover:underline flex items-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="mr-1"
					>
						<path d="M19 12H5M12 19l-7-7 7-7" />
					</svg>
					{backText}
				</Link>
			</div>

			<h1 className="text-3xl font-bold mb-8">{title}</h1>

			{submitted ? (
				<section>
					<h2 className="text-2xl font-semibold mb-4">Your Results</h2>
					<div className="pl-4 py-2 mb-8 text-center">
						<div className="text-3xl font-bold mb-2">Score: {score}</div>
						<div className="text-xl mb-4">{getScoreMessage()}</div>
						<div className="text-gray-700">
							You've done {selected.length} out of {prompts.length} items on
							this list.
						</div>
					</div>

					{selected.length > 0 && (
						<div className="mb-8">
							<h3 className="text-2xl font-semibold mb-4">
								Items you've checked off:
							</h3>
							<div className="bg-gray-50 p-4 rounded-md border border-gray-200">
								<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
									{selected.map((item) => (
										<li key={item} className="flex items-start">
											<span className="mr-2">•</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					)}

					<div className="text-center">
						<button
							type="button"
							className="border-2 border-[#8e503b] bg-[#8e503b] text-white font-semibold px-6 py-2 rounded-md cursor-pointer transition hover:bg-[#5b3e34] hover:border-[#5b3e34]"
							onClick={handleReset}
						>
							Take Again
						</button>
					</div>
				</section>
			) : (
				<>
					<section className="mb-8">
						<div className="py-2">
							<p>
								Caution: This is not a bucket list. You are beyond cooked if you
								complete all the items on this list. Your purity score will be
								calculated at the end.
							</p>
						</div>
						<p className="mt-4 mb-2">Click on every item you've done.</p>
					</section>

					<section className="mb-8">
						<div className="p-4 rounded-md border-2 border-[#9e9176] bg-[#f8f3e6]">
							<ul className="space-y-2">
								{prompts.map((prompt, i) => (
									<li
										key={prompt}
										className="flex items-center gap-3 hover:opacity-80 p-1 rounded transition"
									>
										<span className="font-medium text-gray-700 w-8">
											{i + 1}.
										</span>
										<input
											type="checkbox"
											className="h-5 w-5 rounded cursor-pointer"
											id={`prompt-${i}`}
											checked={selected.includes(prompt)}
											onChange={() => handleToggle(prompt)}
										/>
										<label
											htmlFor={`prompt-${i}`}
											className="cursor-pointer flex-1"
										>
											{prompt}
										</label>
									</li>
								))}
							</ul>
						</div>
					</section>

					<div className="flex justify-end">
						<button
							className="md:w-auto w-full border-2 border-[#8e503b] bg-[#8e503b] text-white font-semibold px-6 py-2 rounded-md cursor-pointer transition hover:bg-[#5b3e34] hover:border-[#5b3e34]"
							onClick={handleSubmit}
						>
							Calculate My Score
						</button>
					</div>
				</>
			)}
		</div>
	);
}
