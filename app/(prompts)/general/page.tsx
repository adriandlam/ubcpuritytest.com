"use client";

import { GENERAL } from "@/data/prompts";
import PurityTest from "@/components/PurityTest";

export default function GeneralPage() {
	return <PurityTest title="General UBC Test" prompts={GENERAL} />;
}
