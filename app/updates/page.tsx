"use client";
import Link from "next/link";

export default function UpdatesPage() {
	const updates = [
		{
			date: "April 1, 2025",
			changes: ["Added Arts-specific test", "Added Engineering-specific test"],
		},
		{
			date: "March 28, 2025",
			changes: [
				"Initial release of the UBC Purity Test",
				"Launched with General UBC Test",
				"Added 100+ questions to the General Test",
			],
		},
	];

	const upcomingFeatures = [
		"Engineering & Sciences-specific tests (April 2025)",
		"Results sharing functionality",
		"Comparison with UBC student averages",
	];

	return (
		<div className="max-w-3xl mx-auto py-10 px-4">
			<div className="mb-8">
				<Link href="/" className="text-black hover:underline flex items-center">
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
					Back to Home
				</Link>
			</div>

			<h1 className="text-3xl font-bold mb-8">Site Updates</h1>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4">Release History</h2>

				<div className="space-y-8">
					{updates.map((update) => (
						<div key={update.date} className="py-2">
							<div className="flex items-baseline mb-2">
								<h3 className="text-xl font-medium">{update.date}</h3>
							</div>
							<ul className="list-disc list-inside space-y-1 text-gray-700">
								{update.changes.map((change, changeIndex) => (
									<li key={changeIndex}>{change}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
				<div className="bg-gray-50 p-4 rounded-md border border-gray-200">
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						{upcomingFeatures.map((feature, index) => (
							<li key={index}>{feature}</li>
						))}
					</ul>
				</div>
			</section>
		</div>
	);
}
