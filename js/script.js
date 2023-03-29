
const container = document.querySelector(".container")
const selectLevel = document.getElementById("level")
const btnGioca = document.getElementById("gioca")
const btnReset = document.getElementById("reset")



btnGioca.addEventListener("click", function(){

    const level = selectLevel.value
    
    if(level === "49"){
        container.classList.add("facile")
        container.classList.remove("medio", "difficile", "hide")
    } else if(level === "81"){
        container.classList.add("medio")
        container.classList.remove("difficile", "facile", "hide")
    } else if(level === "100"){
        container.classList.add("difficile")
        container.classList.remove("medio", "hide","facile")
    } else {
        alert("scegli un livello")
    }


    for (let i = 1; i <= level; i++){

        console.log(level)
        
        const square = createSquare()
        container.append(square)

        const squareMessage = createSquareMessage()
        squareMessage.id = i
        square.append(squareMessage)

        square.addEventListener("click", function(){

            square.classList.toggle("clicked")
            console.log(squareMessage.id)
        })

        btnReset.addEventListener("click",function(){
            square.remove()
        })
    }

})




//-------- FUNCTIONS ---------//

function createSquare(){

    const getsquare = document.createElement("div")

    getsquare.classList.add("box")

    return getsquare
}

function createSquareMessage(){

    const getsquareMessage = document.createElement("div")

    return getsquareMessage
}

