var fetchBtn = document.getElementById("fetch-btn")
var target = document.getElementById("target")

var index = 15

function getPokemonList(data, length) {
    var finalList = "<ul>"
    for (let i = 0; i <= length; i++) {
        finalList += `<li>${data.pokemon[i].pokemon_species.name}</li>`
    }
    return finalList + "</ul>"
}

fetchBtn.addEventListener("click", async () => {
    var response = await fetch("/.netlify/functions/pokedex")
    var data = await response.json()

    target.innerHTML = getPokemonList(data, index)
    index += 15
})
