

const pokemon = document.getElementById('pokemon'); // div donde se mostrara el pokemon

//al precionar el boton 
async function buscarPokemon() {
    const pokemonId = randomInt(1, 151); // numero aleatorio entre 1 y 151 (para los primeros 151 pokemones)
    // espera a que la promesa se resuelva para continuar con el codigo
    let poke = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`); // api que trae los primeros 151 pokemones
    poke = (await poke.json()).results; // convierte la respuesta en un objeto json y lo guarda en la variable poke

    pokemon.innerHTML = `
        <center><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png" alt="">
            <h3>${poke[pokemonId-1].name}</h3>
        </center>
    `;

}

//funcion que genera un numero aleatorio entre un minimo y un maximo
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}