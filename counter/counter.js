const a = document.getElementById("block");
let num = 0;
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");

reset.addEventListener("click",()=>{
    num = 0;
    a.innerHTML = 0;
})

plus.addEventListener("click",()=>{
    num = num + 1;
    a.innerHTML = num;
})

minus.addEventListener("click",()=>{
    num = num - 1;
    a.innerHTML = num;
})