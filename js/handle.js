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