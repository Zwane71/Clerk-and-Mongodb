import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navbar from "@/components/Navbar/Navbar";

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
		<ClerkProvider appearance={{ baseTheme: dark }}>
			<html lang='en'>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<ClerkLoading>
						<div className=' flex items-center justify-center h-screen text-2xl'>
							LOADING ...
						</div>
					</ClerkLoading>
					<ClerkLoaded>
						<div className='max-w-6xl mx-auto'>
							<div className='flex flex-col h-screen'>
								<Navbar />
								{children}
							</div>
						</div>
					</ClerkLoaded>
				</body>
			</html>
		</ClerkProvider>
	);
}
