import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/poppins";
import { Toaster } from "sonner";

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
    <html lang="en" suppressHydrationWarning>
      <body className="">
        {children} <Toaster position='top-center' richColors />
      </body>
    </html>
  );
}
