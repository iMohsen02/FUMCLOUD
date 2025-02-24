import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "FUMCLOUD | Ferdowsi Cloud Computing",
    description:
        "Ferdowsi University of Mashhad(FUM) cloud computing course page",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className=" bg-dark-dark text-gray-200  mx-auto">
                {children}
            </body>
        </html>
    );
}
