import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";

import { DM_Sans } from "next/font/google";
import {twMerge} from "tailwind-merge"
const dmSans = DM_Sans({ subsets: ["latin"] });
import { ThemeProvider } from "@/providers/theme-provider"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
		<ClerkProvider>
			<html lang="en" className="relative">
				<body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]" , inter.className)}>
				<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
					<QueryProvider>
						<SheetProvider />
						<Toaster />
						{children}
					</QueryProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
