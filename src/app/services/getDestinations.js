export default async function getDestinations(){
  const res = await fetch('http://localhost:3000/api/destinations');
  const destinations = await res.json();
  return destinations;
}