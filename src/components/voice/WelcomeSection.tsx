"use client"

import { MicIcon } from "lucide-react";
import { useParams } from "next/navigation";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

function WelcomeSection() {
  const { locale } = useParams();
  const dictBase = (locale === 'ar' ? ar : en) as typeof en;
  const voice = (dictBase as typeof en).voice || en.voice;
  return (
    <div className="z-10 flex items-center justify-between bg-linear-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20 mb-12 overflow-hidden">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary">{voice.welcome.badge}</span>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">{voice.welcome.title}</h1>
          <p className="text-muted-foreground">
            {voice.welcome.subtitle}
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="w-32 h-32 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
          <MicIcon className="w-16 h-16 text-primary" />
        </div>
      </div>
    </div>
  );
}
export default WelcomeSection;
