// Main layout file for the Next.js application
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
//Importing Roboto font from Google Fonts
const roboto = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
// Metadata for the application (Used for SEO and social sharing)
export const metadata: Metadata = {
  title: "User Management Dashboard",
  description: "A simple user management dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-bg text-text`}>
        {children}
      </body>
    </html>
  );
}
