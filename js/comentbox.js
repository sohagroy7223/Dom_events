// step 1: select the button 
        const commentBtn = document.getElementById("comment-btn")
        .addEventListener("click",function (){
        // step 2 get the text written in the comment area
        const inputComment = document.getElementById("input-comment")
        const newComment = inputComment.value;
        //step 3 get the parent node where to publish comment

        const commentParent =document.getElementById("comment-parent")
        //step 4 create a comment p and set the innerText
        const commentElement = document.createElement("p")
        commentElement.classList.add("comment")
        commentElement.innerText = newComment
        // step 5 append the new p tag to the parent node 
        commentParent.appendChild(commentElement)
        // clean the text area
        inputComment.value = ""
        })