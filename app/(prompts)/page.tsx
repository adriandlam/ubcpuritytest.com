import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center pb-12 px-4 text-center">
			<p className="text-lg mb-4 italic">How innocent are you?</p>

			<div className="max-w-md mb-8">
				<p className="text-lg mb-4">
					The Rice Purity Test is a self-graded survey that assesses the
					participant's level of innocence.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-xl">
				<Link
					href="/general"
					className="block py-8 px-4 font-bold text-xl rounded-md transition border-2 hover:bg-gray-100"
				>
					General UBC Test
					<div className="text-sm font-normal text-gray-600 mt-2">
						The classic Rice Purity Test for all UBC students
					</div>
				</Link>

				<Link
					href="/sciences"
					className="block py-8 px-4 font-bold text-xl rounded-md transition border-2 hover:bg-gray-100"
				>
					Sciences UBC Test
					<div className="text-sm font-normal text-gray-600 mt-2">
						Special questions for science majors and pre-med students
					</div>
				</Link>

				<div className="block py-8 px-4 font-bold text-xl rounded-md border-2 bg-gray-100 text-gray-400 cursor-not-allowed">
					Engineering Test (Coming Soon)
					<div className="text-sm font-normal text-gray-400 mt-2">
						Special questions for engineering students
					</div>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row gap-4 text-blue-600">
				<Link href="/updates" className="hover:underline">
					Site Updates
				</Link>
				<Link href="https://ricepuritytest.com" className="hover:underline">
					View the original Rice Purity Test
				</Link>
			</div>
		</div>
	);
}
