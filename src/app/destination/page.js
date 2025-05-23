import Destinations from "../components/Destinations";
import getDestinations from "../services/getDestinations";
export const metadata = {
  title: "Destination",
  description: "Discover breathtaking destinations beyond Earth. Choose your next adventure among the Moon, Mars, Europa, and Titan.",
};
export default async function Destination() {
  const destinations = await getDestinations();

  return (
        <div className="container lg:max-w-[1110px] md:max-w-[688px] z-1 relative px-6 h-full m-auto">
          <div className="flex justify-between">
            <h1 className="md:text-5 text-6 text-center md:text-left font-barlow text-white uppercase"><span className="text-white/25 mr-6">01</span> pick your Destination</h1>
          </div>
          <Destinations destinations={destinations}/>
        </div>
    )
}
