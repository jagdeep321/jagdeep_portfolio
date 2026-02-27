import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jagdeep.online"),
  title: {
    default: "Jagdeep Developer | Full Stack Web Developer",
    template: "%s | Jagdeep Developer",
  },
  description:
    "Jagdeep Developer is a professional Full Stack Web Developer. Currently pursuing BCA at Punjabi University Patiala. متخصص in modern web development, SEO, and scalable applications.",
  keywords: [
    "Jagdeep Developer",
    "Jagdeep Web Developer",
    "Full Stack Developer",
    "BCA Punjabi University Patiala",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Jagdeep" }],
  creator: "Jagdeep Developer",
  openGraph: {
    title: "Jagdeep Developer | Full Stack Web Developer",
    description:
      "Official website of Jagdeep Developer. Full Stack Web Developer building modern and SEO optimized websites.",
    url: "https://jagdeep.online",
    siteName: "Jagdeep Developer",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jagdeep.online",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}