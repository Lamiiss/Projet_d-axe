// /*************************** cartes variables ***********************************/ 

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




// const displayCards = async () => {
//   try {
//     const response = await fetch('http://192.168.1.66:3000/auth/openBooster', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
//       }
//     });

//     if (!response.ok) {
//       throw new Error('Erreur lors de la récupération des cartes utilisateur.');
//     }

//     const cards = await response.json();

//     const swiperContainer = document.querySelector('.swiper-cartes');
//     swiperContainer.innerHTML = '';

//     cards.forEach(card => {
//       const cardElement = document.createElement('div');
//       cardElement.textContent = card.name;
//       swiperContainer.appendChild(cardElement);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Écouteur d'événement pour le clic sur la div boosterContainer
// const boosterContainer = document.querySelector('.boosterContainer');
// boosterContainer.addEventListener('click', displayCards);

// const template = document.getElementById('template');
// // Appelez cette fonction lorsque la page profil est chargée
// displayCards();
