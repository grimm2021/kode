async function hentJoke(){
    console.log("Jeg er blevet klikket på")
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await response.json()
    console.log(data.value)
//'async' og 'await' skal alrid kombineres, da 'await' er en asynkron handling. Fetch laver et htp-kald for at hente noget på nettet. Derfor skal det kombineres med et *response.json()* 


// Hiv fat i h1 element vha ID
// Sæt innerText lig med value fra fata
    document.getElementById("joke").innerText;
    document.getElementById("joke").innerHTML = data.value;
}
// https://api.chucknorris.io/jokes/random
