let val = "O";
const g1 = document.querySelector("#g1");
const g2 = document.querySelector("#g2");
const g3 = document.querySelector("#g3");
const g4 = document.querySelector("#g4");
const g5 = document.querySelector("#g5");
const g6 = document.querySelector("#g6");
const g7 = document.querySelector("#g7");
const g8 = document.querySelector("#g8");
const g9 = document.querySelector("#g9");
const opscr = document.querySelector("#opscr");
const res = document.querySelector("#reset"); 

res.addEventListener("click",()=>{
    opscr.innerHTML = "";
    reset();
});

g1.addEventListener("click",()=>{
    opscr.innerHTML = "";
    if(g1.value == "X" || g1.value == "O"){}
    else{
        if(val == "X")
        {
            g1.value = "O";
            val = "O";
        }
        else
        {
            g1.value = "X";
            val = "X";
        }
        g1.innerHTML = g1.value;
        check();
    }
})

g2.addEventListener("click",()=>{
    opscr.innerHTML = "";
    if(g2.value == "X" || g2.value == "O"){}
    else{
        if(val == "X")
        {
            g2.value = "O";
            val = "O";
        }
        else
        {
            g2.value = "X";
            val = "X";
        }
        g2.innerHTML = g2.value;
        check();
    }
})

g3.addEventListener("click",()=>{
    opscr.innerHTML = "";
    if(g3.value == "X" || g3.value == "O"){}
    else{
        if(val == "X")
        {
            g3.value = "O";
            val = "O";
        }
        else
        {
            g3.value = "X";
            val = "X";
        }
        g3.innerHTML = g3.value;
        check();
    }
})

g4.addEventListener("click",()=>{
    opscr.innerHTML = "";
    if(g4.value == "X" || g4.value == "O"){}
    else{
        if(val == "X")
        {
            g4.value = "O";
            val = "O";
        }
        else
        {
            g4.value = "X";
            val = "X";
        }
        g4.innerHTML = g4.value;
        check();
    }
})

g5.addEventListener("click",()=>{
    opscr.innerHTML = "";
    if(g5.value == "X" || g5.value == "O"){}
    else{
        if(val == "X")
        {
            g5.value = "O";
            val = "O";
        }
        else
        {
            g5.value = "X";
            val = "X";
        }
        g5.innerHTML = g5.value;
        check();
    }
})

g6.addEventListener("click",()=>{
    opscr.innerHTML = "";
    if(g6.value == "X" || g6.value == "O"){}
    else{
        if(val == "X")
        {
            g6.value = "O";
            val = "O";
        }
        else
        {
            g6.value = "X";
            val = "X";
        }
        g6.innerHTML = g6.value;
        check();
    }
})

g7.addEventListener("click",()=>{
    opscr.innerHTML = "";
    if(g7.value == "X" || g7.value == "O"){}
    else{
        if(val == "X")
        {
            g7.value = "O";
            val = "O";
        }
        else
        {
            g7.value = "X";
            val = "X";
        }
        g7.innerHTML = g7.value;
        check();
    }
})

g8.addEventListener("click",()=>{
    opscr.innerHTML = "";
    if(g8.value == "X" || g8.value == "O"){}
    else{
        if(val == "X")
        {
            g8.value = "O";
            val = "O";
        }
        else
        {
            g8.value = "X";
            val = "X";
        }
        g8.innerHTML = g8.value;
        check();
    }
})

g9.addEventListener("click",()=>{
    opscr.innerHTML = "";
    if(g9.value == "X" || g9.value == "O"){}
    else{
        if(val == "X")
        {
            g9.value = "O";
            val = "O";
        }
        else
        {
            g9.value = "X";
            val = "X";
        }
        g9.innerHTML = g9.value;
        check();
    }
})

function check() {
    const winConditions = [
        [g1, g2, g3],
        [g4, g5, g6],
        [g7, g8, g9],
        [g1, g4, g7],
        [g2, g5, g8],
        [g3, g6, g9],
        [g1, g5, g9],
        [g3, g5, g7],
    ];

    for (let [a, b, c] of winConditions) {
        if (a.value !== "" && a.value === b.value && b.value === c.value) {
            opscr.innerHTML =`${a.value} wins`;
            reset();
            break;
        }
    }
}



function reset(){
    g1.value = "";
    g1.innerHTML = "";
    g2.value = "";
    g2.innerHTML = "";
    g3.value = "";
    g3.innerHTML = "";
    g4.value = "";
    g4.innerHTML = "";
    g5.value = "";
    g5.innerHTML = "";
    g6.value = "";
    g6.innerHTML = "";
    g7.value = "";
    g7.innerHTML = "";
    g8.value = "";
    g8.innerHTML = "";
    g9.value = "";
    g9.innerHTML = "";
    val = "O";
}