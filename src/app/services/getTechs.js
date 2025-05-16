export default async function getTechs(){
    const res = await fetch('http://localhost:3000/api/technologies');
    const techs = await res.json();
    return techs;
}