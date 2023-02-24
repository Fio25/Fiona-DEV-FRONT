// use strict sert à n'accepter aucune erreur afin d'avoir un code plus propre//
"use strict";

//Définition de l'url cible//
const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

//Cible le noeud (élément) HTML pour afficher la liste des pokémons//
const divPokemons = document.getElementById("pokemons");

//Cible le noeud HTML représentant le bouton//
const btn = document.getElementById("btn-pokemon");

//J'apelle mon bouton en lui mettant un event click//
btn.addEventListener('click', getPokemons)

function getPokemons() {

    //Instance de l'objet XHR//
    const xhr = new XMLHttpRequest();

    //Préparer la requête//
    xhr,open('GET', url);    
}