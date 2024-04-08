"use client";

import { TypewriterEffectSmooth } from "./TypeWriterHelper";
import Link from "next/link";
import { words } from "@/copy/type-writer";

export function Typewriter() {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-md italic">Let me break down why I would be the perfect candidate for your company</p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      </div>
    </div>
  );
}
