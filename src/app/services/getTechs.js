export default async function getTechs(){
    const res = await fetch('http://localhost:3000/api/technologies',{ cache: "no-store" });
    const techs = await res.json();
    return techs;
}