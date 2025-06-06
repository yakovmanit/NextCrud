import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-3xl mx-auto">
          <Navbar />
          <div className="mt-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
