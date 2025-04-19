const button = document.querySelector("#search")

button.addEventListener("click", ()=>{
    let cityname = document.querySelector("#searchbar input").value;
    display(cityname);
})

async function display(cityname){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=c7e3602c1c811434c00480173a5f6335`)
    if(response.status == 404)
    {
        document.querySelector(".msg").innerHTML = "No such city found";
        document.querySelector(".msg").style.display = "inline";
        document.querySelector("#secone h4").innerHTML = "";
        document.querySelector("#first h1").innerHTML = "";
        document.querySelector("#first h2").innerHTML =  "";
        document.querySelector("#sectwo h4").innerHTML = "";
        document.querySelector("#secone h5").innerHTML = "";
        document.querySelector("#sectwo h5").innerHTML = "";
        return;
    }
    document.querySelector(".msg").style.display = "none";
    const data = await response.json();
    document.querySelector("#secone h4").innerHTML = data.main.humidity + "%";
    document.querySelector("#first h1").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#first h2").innerHTML =  cityname;
    document.querySelector("#sectwo h4").innerHTML = data.wind.speed + " kmph";
    document.querySelector("#secone h5").innerHTML = "Humidity";
    document.querySelector("#sectwo h5").innerHTML = "Windspeed";
    
}