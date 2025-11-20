import type { Metadata } from "next";
import { Cairo, Geist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import UserSync from "../../components/UserSync";
import TanStackProvider from "../../components/providers/TanStackProvider";
import { Toaster } from "sonner";
import { ThemeProvider } from "../../components/providers/theme-provider";
import { Directions, Languages } from "../../i18n.config";

type LanguageType = 'en' | 'ar'

// for localization
export async function generateStaticParams() {
  return [{ locale: Languages.ARABIC }, { locale: Languages.ENGLISH }];
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});


export const metadata: Metadata = {
  title: "DentWise - AI Powered Dental Assistant",
  description:
    "Get instant dental advice through voice calls with our AI assistant. Avaiable 24/7.",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const localeCandidate = params.locale;
  const locale: LanguageType = localeCandidate === Languages.ARABIC ? 'ar' : 'en';

  return (
    <TanStackProvider>
    <ClerkProvider >
      <html lang={locale} dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR} >
        <body className={
          locale === Languages.ARABIC ? cairo.className : geistSans.className
        }>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <UserSync />
            <Toaster />
          {children}
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
    </TanStackProvider>
  );
}
