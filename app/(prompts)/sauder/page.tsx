"use client";

import { SAUDER } from "@/data/prompts";
import PurityTest from "@/components/PurityTest";

export default function SciencePage() {
  return <PurityTest title="Sauder Test" prompts={SAUDER} />;
}
