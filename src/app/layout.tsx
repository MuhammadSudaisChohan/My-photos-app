
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideMenu from "./component/sidebar";
import Navbar from "./component/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photos App",
  description: "Created by Sudais Chohan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar/>
       <div className="flex"> 
        <SideMenu />
      <div className="w-full ">  {children} </div>
        </div>
        </body>
    </html>
  );
}
