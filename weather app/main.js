const button = document.querySelector("#search")

button.addEventListener("click", ()=>{
    let cityname = document.querySelector("#searchbar input").value;
    display(cityname);
})

async function display(cityname){
    const user = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=c7e3602c1c811434c00480173a5f6335`)
    const data = await user.json();
    console.log(data)
}
