// const axios = require("axios")

const { default: axios } = require("axios")

exports.handler = async () => {
    var response = await axios.get("https://pokeapi.co/api/v2/pokedex/kanto")
    var data = response.data

    return {
        statusCode: 200,
        body: JSON.stringify({
            pokemon: data.pokemon_entries
        })
    }
}