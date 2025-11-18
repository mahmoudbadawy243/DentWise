import CTA from "@/components/landing/CTA";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";
import WhatToAsk from "@/components/landing/WhatToAsk";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server"

export default async function Home() {

  const adminEmail = process.env.ADMIN_EMAIL
  const user = await currentUser()
  const userEmail = user?.emailAddresses[0]?.emailAddress
  if (userEmail === adminEmail) redirect("/admin")
  
    return (
    <>
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
    </>

  );
}
