import type { Metadata } from "next";
import "./globals.css";
// import Header from "../components/header"
import Footer from "../components/footer"
import Header from "../components/header";

export const metadata: Metadata = {
  title: "Abdullah....",
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
        className={``}
      >
       <Header/>
        {children}
    <Footer/>
      </body>
    </html>
  );
}
