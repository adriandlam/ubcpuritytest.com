"use client";

import { SCIENCES } from "@/data/prompts";
import PurityTest from "@/components/PurityTest";

export default function SciencePage() {
	return <PurityTest title="Sciences UBC Test" prompts={SCIENCES} />;
}
