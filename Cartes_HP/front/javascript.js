
//*************************API***************************/
let data;

function fetchHP(id) {

  return fetch('https://hp-api.lainocs.fr/characters/' + id)
    .then((response) => response.json())
}

function fetchHPAll() {
  return fetch('https://hp-api.lainocs.fr/characters/')
    .then((response) => response.json())
}

/*affichage nom des personnages sur page d'Accueil*/
async function displayHPAllA() {
  data = await fetchHPAll()

  document.getElementById('harry-name').innerHTML = `
      <h1>${data[0].name}</h1>
      `;

  document.getElementById('hermione-name').innerHTML = `
      <h1>${data[3].name}</h1>
      `;

  document.getElementById('ron-name').innerHTML = `
      <h1>${data[1].name}</h1>
      `;

  document.getElementById('luna-name').innerHTML = `
      <h1>${data[15].name}</h1>
      `;

  document.getElementById('cho-name').innerHTML = `
      <h1>${data[16].name}</h1>
      `;

  document.getElementById('gilderoy-name').innerHTML = `
      <h1>${data[14].name}</h1>
      `;

  document.getElementById('cedric-name').innerHTML = `
      <h1>${data[11].name}</h1>
      `;

  document.getElementById('nymphadora-name').innerHTML = `
      <h1>${data[20].name}</h1>
      `;

  document.getElementById('severus-name').innerHTML = `
      <h1>${data[5].name}</h1>
      `;

  document.getElementById('draco-name').innerHTML = `
      <h1>${data[2].name}</h1>
      `;

  document.getElementById('lord-name').innerHTML = `
      <h1>${data[7].name}</h1>
      `;


}

displayHPAllA()

/*affichage nom des personnages sur page de Détails*/
async function displayHPAllD() {
  data = await fetchHPAll()

  document.getElementById('harry-name-details').innerHTML = `
      <h1>${data[0].name}</h1>
      `;

  document.getElementById('hermione-name-details').innerHTML = `
      <h1>${data[3].name}</h1>
      `;

  document.getElementById('ron-name-details').innerHTML = `
      <h1>${data[1].name}</h1>
      `;

  document.getElementById('luna-name-details').innerHTML = `
      <h1>${data[15].name}</h1>
      `;

  document.getElementById('cho-name-details').innerHTML = `
      <h1>${data[16].name}</h1>
      `;

  document.getElementById('gilderoy-name-details').innerHTML = `
      <h1>${data[14].name}</h1>
      `;

  document.getElementById('cedric-name-details').innerHTML = `
      <h1>${data[11].name}</h1>
      `;

  document.getElementById('nymphadora-name-details').innerHTML = `
      <h1>${data[20].name}</h1>
      `;

  document.getElementById('severus-name-details').innerHTML = `
      <h1>${data[5].name}</h1>
      `;

  document.getElementById('draco-name-details').innerHTML = `
      <h1>${data[2].name}</h1>
      `;

  document.getElementById('lord-name-details').innerHTML = `
      <h1>${data[7].name}</h1>
      `;


}

displayHPAllD()


