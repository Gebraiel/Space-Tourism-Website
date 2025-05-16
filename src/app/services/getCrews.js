export default async function getCrews(){
  const res = await fetch('http://localhost:3000/api/crews');
  const crews = await res.json();
  return crews;
}