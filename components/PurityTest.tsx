"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import ShareDropdown from "./ShareDropdown";

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
	const pathname = usePathname();
	const [selected, setSelected] = useState<string[]>([]);
	const [submitted, setSubmitted] = useState(false);
	const [score, setScore] = useState(100);
	const [averageScore, setAverageScore] = useState<number | null>(null);
	const [showShareOptions, setShowShareOptions] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleToggle = (prompt: string) => {
		setSelected((prev) =>
			prev.includes(prompt)
				? prev.filter((item) => item !== prompt)
				: [...prev, prompt],
		);
	};

	const handleSubmit = async () => {
		const calculatedScore = 100 - selected.length;
		setSubmitted(true);
		setScore(calculatedScore);
		setIsLoading(true);

		try {
			const response = await fetch("/api/scores", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					score: calculatedScore,
					page: pathname,
				}),
			});

			const data = await response.json();
			if (data.average_score !== undefined) {
				setAverageScore(
					Math.round(Number.parseFloat(data.average_score) * 10) / 10,
				);
			}
		} catch (error) {
			console.error("Error submitting score:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleReset = () => {
		setSelected([]);
		setSubmitted(false);
		setScore(100);
		setAverageScore(null);
	};

	const getScoreMessage = () => {
		if (score >= 90) return "Practically an angel! 😇";
		if (score >= 70) return "Pretty innocent! 😊";
		if (score >= 50) return "Average college experience. 🙂";
		if (score >= 30) return "You've lived a little... 😏";
		if (score >= 10) return "Wild child! 🔥";
		return "Completely unhinged! 😈";
	};

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			const target = event.target as HTMLElement;
			if (
				target &&
				!target.closest(".share-dropdown") &&
				!target.closest(".share-button")
			) {
				setShowShareOptions(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="max-w-3xl mx-auto px-4">
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
						<div className="flex justify-center mb-6">
							<div className="w-40 h-40 rounded-full flex items-center justify-center bg-[#e6dfc3] border-4 border-[#a39a7e]">
								<div className="text-5xl font-bold text-[#8e503b]">{score}</div>
							</div>
						</div>
						<div className="text-xl mb-4">{getScoreMessage()}</div>
						<div className="text-gray-700">
							You've done {selected.length} out of {prompts.length} items on
							this list.
						</div>

						{isLoading ? (
							<div className="mt-4 text-gray-600">Loading average score...</div>
						) : averageScore ? (
							<div className="mt-6 mb-4">
								<div className="text-gray-700">
									<span className="font-semibold">
										Average score for General:{" "}
									</span>
									<span>{averageScore}</span>
									{score > Number(averageScore) ? (
										<div className="ml-2 text-green-600">
											You're more pure than average! 🌟
										</div>
									) : score < Number(averageScore) ? (
										<span className="ml-2 text-amber-600">
											(You're wilder than average! 🔥)
										</span>
									) : (
										<span className="ml-2">(You're exactly average! 🎯)</span>
									)}
								</div>
							</div>
						) : null}
					</div>

					<div className="text-center">
						<div className="flex justify-center space-x-4">
							<button
								type="button"
								className="border-2 border-[#8e503b] bg-[#8e503b] md:w-auto text-white font-semibold px-6 py-2 rounded-md cursor-pointer transition hover:bg-[#5b3e34] hover:border-[#5b3e34]"
								onClick={handleReset}
							>
								Take Again
							</button>
							<div className="relative">
								<button
									type="button"
									className="border-2 border-[#8e503b] bg-[#8e503b] md:w-auto text-white font-semibold px-6 py-2 rounded-md cursor-pointer transition hover:bg-[#5b3e34] hover:border-[#5b3e34] flex items-center share-button"
									onClick={() => setShowShareOptions(!showShareOptions)}
								>
									<span>Share</span>
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
										className="ml-2"
									>
										<path d="M18 8L12 2L6 8"></path>
										<path d="M12 2V16"></path>
										<path d="M20 16V22H4V16"></path>
									</svg>
								</button>

								<ShareDropdown
									score={score}
									getScoreMessage={getScoreMessage}
									showShareOptions={showShareOptions}
									setShowShareOptions={setShowShareOptions}
								/>
							</div>
						</div>
						<div className="flex justify-center mt-4">
							<Link href={backLink} className="flex items-center mt-4">
								<p className="hover:underline">{backText}</p>
							</Link>
						</div>
					</div>

					{selected.length > 0 && (
						<div className="mb-8 mt-4">
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
