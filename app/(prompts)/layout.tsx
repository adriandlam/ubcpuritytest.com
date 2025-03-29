import SuggestionsForm from "@/components/SuggestionsForm";

export default function PromptLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<div className="flex flex-col items-center justify-center text-center">
				<img src="/logo.svg" alt="UBC Purity Test" className="w-56 h-56 mb-6" />
				<h1 className="text-5xl font-bold mb-6">The UBC Purity Test</h1>
			</div>
			{children}

			<SuggestionsForm />
		</div>
	);
}
