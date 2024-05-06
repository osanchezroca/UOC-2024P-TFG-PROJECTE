import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@src/components/providers/Providers";
import { TenantContext, TenantProvider } from "@src/contexts/TenantContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TFG",
  description: "Oscar's TFG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
