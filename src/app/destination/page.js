import Destinations from "../components/Destinations";
import "./index.css";
export default async function Destination() {
  const res = await fetch('http://localhost:8080/destinations');
  const destinations = await res.json();
  console.log(destinations);

  return (
    <div className="px-6  h-full m-auto">
      <div className="flex justify-between">
        <h1 className="md:text-5 text-6 text-center md:text-left font-barlow text-white uppercase"><span className="text-white/25 mr-6">01</span> pick your Destination</h1>
      </div>
      <Destinations destinations={destinations}/>
    </div>  )
}
