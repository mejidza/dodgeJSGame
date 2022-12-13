let character = document.getElementById("character")
let jsLogo = document.getElementById("jsLogo")
let score = document.getElementById("gameScore")
let isAlive = setInterval(() => {
    let characterJump = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"))
    let jsLogoLeft = parseInt(window.getComputedStyle(jsLogo).getPropertyValue("left"))
    if (jsLogoLeft < 100 && jsLogoLeft > 0 && characterJump <= 100) {
    alert("*QUESTION ABOUT JS*")
    }
});
document.addEventListener("keydown", function(event){
    jump()
    console.log("true")
})

function jump () {
    if (character.classList != "jump"){
        character.classList.add("jump")
    }
    setTimeout(function (){
    character.classList.remove("jump")
    }, 1000)
}

