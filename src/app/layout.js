import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-rubik'
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${rubik.variable}`}>
            <body className={`font-sans`}>
                {children}
            </body>
        </html>
    )
}

