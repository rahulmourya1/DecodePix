import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Extract text from images",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}