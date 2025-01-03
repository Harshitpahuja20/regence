import { Metadata } from "next";
import {NextUIProvider} from "@nextui-org/react";
import localFont from "next/font/local";
import "./globals.css";
// import "styles/tailwind.css";
import React from "react";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

// import { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import Main from "@/Components/Main/Page";
// import Signup from "@/Components/Signup/Page"
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

//   return (
//     <html lang="en">
//       <body>
//         {currentPath === "/" && <Main />}
//         {currentPath === "/signup" && <Signup />}
//         {children}
//       </body>
//     </html>
//   );
// }
