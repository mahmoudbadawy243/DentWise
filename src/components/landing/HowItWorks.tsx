import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import getTrans from "@/lib/translation";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

async function HowItWorks() {
  const locale = await getCurrentLocale();
  const dict = await getTrans(locale);
  return (
    <section className="relative pt-32 pb-10 px-6 z-10 max-w-7xl mx-auto" id="how-it-works" >
      {/* HEADER */}
      <div className="text-center mb-20 space-y-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
          <ZapIcon className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">{dict.howItWorks.badge}</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            {dict.howItWorks.headingLine1}
          </span>
          <br />
          <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {dict.howItWorks.headingLine2}
          </span>
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {dict.howItWorks.description}
        </p>
      </div>

      {/* STEPS */}
      <div className="relative">
        {/* CONNECTION LINE */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* STEP 1 */}
          <div className="relative group">
            <div className="relative bg-linear-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                1
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image src="/graudio.png" alt="Voice Chat" width={40} height={40} className="w-14 dark:hidden" />
                <Image src="/audio.png" alt="Voice Chat" width={40} height={40} className="w-14 hidden dark:block" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">{dict.howItWorks.steps[0].title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                {dict.howItWorks.steps[0].desc}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {dict.howItWorks.steps[0].pills[0]}
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {dict.howItWorks.steps[0].pills[1]}
                </span>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative group">
            <div className="relative bg-linear-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                2
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image src="/grbrain.png" alt="AI Brain" width={40} height={40} className="w-14 dark:hidden" />
                <Image src="/brain.png" alt="AI Brain" width={40} height={40} className="w-14 hidden dark:block" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">{dict.howItWorks.steps[1].title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                {dict.howItWorks.steps[1].desc}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {dict.howItWorks.steps[1].pills[0]}
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {dict.howItWorks.steps[1].pills[1]}
                </span>
              </div>
            </div>
          </div>

          {/* STEP 3  */}
          <div className="relative group">
            <div className="relative bg-linear-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                3
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image src="/grcalendar.png" alt="Calendar" width={40} height={40} className="w-14 dark:hidden" />
                <Image src="/calendar.png" alt="Calendar" width={40} height={40} className="w-14 hidden dark:block" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">{dict.howItWorks.steps[2].title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                {dict.howItWorks.steps[2].desc}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {dict.howItWorks.steps[2].pills[0]}
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {dict.howItWorks.steps[2].pills[1]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="text-center mt-16">
        <SignUpButton mode="modal">
          <Button size="lg">
            <ArrowRightIcon className="mr-2 size-5" />
            {dict.howItWorks.bottomCta}
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
}

export default HowItWorks;
