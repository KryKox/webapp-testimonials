import {Toaster} from "@/components/ui/toaster";
import {Providers} from "./Providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({ src: "../fonts/Satoshi-Variable.ttf" });

export const metadata: Metadata = {
  title: "Sphere",
  description: "Create your own products and sell, delivery them to your customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} antialiased`}
      >
        <Providers>
            {children}
            <Toaster />
        </Providers>
      </body>
    </html>
  );
}
