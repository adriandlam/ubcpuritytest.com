"use client";

import { ENGINEERING } from "@/data/prompts";
import PurityTest from "@/components/PurityTest";

export default function EngineeringPage() {
	return <PurityTest title="Engineering UBC Test" prompts={ENGINEERING} />;
}
