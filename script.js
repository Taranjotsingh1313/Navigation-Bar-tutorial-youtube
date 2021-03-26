const classlists = document.querySelector('.class-lists');
const hamburger  = document.querySelector('.hamburger')
console.log("Mai connect ho gya hu")

hamburger.addEventListener("click",()=>{
    classlists.classList.toggle('trans')
})