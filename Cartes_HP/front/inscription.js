/***************************** formulaire d'inscription **********************************/


const formInscription = document.querySelector('.form_inscription')

formInscription.addEventListener("submit", (event) => {
    event.preventDefault()
    let pseudo = document.querySelector('#inscription_pseudo').value
    let email = document.querySelector('#inscription_email').value
    let password = document.querySelector('#inscription_password').value

    const data =  {
        pseudo: pseudo,
        email: email,
        password: password
    }

    // Stocker les informations d'inscription dans le localStorage
    localStorage.setItem('informationsInscription', JSON.stringify(data));

    console.log(JSON.stringify(data))

    fetch("http://192.168.1.66:3000/auth/signUp", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data)

    // Redirection vers la Page Profil
    window.location.href = "index3.html";

    })
    .catch(e=> console.log(e))

});