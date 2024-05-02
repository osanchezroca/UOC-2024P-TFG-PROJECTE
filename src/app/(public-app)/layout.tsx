'use client'
import MenuAppBar from "@src/components/MenuAppBar";
import { GeoProvider } from "@src/contexts/GeoContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <GeoProvider>
      <div className="flex flex-col w-100 h-full justify-stretch relative">
        <MenuAppBar />
        {children}
      </div>
    </GeoProvider>
  </>;
}
