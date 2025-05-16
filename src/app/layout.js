import { Bellefair, Barlow_Condensed } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";

const bellefair = Bellefair({
  variable:"--font-bellefair",
  subsets:["latin"],
  weight:'400'
})
const barlow = Barlow_Condensed({
  variable:"--font-barlow",
  subsets:["latin"],
  weight:['100','200','300','400','500','600']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-cover bg-no-repeat bg-center min-h-screen grid grid-rows-[auto_1fr] relative"
      >
        <Header/>
        <main className="flex justify-center items-center">
          <div className="relative z-1">
            {children}
          </div>
          <BackgroundImage/>
        </main>
      </body>
    </html>
  );
}
