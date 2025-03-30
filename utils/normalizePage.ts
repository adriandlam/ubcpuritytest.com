export default function normalizePage(page: string) {
	if (!page) return null;

	if (page.startsWith("/")) {
		return page.slice(1);
	}

	return page;
}
