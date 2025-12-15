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

