
const containerFacile = document.querySelector(".containerFacile")
const containerMedio = document.querySelector(".containerMedio")
const containerDifficile = document.querySelector(".containerDifficile")
const selectLevel = document.getElementById("level")
const btnGioca = document.getElementById("gioca")

btnGioca.addEventListener("click", function(){

    const level = selectLevel.value
    
    if(level === "facile"){
        containerFacile.classList.remove("hide")
        containerMedio.classList.add("hide")
        containerDifficile.classList.add("hide")

        for(let i = 1; i <= 49; i++){

            const square = createSquare()

            containerFacile.append(square)
        }

    } else if(level === "medio"){
        containerMedio.classList.remove("hide")
        containerDifficile.classList.add("hide")
        containerFacile.classList.add("hide")

        for(let i = 1; i <= 81; i++){
            
            const square = createSquare()

            containerMedio.append(square)
        }

    } else if(level === "difficile"){
        containerDifficile.classList.remove("hide")
        containerFacile.classList.add("hide")
        containerMedio.classList.add("hide")

        for(let i = 1; i <= 100; i++){
            
            const square = createSquare()

            containerDifficile.append(square)
        }

    } else {
        alert("scegli un livello")
    }
})



//-------- FUNCTIONS ---------//

function createSquare(){

    const getsquare = document.createElement("div")

    getsquare.classList.add("box")

    return getsquare
}

function getRandomNumber(min, max){

    
}