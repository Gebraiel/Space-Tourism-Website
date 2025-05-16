export default async function getDestinations(){
  const res = await fetch('https://space-tourism-website-pi-seven.vercel.app/api/destinations',{ cache: "no-store" });
  const destinations = await res.json();
  return destinations;
}