import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
 

const play_fair = Playfair_Display({
  weight:['400'],
  subsets : ['latin'],
  style : "normal"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dizzy Blog",
  description: "Generated by Fiza Rafakat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${play_fair.className} antialiased bg-[#f3f1f6]  max-w-[1440px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
