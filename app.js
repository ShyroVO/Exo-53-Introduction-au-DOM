
let paragrapheUn = document.getElementById("paragraphe1");
let paragrapheDeux = document.getElementById("paragraphe2");
let paragrapheTrois = document.getElementById("paragraphe3");
let paragrapheQuatre = document.getElementById("paragraphe4");

let paragrapheModif = document.getElementById("paragrapheModif");

let petitSpan = document.querySelector("span");
let liens = document.querySelector("a");

paragrapheUn.style.color = "red";
paragrapheUn.style.width = "15rem";
paragrapheDeux.style.color = "red";
paragrapheDeux.style.width = "15rem";
paragrapheTrois.style.color = "red";
paragrapheTrois.style.width = "15rem";
paragrapheQuatre.style.color = "red";
paragrapheQuatre.style.width = "15rem";

paragrapheDeux.style.animationName = "couleur";
paragrapheDeux.style.animationDuration = "6s";

paragrapheModif.innerHTML = "Un petit Chat";

petitSpan.style.background = "grey";
petitSpan.style.display = "block"

liens.innerText = "Je suis";