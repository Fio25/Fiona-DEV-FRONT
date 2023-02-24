'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

//Variables de ma barre d'outils//
let buttonToolbar = document.querySelector("#toolbar-toggle");
let buttonHide = document.querySelector(".hide");
let arrow = document.querySelector(".fa-arrow-down");

//Variables de mes boutons play etc//
let previous = document.querySelector(".fa-backward");
let play = document.querySelector(".fa-play");
let next = document.querySelector(".fa-forward");
let random = document.querySelector(".fa-random");

//Tableau des photos pour les slides//
let photos = [
    {photo: "images/1.jpg", title: "Wall Art"},
    {photo: "images/2.jpg", title: "Bridge"},
    {photo: "images/3.jpg", title: "Colorful Building"},
    {photo: "images/4.jpg", title: "image 4"},
    {photo: "images/5.jpg", title: "By Night"},
    {photo: "images/6.jpg", title: "Tour Eiffel"}
];

//Variable de mes index//
let i = 0

let photoJS = document.querySelector("#photoHtml")
let titre = document.querySelector("#titleImage")
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

//Boutons "Barre d'outils" permettant de cacher les boutons play etc//
buttonToolbar.addEventListener("click", () => {
    buttonHide.classList.toggle("hide");
    arrow.classList.toggle("fa-arrow-down")
    arrow.classList.toggle("fa-arrow-up")
})

function refresh() {
    document.querySelector("img").src = photos[0].photo; 
    document.querySelector("figcaption")  = photos[0].title;
}

//Bouton Précédent menant à la slide précédente//
function slidePrevious() {
    i--;
    if (i > photos.length) {
      i = photos.length -1
    }
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
refresh()

previous.addEventListener("click", slidePrevious);



