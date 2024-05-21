/*******************form connexion*******************/

const formbutton = document.querySelector('.connexion_button');

formbutton.addEventListener("click", (event) => {
    event.preventDefault();

    const pseudo = document.querySelector('#connexion_pseudo').value;
    const email = document.querySelector('#connexion_email').value;
    const password = document.querySelector('#connexion_password').value;
   
    const data = {
        pseudo: pseudo,
        email: email,
        password: password
    };

      // Stocker les informations d'inscription dans le localStorage
      localStorage.setItem('informationsConnexion', JSON.stringify(data));

    console.log(JSON.stringify(data));

    fetch("http://192.168.1.66:3000/auth/login", {

    method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        
        if (!res.ok) {
            throw new Error("Erreur lors de la connexion");
        }
        
        return res.json();
    })
    .then(data => {
        
        console.log(data);
        const pseudo = data.pseudo;

        window.location.href = "index2.html";
    })
    .catch(error => {
        console.error("Erreur:", error.message);
    });
});









/*******************form connexion*******************/

// const formbutton = document.querySelector('.connexion_button');

// formbutton.addEventListener("click", (event) => {
//     event.preventDefault();

//     const email = document.querySelector('#connexion_email').value;
//     const password = document.querySelector('#connexion_password').value;

//     const data = {
//         email: email,
//         password: password
//     };

//     console.log(JSON.stringify(data));

//     fetch("http://192.168.1.66:3000/auth/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data)
//     })
//     .then(res => {
//         if (!res.ok) {
//             throw new Error("Erreur lors de la connexion");
//         }
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         const pseudo = data.pseudo;

//         const pseudoDiv = document.getElementById("pseudoDiv");
//         pseudoDiv.textContent = "Bienvenue, " + pseudo + "!";

//         window.location.href = "index2.html";

//         // Ajout de la requête GET pour récupérer les informations de l'utilisateur
//         const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjMsImVtYWlsIjoiY0BjIiwiaWF0IjoxNzE1MjYxMzMxLCJleHAiOjE3MTUyNjQ5MzF9.8MxALw50AERInpAwCRNuS0jnEc_5Q0z9KVg5fTt3qDo'; // Récupérez le token d'authentification depuis l'endroit approprié dans votre application

//         fetch("http://192.168.1.66:3000/user", {
//             method: "GET",
//             headers: {
//                 "x-access-token": token
//             }
//         })
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error("Erreur lors de la récupération des informations de l'utilisateur");
//             }
//             return res.text();
//         })
//         .then(data => {
//             console.log("Réponse du serveur:", data);
//             try {
//                 const userData = JSON.parse(data);
//                 const pseudoDiv = document.getElementById("pseudoDiv");
//                 pseudoDiv.textContent = "Bienvenue, " + userData + "!";
//             } catch (error) {
//                 console.error("Erreur lors de l'analyse de la réponse JSON:", error);
//             }
//         })
//         .catch(error => {
//             console.error("Erreur lors de la récupération des informations de l'utilisateur:", error.message);
//         });
//     })
//     .catch(error => {
//         console.error("Erreur:", error.message);
//     });
// });
