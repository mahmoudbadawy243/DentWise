"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowBigUpIcon } from "lucide-react";
import { useParams } from "next/navigation";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";
function Footer() {

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const { locale } = useParams();
  const dict = (locale === 'ar' ? ar : en) as typeof en;

  return (
    <footer className="px-6 py-12 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="DentWise Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold text-lg">{dict.common.appName}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {dict.footerDict.slogan}
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3">{dict.footerDict.product}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  {dict.footerDict.howItWorks}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  {dict.footerDict.pricing}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  {dict.footerDict.faq}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">{dict.footerDict.support}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  {dict.footerDict.helpCenter}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  {dict.footerDict.contactUs}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  {dict.footerDict.status}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">{dict.footerDict.legal}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  {dict.footerDict.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  {dict.footerDict.terms}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  {dict.footerDict.security}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 {dict.common.appName}. {dict.footerDict.copyright}</p>
        <Button 
          onClick={scrollToTop}
          className="relative bottom-10 left-310 w-12 h-12 rounded-full bg-accent text-primary-foreground flex items-center justify-center shadow-md hover:bg-primary/30 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowBigUpIcon className="size-8 text-primary/90"/>
        </Button>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
