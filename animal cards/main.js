const btn = document.querySelector("#searchBtn");
const container = document.querySelector("#animalContainer");
btn.addEventListener("click", ()=>{
    let animalname = document.querySelector("#animalSearch").value;
    display(animalname);
})

async function display(animalname){
    let apikey = `ogcFidGUqugJ5YjYKbHBajzweQWV6fSUe0WSOpFO`;
    let url = `https://api.api-ninjas.com/v1/animals?name=${animalname}&X-Api-Key=${apikey}`;
    const raw = await fetch(url);
    const animal = await raw.json();

    if(animal.length == 0){
        alert("No animal found with that name. Please try again.");
        return;
    }
    const card = document.createElement("div");
    card.className = "animal-card";
    card.innerHTML = `
        <h2>${animal[0].name}</h2>
        <p><strong>Habitat:</strong> ${animal[0].characteristics.habitat}</p>
        <p><strong>Common Name:</strong> ${animal[0].characteristics.common_name}</p>
        <p><strong>Group:</strong> ${animal[0].characteristics.group}</p>
        <p><strong>Top Speed:</strong> ${animal[0].characteristics.top_speed}</p>
        <p><strong>Lifespan:</strong> ${animal[0].characteristics.lifespan}</p>
        <p><strong>Scientific Name:</strong> <em>${animal[0].taxonomy.scientific_name}</em></p>
    `;
    container.appendChild(card);
}