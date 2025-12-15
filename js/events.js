// option 2 to handle event 

function makeBlue (){
    document.body.style.background = "blue"
}   

function makeRed(){
    document.body.style.background="red"
}

// option 3 get element by id and then set onclick

const makeGreen = document.getElementById("make-green")
// console.log(makeGreen)
makeGreen.onclick = function makeGreen (){
    document.body.style.backgroundColor = "green"
}

// option 3 different version 

const makePurple = document.getElementById("btn-make-purple")
// console.log(makePurple)
   makePurple.onclick = parple;
   function parple (){
      document.body.style.backgroundColor = "purple"
 }


//  dark body****

const darkMode = document.getElementById("btn-black")
// console.log(darkMode)
darkMode.onclick = function black (){
    document.body.style.backgroundColor = "#000000e6"
}

// option 4: addEvenListener

 const makeYellow =document.getElementById("btn-make-yellow")
.addEventListener("click",function (){
    document.body.style.backgroundColor = "yellow"
})

const makeGoldenRod = document.getElementById("gold")
 .addEventListener("click",function () {
   document.body.style.background = "gold"
})
