import React from 'react';
import Technologies from '../components/Technologies';
import getTechs from '../services/getTechs';

export const metadata = {
  title: "Technology",
  description: "Explore the advanced technology that powers interstellar travel. From launch vehicles to space capsules, experience innovation at its peak.",
};
export default async function Technology() {
  const techs = await getTechs();
  return (
      <div className="lg:max-w-[1275px] w-full flex flex-col gap-6 h-full m-auto lg:px-6 ">
        <div className="flex justify-between px-6">
          <h1 className="w-full md:text-5 text-6 text-center md:text-left font-barlow text-white uppercase lg:mb-0 mb-16">
            <span className="text-white/25 mr-6">03</span> SPACE LAUNCH 101
          </h1>
        </div>
        <Technologies techs={techs}/>
      </div>
  );
}
