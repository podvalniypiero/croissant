const searchInput = document.querySelector("#search");
console.log(searchInput);

const letsCook = document.querySelectorAll(".recipe");
console.log(letsCook);
console.log(typeof letsCook); 

searchInput.addEventListener("keyup",function(event){
    const user = event.target.value.toLowerCase();
    
    console.log(user);
    
    letsCook.forEach(item=>{
        item.querySelector("p").textContent.toLowerCase().includes(user)? (item.style.display="block"):(item.style.display="none");
    })
})