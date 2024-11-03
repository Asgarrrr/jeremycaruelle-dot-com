import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/navbar";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
  	variable: "--font-geist-mono",
	weight: "100 900",
});

const NewsreaderItalic = localFont({
	src: "./fonts/NewsreaderItalicVF.ttf",
	variable: "--font-newsreader",
	weight: "400",
});



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
      		<body
        		className={ `${ geistSans.variable } ${ geistMono.variable } ${ NewsreaderItalic.variable } font-sans antialiased` }
      		>
				<Providers>
					<div id="shat" className="z-10 fixed w-screen inset-x-0 top-0 h-20 bg-gradient-to-t dark:to-[#161616] from-transparent pointer-events-none"></div>
					<main className="mx-auto max-w-screen-sm overflow-x-hidden px-6 py-48 md:overflow-x-visible">
        				{ children }
					</main>
					<div id="shab" className="z-10 fixed w-screen inset-x-0 bottom-0 h-20 bg-gradient-to-t dark:from-[#161616] to-transparent pointer-events-none"></div>
					<Navbar />
				</Providers>
      		</body>
    	</html>
  	);
}