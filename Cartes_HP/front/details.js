document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const cardId = params.get("id");
  
    async function fetchCard(id) {
      const url = `https://hp-api.lainocs.fr/characters/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      displayCard(data);
    }
  function displayCard(card) {
      const template = document.getElementById("card-details");
  
      template.style.display = "block";
      template.id = "";
      template.querySelector(".card-title").textContent = card.name;
      template.querySelector(".card-eyes").textContent =
        "Couleur des yeux : " + card.eyes;
      template.querySelector(".card-hairs").textContent =
        "Couleur des cheveux : " + card.hairs;
      template.querySelector(".card-blood").textContent = "Sang : " + card.blood;
      template.querySelector(".card-wand").textContent =
        "Baguette magique : " + card.wand;
      template.querySelector(".card-patronus").textContent =
        "Patronus : " + card.patronus;
      template.querySelector(".card-role").textContent = "Rôle : " + card.role;
      template.querySelector(".card-house").textContent =
        "Maison : " + card.house;
      template.querySelector(".card-actor").textContent =
        "Acteur : " + card.actor;
      template.querySelector(".card-img").src = card.image;
  
      // Envoi de la maison à Thonny
      sendDataToThonny(card.house);
    }

    function sendDataToThonny(house) {
        const url = "http://192.168.1.66:3000/"; // Vérifie que cette adresse IP et ce port sont corrects
        const data = { house: house };
    
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Maison envoyée avec succès à Thonny");
            } else {
              console.error("Échec de l'envoi de la maison à Thonny");
            }
          })
          .catch((error) => {
            console.error("Erreur lors de l'envoi de la maison à Thonny:", error);
          });
      }
    
      fetchCard(cardId); // Assure-toi que cette ligne est au bon endroit pour fonctionner correctement
    });


    const detailsLink = document.createElement("a");
      detailsLink.classList.add("card-details-link");
      detailsLink.href = `details.html?id=${card.slug}`;
      detailsLink.textContent = "Détails";


      //***********************menu burger******************//
function toggleNav() {
  var nav = document.querySelector('nav');
  nav.style.left = (nav.style.left === '0px') ? '-250px' : '0px';
}