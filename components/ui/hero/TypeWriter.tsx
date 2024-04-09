"use client";

import DownIcon from "@/components/ui/icon/DownIcon";
import { TypewriterEffectSmooth } from "./TypeWriterHelper";
import { words } from "@/copy/type-writer";

export function Typewriter() {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      </div>
      <p className="text-md italic mb-10">Let me break down why I would be the perfect fit for your company</p>
      <DownIcon />
    </div>
  );
}
