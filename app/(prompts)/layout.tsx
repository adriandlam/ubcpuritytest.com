import SuggestionsForm from "@/components/SuggestionsForm";

export default function PromptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center text-center">
        <img src="/logo.svg" alt="UBC Purity Test" className="w-56 h-56 mb-6" />
      </div>
      <main>{children}</main>
      <footer className="mt-16">
        <SuggestionsForm />
      </footer>
    </div>
  );
}