/*affichage les informations des personnages sur page de Détails*/
async function displayHPAllD2() {
  data = await fetchHPAll()
  let birthday = data[0].birthday.slice(0, -14)


  document.getElementById('harry-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[0].blood}</h1>
      <h1>${data[0].role}</h1>
      <h1>${data[0].actor}</h1>
      `;

  document.getElementById('hermione-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[3].blood}</h1>
      <h1>${data[3].role}</h1>
      <h1>${data[3].actor}</h1>
      `;

  document.getElementById('ron-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[1].blood}</h1>
      <h1>${data[1].role}</h1>
      <h1>${data[1].actor}</h1>
      `;

  document.getElementById('luna-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[15].blood}</h1>
      <h1>${data[15].role}</h1>
      <h1>${data[15].actor}</h1>
      `;

  document.getElementById('cho-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[16].blood}</h1>
      <h1>${data[16].role}</h1>
      <h1>${data[16].actor}</h1>
      `;

  document.getElementById('gilderoy-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[14].blood}</h1>
      <h1>${data[14].role}</h1>
      <h1>${data[14].actor}</h1>
      `;

  document.getElementById('cedric-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[11].blood}</h1>
      <h1>${data[11].role}</h1>
      <h1>${data[11].actor}</h1>
      `;

  document.getElementById('nymphadora-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[20].blood}</h1>
      <h1>${data[20].role}</h1>
      <h1>${data[20].actor}</h1>
      `;

  document.getElementById('severus-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[5].blood}</h1>
      <h1>${data[5].role}</h1>
      <h1>${data[5].actor}</h1>
      `;

  document.getElementById('draco-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[2].blood}</h1>
      <h1>${data[2].role}</h1>
      <h1>${data[2].actor}</h1>
      `;

  document.getElementById('lord-informations').innerHTML = `
      <h1>${birthday}</h1>
      <h1>${data[7].blood}</h1>
      <h1>${data[7].role}</h1>
      <h1>${data[7].actor}</h1>
      `;


}

displayHPAllD2()





//***********************menu burger******************//
function toggleNav() {
  var nav = document.querySelector('nav');
  nav.style.left = (nav.style.left === '0px') ? '-250px' : '0px';
}

/******************** recherche ********************/

// Fonction de recherche 
function effectuerRecherche() {
  var searchTerm = document.getElementById('champsRecherche').value;
  var resultsDiv = document.getElementById('resultatsRecherche');

  // Afficher la phrase "Résultat de recherche"
  resultsDiv.innerHTML = 'Résultats de la recherche pour : ' + searchTerm;
}

const champsRecherche = document.getElementById('champsRecherche');
champsRecherche.addEventListener('input', function(event) {
    // Récupérez la valeur de la barre de recherche
    const searchTerm = event.target.value.toLowerCase();
    
    // Parcourez les divs contenant les cartes
    const cartes = document.querySelectorAll('.carte-search');
    cartes.forEach(carte => {
        const imageName = carte.querySelector('img').getAttribute('alt').toLowerCase();
        // Si le nom de la carte correspond à la recherche, affichez la div, sinon masquez-la
        if (imageName.includes(searchTerm)) {
            carte.style.display = 'block';
        } else {
            carte.style.display = 'none';
        }
    });
});


/************************* filtre icones *********************************/

// Fonction pour filtrer les cartes par maison de Harry Potter
function filterByHouse(house) {
    // Parcourez les divs contenant les cartes
    const cartes = document.querySelectorAll('.carte-search');
    cartes.forEach(carte => {
        // Récupérez l'attribut alt de l'image de la carte
        const imageName = carte.querySelector('img').getAttribute('alt');
        // Si l'image correspond à la maison de Harry Potter sélectionnée, affichez la carte, sinon masquez-la
        if (house === "Gryffindor" && (imageName === "Carte Harry Potter" || imageName === "Carte Hermione Granger" || imageName === "Carte Ron Weasley")) {
            carte.style.display = 'block';
        } else if (house === "Ravenclaw" && (imageName === "Carte Luna Lovegood" || imageName === "Carte Cho Chang" || imageName === "Carte Gilderoy Lockhart")) {
            carte.style.display = 'block';
        } else if (house === "Hufflepuff" && (imageName === "Carte Cedric Diggory" || imageName === "Carte Nymphadora Tonks" || imageName === "Carte Newt Scamander")) {
            carte.style.display = 'block';
        } else if (house === "Slytherin" && (imageName === "Carte Severus Snape" || imageName === "Carte Draco Malfoy" || imageName === "Carte Lord Voldemort")) {
            carte.style.display = 'block';
        } else {
            carte.style.display = 'none';
        }
    });
}


/***************************icones******************************** */

function scrollToElementSmooth(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Sélectionner toutes les icônes avec la classe "star"
var icones = document.querySelectorAll('.star');

icones.forEach(function(icon) {
    icon.addEventListener('click', function() {
        this.querySelector('svg').classList.add('yellow-fill');
    });
});

/********************** swiper **************************/






/************************************* formulaire d'échanges (pas encore fonctionnel) ****************************************************/

function afficherFormulaire() {
  // Afficher l'overlay
  document.getElementById('overlay').style.display = 'flex';
}

function fermerFormulaire() {
  // Cacher l'overlay
  document.getElementById('overlay').style.display = 'none';
}

/******************************Get la maison depuis thonny**************************************/ 

fetch('https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8/iot/card') 
    .then(response => response.json())
    .then(data => {
        document.getElementById('house').textContent = data.house;
    })
    .catch(error => console.error("Erreur lors de la récupération de la maison du personnage :", error));





/*************************** cartes variables ***********************************/ 

// var cartes = [
//   { name: "Harry Potter", house: "Gryffondor", number: 1 },
//   { name: "Hermione Granger", house: "Gryffondor", number: 2 },
//   { name: "Ron Weasley", house: "Gryffondor", number: 3 },
//   { name: "Luna Lovegood", house: "Ravenclaw", number: 4 },
//   { name: "Cho Chang", house: "Ravenclaw", number: 5 },
//   { name: "Gilderoy Lockhart", house: "Ravenclaw", number: 6 },
//   { name: "Cedric Diggory", house: "Hufflepuff", number: 7 },
//   { name: "Nymphadora Tonks", house: "Hufflepuff", number: 8 },
//   { name: "Newt Scamander", house: "Hufflepuff", number: 9 },
//   { name: "Severus Snape", house: "Slytherin", number: 10 },
//   { name: "Draco Malfoy", house: "Slytherin", number: 11 },
//   { name: "Lord Voldemort", house: "Slytherin", number: 12 }
// ];


// // Tableau contenant les chemins vers les images de chaque carte
// var chemins = [
//   "images/Carte_HP_1.png",
//   "images/Carte_HP_2.png",
//   "images/Carte_HP_3.png",
//   "images/Carte_HP_4.png",
//   "images/Carte_HP_5.png",
//   "images/Carte_HP_6.png",
//   "images/Carte_HP_7.png",
//   "images/Carte_HP_8.png",
//   "images/Carte_HP_9.png",
//   "images/Carte_HP_10.png",
//   "images/Carte_HP_11.png",
//   "images/Carte_HP_12.png"
// ];

// // Supposons que vous avez un conteneur avec l'id "cartes-container" dans votre HTML
// var containerGryffindor = document.getElementById("gryffindor-cards");
// var containerRavenclaw = document.getElementById("ravenclaw-cards");
// var containerHufflepuff = document.getElementById("hufflepuff-cards");
// var containerSlytherin = document.getElementById("slytherin-cards");

// // Boucle à travers les cartes et crée des éléments d'image pour chaque carte
// cartes.forEach(function(carte) {
//     var img = document.createElement("img");
//     img.src = "images/Carte_HP_" + carte.number + ".png"; // Assurez-vous que vos images sont nommées de manière appropriée
//     img.alt = carte.name;
//     img.title = carte.name + " - " + carte.house;

//     // Ajoutez l'image à la div correspondante en fonction de la maison de la carte
//     if (carte.house === "Gryffindor") {
//         containerGryffindor.appendChild(img);
//     } else if (carte.house === "Ravenclaw") {
//         containerRavenclaw.appendChild(img);
//     } else if (carte.house === "Hufflepuff") {
//         containerHufflepuff.appendChild(img);
//     } else if (carte.house === "Slytherin") {
//         containerSlytherin.appendChild(img);
//     }
// });
