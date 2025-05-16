export default async function getDestinations(){
  const res = await fetch('http://localhost:3000/api/destinations',{ cache: "no-store" });
  const destinations = await res.json();
  return destinations;
}