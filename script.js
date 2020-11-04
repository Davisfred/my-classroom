const input = document.querySelector("#hub")
const button =document.querySelector ("#button")
const ul =document.querySelector("#loop")

button.addEventListener("click",()=>{
    
    if(input.value !== ""){
        const li =document.createElement("li")
        const inputvalue =document.createTextNode(input.value)
        li.append(inputvalue)
        ul.append(li)
        input.value = ""
    }
})
   

