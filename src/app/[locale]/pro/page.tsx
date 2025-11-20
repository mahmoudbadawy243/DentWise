import Navbar from "@/components/Navbar";
import { currentUser } from "@clerk/nextjs/server";
import { CrownIcon } from "lucide-react";
import { redirect } from "next/navigation";
import getTrans from "@/lib/translation";
import { Locale } from "@/i18n.config";
import en from "@/dictionaries/en.json";
import PricingTableTheme from "./PricingTableTheme";

async function ProPage({ params }: { params: Promise<{ locale: Locale }> }) {

  const user = await currentUser();
  if (!user) redirect("/");
  const { locale } = await params;
  const dict = (await getTrans(locale)) as typeof en;

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <div className="mb-12 pt-2 overflow-hidden">
          <div className="flex items-center justify-between bg-linear-to-br from-primary/10 to-background rounded-3xl p-8 border border-primary/20">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primar/10 rounded-full border border-primary/20 ">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">{dict.proPage?.badge}</span>
              </div>

              <div>
                <h1 className="text-4xl font-bold mb-2">{dict.proPage?.title}</h1>
                <p className="text-muted-foreground max-w-4xl">
                  {dict.proPage?.subtitle}
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <CrownIcon className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* PRICING SECTION */}
        <div className="space-y-8 pb-20">
          <div className="text-center space-y-4 pb-10">
            <h2 className="text-3xl font-bold">{dict.proPage?.plans.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {dict.proPage?.plans.description}
            </p>
          </div>

        <PricingTableTheme />

        </div>
      </div>
    </>
  );
}

export default ProPage;
