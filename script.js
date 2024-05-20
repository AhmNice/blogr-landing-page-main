const menu = document.getElementById("menu");
const nav_bar= document.getElementById("nav_bar")
menu.addEventListener('click', ()=>{
    nav_bar.classList.toggle("unhide")
})

const navActive = document.querySelectorAll(".dropdown-content");

navActive.forEach( function(navSelect){
    navSelect.addEventListener("click",()=>{
        navActive.forEach(function(block2){
            block2.classList.remove("active")
        })

        navSelect.classList.add("active")
    })
});