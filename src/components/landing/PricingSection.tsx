import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CheckCircleIcon } from "lucide-react";
import getTrans from "@/lib/translation";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

async function PricingSection() {
  const locale = await getCurrentLocale();
  const dict = await getTrans(locale);
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-linear-to-b from-background via-muted/3 to-background" id="pricing">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-background via-muted/5 to-primary/5">
          <div className="absolute inset-0 bg-[linear-linear(to_right,#e2e8f0_1px,transparent_1px),linear-linear(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-linear(ellipse_75%_50%_at_50%_50%,#000_50%,transparent_85%)] opacity-20"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-linear(circle_at_center,hsl(var(--primary)/0.06),transparent_70%)]"></div>
      </div>

      <div className="space-y-24 text-center relative z-10 max-w-7xl mx-auto">
        {/* Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary">{dict.pricing.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              {dict.pricing.headingLine1}
            </span>
            <br />
            <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {dict.pricing.headingLine2}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {dict.pricing.description}
          </p>
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-16 md:gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="relative group ">
            <div className="mx-8 md:mx-0 relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{dict.pricing.free.name}</h3>
                  <div className="flex items-end gap-1 justify-center">
                    <span className="text-4xl font-bold">{dict.pricing.free.price}</span>
                    <span className="text-muted-foreground mb-1">{dict.pricing.perMonth}</span>
                  </div>
                  <p className="text-muted-foreground">{dict.pricing.free.features[0]}</p>
                </div>
                <SignUpButton mode="modal">
                  <Button className="w-full py-3 bg-linear-to-r from-muted to-muted/80 text-foreground rounded-xl font-semibold hover:bg-primary/5 hover:text-primary/80">
                    {dict.pricing.free.cta}
                  </Button>
                </SignUpButton>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.free.features[0]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.free.features[1]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.free.features[2]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.free.features[3]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Plan - Featured */}
          <div className="relative group">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="mt-[-10px] bg-linear-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {dict.pricing.basic.badge}
              </div>
            </div>

            <div className="mx-4 md:mx-0 relative bg-linear-to-br from-card/95 to-card/70 backdrop-blur-xl rounded-3xl p-8 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/20 scale-105">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{dict.pricing.basic.name}</h3>
                  <div className="flex items-end gap-1 justify-center">
                    <span className="text-4xl font-bold bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      {dict.pricing.basic.price}
                    </span>
                    <span className="text-muted-foreground mb-1">{dict.pricing.perMonth}</span>
                  </div>
                  <p className="text-muted-foreground">{dict.pricing.basic.features[2]}</p>
                </div>

                <Button className="w-full py-3 bg-primary/80 hover:bg-accent/80 hover:text-primary/80 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  {dict.pricing.basic.cta}
                </Button>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.basic.features[0]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.basic.features[1]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.basic.features[2]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.basic.features[3]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.basic.features[4]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.basic.features[5]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative group mx-8 md:mx-0">
            <div className="relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{dict.pricing.pro.name}</h3>
                  <div className="flex items-end gap-1 justify-center">
                    <span className="text-4xl font-bold">{dict.pricing.pro.price}</span>
                    <span className="text-muted-foreground mb-1">{dict.pricing.perMonth}</span>
                  </div>
                  <p className="text-muted-foreground">{dict.pricing.pro.features[2]}</p>
                </div>

                <Button
                  variant="outline"
                  className="w-full py-3 border-2 border-primary/20 hover:border-primary/40  hover:bg-primary/5 hover:text-primary/80 rounded-xl font-semibold transition-all duration-300"
                >
                  {dict.pricing.pro.cta}
                </Button>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.pro.features[0]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.pro.features[1]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.pro.features[2]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.pro.features[3]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.pro.features[4]}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{dict.pricing.pro.features[5]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
