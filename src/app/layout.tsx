import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Providers from "../../components/ThemMode/Provider";
import AuthProvider from "../../components/AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lamme",
  description: "Develop Your App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}   antialiased  bg-white  dark:bg-black `}
    >
      <body className="min-h-screen flex flex-col">
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        <Providers>
          <AuthProvider>
            <NavBar />
            <main className="grow w-full container">{children}</main>
            <Footer />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
