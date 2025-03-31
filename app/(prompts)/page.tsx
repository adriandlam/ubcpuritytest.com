import Link from "next/link";

interface TestCategory {
	id: string;
	title: string;
	description: string;
	path: string;
}

const TEST_CATEGORIES: TestCategory[] = [
	{
		id: "general",
		title: "General UBC Test",
		description: "The classic Rice Purity Test for all UBC students",
		path: "/general",
	},
	{
		id: "sauder",
		title: "Business UBC Test",
		description: "Special questions for Sauder students",
		path: "/sauder",
	},
	{
		id: "sciences",
		title: "Sciences UBC Test",
		description: "Special questions for science majors and pre-med students",
		path: "/sciences",
	},
	// {
	// 	id: "engineering",
	// 	title: "Engineering UBC Test",
	// 	description: "Special questions for engineering students",
	// 	path: "/engineering",
	// },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center pb-12 px-4 text-center">
			<p className="text-lg mb-4 italic">How innocent are you?</p>

			<div className="max-w-md mb-8">
				<p className="text-lg mb-4">
					The UBC Purity Test is a self-graded survey that assesses the
					participant's level of innocence.
				</p>
			</div>

			<div className="mb-8">
				<p>
					<span className="font-bold underline underline-offset-2">
						Update:
					</span>{" "}
					We're working hard to add support for other categories like Arts and
					Engineering
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{TEST_CATEGORIES.map((category) => (
					<Link
						key={category.id}
						href={category.path}
						className="block bg-[#f8f3e6] border-[#9e9176] p-6 border-2 rounded-lg transition hover:bg-gray-50"
					>
						<h2 className="text-xl font-bold mb-2">{category.title}</h2>
						<p className="text-gray-700">{category.description}</p>
					</Link>
				))}
			</div>

			<div className="flex flex-col sm:flex-row gap-4 mt-8">
				<Link href="/updates" className="hover:underline">
					Site Updates
				</Link>
				<Link href="https://ricepuritytest.com" className="hover:underline">
					View the original Rice Purity Test
				</Link>
			</div>

			<section className="border-t mt-8 pt-8">
				<h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
				<div className="space-y-4">
					<p>
						The UBC Purity Test measures how "pure" your university experience
						has been. Select all the items you've done, and we'll calculate your
						purity score.
					</p>
					<p>
						<strong>100% = Completely Pure</strong> - You haven't done any of
						the items on the list.
					</p>
					<p>
						<strong>0% = Not Pure At All</strong> - You've done everything on
						the list.
					</p>
					<p className="italic">
						Remember, this is just for fun! Your score doesn't define your worth
						or your UBC experience.
					</p>
				</div>
			</section>
		</div>
	);
}
