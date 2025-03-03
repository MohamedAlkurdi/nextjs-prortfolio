import React from "react";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
    variable: "--font-rubik-sans",
    subsets: ['latin']
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return children;
}

