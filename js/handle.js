const title= document.getElementById("btn-click")
// console.log(title)    
.addEventListener("click", function () {
    const headingText = document.getElementById("heading-text")
    headingText.innerText="this is change sohag, by the button"
})

 const login = document.getElementById("log-in")
 .addEventListener("click", function (){
  const user = document.getElementById("user-info")
  user.innerText="sohag"
})

const btnUpdate = document.getElementById("update-btn")
// console.log(btnUpdate)
.addEventListener("click", function (){
    // get the text input field 
    const inputName  = document.getElementById("input-name")
    const name = inputName.value;
    // console.log(name)
    // set the name
    const nameP = document.getElementById("name")
    nameP.innerText = name
})