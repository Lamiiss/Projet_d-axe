


// const  nombredefonction (req, res)

// res.json ([house  : lastHouse])

// export nombredefonction



// Contrôleur pour la route '/iot/card'
const getCard = async (req, res) => {
    
        var houses = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"],
            randomIndex = Math.floor(Math.random() * houses.length),
            maisonDuPersonnage = houses[randomIndex];
            res.json({ house: maisonDuPersonnage });

}

export { getCard }

