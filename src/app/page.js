
import Link from "next/link";
import "./index.css";
import bg from "@/public/background-home-desktop.jpg";
import Image from "next/image";
import BackgroundImage from "./components/BackgroundImage";
export default function Home() {
  return (
        <div className="container lg:max-w-[1110px] md:max-w-[688px] z-1 relative px-6 py-32 h-full m-auto flex gap-20 lg:flex-row flex-col lg:justify-between justify-center  text-center lg:text-left lg:items-end md:items-center flex-wrap">
          <div className="text-blue-300 lg:w-[40%] md:w-[72%] animate-opacity">
            <p className="md:text-5 text-6 font-barlow">SO, YOU WANT TO TRAVEL TO</p>
            <h1 className="text-1 text-white font-bellefair">SPACE</h1>
            <p className="text-9 font-barlow">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <Link href="/destination"className="md:w-68 md:h-68 w-36 h-36 rounded-full bg-white flex justify-center items-center text-4 font-bellefair uppercase cursor-pointer hover:ring-[80px] duration-300 ring-white/10">Explore</Link>
        </div>
  );
}
