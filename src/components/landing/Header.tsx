import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ToogleSwitch from "./toogle switch/ToogleSwitch";
import LanguageSwitcher from "../language-switcher";
import getTrans from "@/lib/translation";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

async function Header() { 
  const locale = await getCurrentLocale();
  const dict = await getTrans(locale);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* Light theme logo */}
          <Image src="/grlogo.png" alt="DentWise Logo" width={32} height={32} className="w-11 dark:hidden" />
          {/* Dark theme logo */}
          <Image src="/logo.png" alt="DentWise Logo" width={32} height={32} className="w-11 hidden dark:block" />
          <span className="font-semibold text-lg">{dict.common.appName}</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground">
            {dict.header.howItWorks}
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground">
            {dict.header.pricing}
          </a>
          <a href="#what-to-ask" className="text-muted-foreground hover:text-foreground">
            {dict.header.whatToAsk}
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">
            {dict.header.contact}
          </a>
        </div>

        <div className="flex items-center gap-3">

          <LanguageSwitcher />
          <ToogleSwitch />
          <SignInButton mode="modal">
            <Button variant={"ghost"} size={"sm"}>
              {dict.header.login}
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button size={"sm"}>{dict.header.signUp}</Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
}
export default Header;
