let a = "";
let res = "";
const btn = document.querySelector(".strb");
const inptext = document.querySelector("#str");
const optext = document.querySelector("#op");

btn.addEventListener("click",()=>{
    res = "";
    a = inptext.value;
    for(let i=0;i<a.length;i++)
    {
        if(a[i] == "A" || a[i] == "a")
        {
            res = res + "._ ";
        }
        else if(a[i] == "B" || a[i] == "b")
        {
            res = res + "_... ";
        }
        else if(a[i] == "C" || a[i] == "c")
        {
            res = res + "_._. ";
        }
        else if(a[i] == "D" || a[i] == "d")
        {
            res = res + "_.. ";
        }
        else if(a[i] == "E" || a[i] == "e")
        {
            res = res + ". ";
        }
        else if(a[i] == "F" || a[i] == "f")
        {
            res = res + ".._. ";
        }
        else if(a[i] == "G" || a[i] == "g")
        {
            res = res + "__. ";
        }
        else if(a[i] == "H" || a[i] == "h")
        {
            res = res + ".... ";
        }
        else if(a[i] == "I" || a[i] == "i")
        {
            res = res + ".. ";
        }
        else if(a[i] == "J" || a[i] == "j")
        {
            res = res + ".___ ";
        }
        else if(a[i] == "K" || a[i] == "k")
        {
            res = res + "_._ ";
        }
        else if(a[i] == "L" || a[i] == "l")
        {
            res = res + "._.. ";
        }
        else if(a[i] == "M" || a[i] == "m")
        {
            res = res + "__ ";
        }
        else if(a[i] == "N" || a[i] == "n")
        {
            res = res + "_. ";
        }
        else if(a[i] == "O" || a[i] == "o")
        {
            res = res + "___ ";
        }
        else if(a[i] == "P" || a[i] == "p")
        {
            res = res + ".__. ";
        }
        else if(a[i] == "Q" || a[i] == "q")
        {
            res = res + "__._ ";
        }
        else if(a[i] == "R" || a[i] == "r")
        {
            res = res + "._. ";
        }
        else if(a[i] == "S" || a[i] == "s")
        {
            res = res + "... ";
        }
        else if(a[i] == "T" || a[i] == "t")
        {
            res = res + "_ ";
        }
        else if(a[i] == "U" || a[i] == "u")
        {
            res = res + ".._ ";
        }
        else if(a[i] == "V" || a[i] == "v")
        {
            res = res + "..._ ";
        }
        else if(a[i] == "W" || a[i] == "w")
        {
            res = res + ".__ ";
        }
        else if(a[i] == "X" || a[i] == "x")
        {
            res = res + "_.._ ";
        }
        else if(a[i] == "Y" || a[i] == "y")
        {
            res = res + "_.__ ";
        }
        else if(a[i] == "Z" || a[i] == "z")
        {
            res = res + "__.. ";
        }
        else if(a[i] == "1")
        {
            res = res + ".____ ";
        }
        else if(a[i] == "2")
        {
            res = res + "..___ ";
        }
        else if(a[i] == "3")
        {
            res = res + "...__ ";
        }
        else if(a[i] == "4")
        {
            res = res + "...._ ";
        }
        else if(a[i] == "5")
        {
            res = res + "..... ";
        }
        else if(a[i] == "6")
        {
            res = res + "_.... ";
        }
        else if(a[i] == "7")
        {
            res = res + "__... ";
        }
        else if(a[i] == "8")
        {
            res = res + "___.. ";
        }
        else if(a[i] == "9")
        {
            res = res + "____. ";
        }
        else if(a[i] == "0")
        {
            res = res + "_____ ";
        }
        else if(a[i] == "?")
        {
            res = res + "..__.. ";
        }
        else if(a[i] == "!")
        {
            res = res + "_._.__ ";
        }
        else if(a[i] == ".")
        {
            res = res + "._._._ ";
        }
        else if(a[i] == ",")
        {
            res = res + "__..__ ";
        }
        else if(a[i] == ";")
        {
            res = res + "_._._. ";
        }
        else if(a[i] == ":")
        {
            res = res + "___... ";
        }
        else if(a[i] == "+")
        {
            res = res + "._._. ";
        }
        else if(a[i] == "-")
        {
            res = res + "_...._ ";
        }
        else if(a[i] == "/")
        {
            res = res + "_.._. ";
        }
        else if(a[i] == "=")
        {
            res = res + "_..._ ";
        }
        else
        {
            res = res + "  ";
        }
        inptext.value = "";
        optext.value = res;
    }
})