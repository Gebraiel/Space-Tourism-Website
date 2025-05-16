export default async function getTechs(){
    const res = await fetch('https://space-tourism-website-pi-seven.vercel.app/api/technologies',{ cache: "no-store" });
    const techs = await res.json();
    return techs;
}