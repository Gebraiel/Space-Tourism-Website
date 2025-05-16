export default async function getCrews(){
  const res = await fetch('https://space-tourism-website-pi-seven.vercel.app/api/crews',{ cache: "no-store" });
  const crews = await res.json();
  return crews;
}