import React from "react";
import Crews from "../components/Crews";
import getCrews from "../services/getCrews";
export const metadata = {
  title: "Crew",
  description: "Meet the experienced space crew behind your journey. From commanders to specialists, learn about the people taking you beyond the stars.",
};
export default async function Crew() {
  const crews = await getCrews();
  return (
      <div className="container lg:max-w-[1110px] md:max-w-[688px] flex flex-col gap-6 h-full m-auto px-6">
        <div className="flex justify-between">
          <h1 className="w-full md:text-5 text-6 text-center md:text-left font-barlow text-white uppercase">
            <span className="text-white/25 mr-6">02</span> Meet your Crew
          </h1>
        </div>
        <Crews crews={crews}/>
      </div>
  );
}
