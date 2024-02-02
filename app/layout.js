import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Valley",
  description: "Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
          <Header/>
          {children}
      

      </body>
    </html>
  );
}
