// Je créée une constante pour mon url d'API//
const pokemonApi = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

//J'appelle ma div "affichage" html pour l'ammener sur js//
const affichage = document.getElementById("affichage");

//On créé fetch en mettant en paramètre l'url de l'API//
fetch(pokemonApi)
.then((response) => response.json())
.then((data) => {
    data.results.forEach(item => {
        console.log(item.name)
        const div = document.createElement("div")
        div.innerText = item.name
        affichage.append(div)
    })
});

console.log(data.results)
