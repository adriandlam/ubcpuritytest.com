"use client";

import { ARTS } from "@/data/prompts";
import PurityTest from "@/components/PurityTest";

export default function ArtsPage() {
	return <PurityTest title="Arts UBC Test" prompts={ARTS} />;
}
