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
    template: "%s | Jagdeep Developer  | Full Stack Web Developer",
  },
  description:
    "Jagdeep Developer is a passionate and professional Full Stack Web Developer, currently pursuing a Bachelor of Computer Applications (BCA) from Punjabi University Patiala. He specializes in modern web development technologies, search engine optimization (SEO), and building scalable, high-performance web applications. With a strong focus on clean code, user experience, and innovative solutions, Jagdeep aims to create impactful digital products that deliver real business value.",
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

   verification: {
    google: "aBk59i1vYMUCiO9l_OIQUiJtQNXbKvV89ylaxnEeR1E",
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