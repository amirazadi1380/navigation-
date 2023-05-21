const myBar = document.querySelector('.bar')
const myNav = document.querySelector('.nav-container')


let obj;

myBar.addEventListener("click",()=>{
    myNav.classList.toggle('active')
    obj = setInterval(myDeg,5)
    
})


