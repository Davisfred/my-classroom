const input = document.querySelector("#hub")
const button =document.querySelector ("#button")
const ul =document.querySelector("#loop")

button.addEventListener("click",()=>{
    
    if(input.value !== ""){
        const li =document.createElement("li")
        const btn = document.createElement("button");
        const btnText = document.createTextNode("Del X");
        const inputvalue =document.createTextNode(input.value)
        btn.append(btnText);
        li.append(inputvalue)
        li.append(btn);
        ul.append(li)
        btn.addEventListener("click", ()=> li.style.display = "none")
        
        input.value = ""
    }
})
   

