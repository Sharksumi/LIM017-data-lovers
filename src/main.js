import {
  filtergeneration,
  orderPokemons,
  orderPokemonAscendent,
  orderPokemonDescendent,
  buscar,
  sortByHp //agregado  como prueba de calculo
} from "./data.js";

import pokemonList from "./data/pokemon/pokemon.js"; //importamos los datos del array
const arrayPokemon = pokemonList.pokemon; // guardamos esos datos en un nuevo array, lo extendi a pokemon para ingresar al array
//console.log(arrayPokemon);
const showData = document.querySelector("#showData"); //obtenemos este id para
showData.innerHTML = ""; //mostrar en la pag web, va vacío para limpiarlo cada vez que itere el ciclo
//aplicar ciclo de for para iterar por los elementos del array

//Agregado el ID unico para poder asignar el valor de cada pokemon por ID
const cardData = (characteristics) => `
<main class= "pkmCard" id="${characteristics.num}">
  <div class="jsNum">${characteristics.num}</div>
  <div class="jsName">${characteristics.name.charAt(0).toUpperCase() + characteristics.name.slice(1)
  }</div>
  <div class="jsImg"><img src="${characteristics.img}"></div>
  <div class="jsGen">${characteristics.generation.num.toUpperCase()}</div>
  <div class= "jsGenNum">${characteristics.generation.name.charAt(0).toUpperCase() +
  characteristics.generation.name.slice(1)
  }</div>
</main>
`;
//agregar una funcion de event listener para cada tarjeta
const cardDataAddEvent = (characteristics) =>{
let card = document.getElementById(characteristics.num);
card.addEventListener('click', () => showPokemonDetails(characteristics))

}
//plantilla nueva de pokemon unico 
const pokemonDetails = (pokemonData) =>
` <div id="description">
    <section id="pokemonDetails">
    ${pokemonData.num}
    ${pokemonData.name}
    ${pokemonData.img}
    ${pokemonData.type}
    ${pokemonData.about}
    ${pokemonData.egg}
    ${pokemonData.stats["max-hp"]}
  </section>
</div>
`
// para mostrar la nueva plantilla
const showPokemonDetails = (pokemonData) => {
showData.innerHTML=""
showData.innerHTML += pokemonDetails(pokemonData)
}


for (let characteristics of arrayPokemon) {
  //console.log(characteristics.num);
  showData.innerHTML += cardData(characteristics);
  
}
// for (let seePokemonData of arrayPokemon){
//    pokemonDetails.innerHTML += cardData(seePokemonData); 
// }

//// agregado solo la instruccion para el listener
for (let pokemon of arrayPokemon) {
  cardDataAddEvent(pokemon);
}


document.getElementById("bienvenida").classList.remove("hide");
// Funcion para ocultar la tabla de pokemon en la bienvenida
let btnSee = document.getElementById("btnMain");
btnSee.addEventListener("click", showTable);


function showTable() {
  document.getElementById("dataPokemon").classList.remove("hide");
  document.getElementById("bienvenida").classList.add("hide");
}

let bt1 = document.getElementById("kanto");
bt1.addEventListener("click", function () {
  showData.innerHTML = "";
  document.getElementById("dataPokemon").classList.remove("hide");
  document.getElementById("bienvenida").classList.add("hide");

  const g1 = filtergeneration(arrayPokemon, "generation i");
  
  for (let poke of g1) {
    showData.innerHTML += cardData(poke);
  }
});

//para boton 2
let bt2 = document.getElementById("johto");
bt2.addEventListener("click", function () {
  showData.innerHTML = "";
  document.getElementById("dataPokemon").classList.remove("hide");
  document.getElementById("bienvenida").classList.add("hide");


  const g2 = filtergeneration(arrayPokemon, "generation ii");
  for (let poke of g2) {
    showData.innerHTML += cardData(poke);
  }
});
//console.log(g2);
const ascendentP = document.getElementById("ascendent");
ascendentP.addEventListener("change", () => {
  // console.log("Ascendent Called");
  showData.innerHTML = "";
  document.getElementById("dataPokemon").classList.remove("hide");
  document.getElementById("bienvenida").classList.add("hide");
  const orderUp = orderPokemons(arrayPokemon, "name");
  // console.log(orderUp);
  for (let aZorder of orderUp) {
    showData.innerHTML += cardData(aZorder);
  }
});
// console.log(showData);

// Ultimo Avance (07/03/2022)
const pokemonSort = document.getElementById("pokemonSort");

pokemonSort.addEventListener("change", () => {
  showData.innerHTML = "";

  document.getElementById("dataPokemon").classList.remove("hide");
  document.getElementById("bienvenida").classList.add("hide");

  let descendent = pokemonSort.value;

  if (descendent === "descendent") {
    const sortedPokemon = orderPokemonDescendent(arrayPokemon);

    // for (let pokemon of sortedPokemon) {
    //   showData.innerHTML += cardData(pokemon);
    // }
    showPokemonInfo(sortedPokemon);
  }

  if (descendent === "ascendent") {
    const sortedPokemon = orderPokemonAscendent(arrayPokemon);
    // for (let pokemon of sortedPokemon) {
    //   showData.innerHTML += cardData(pokemon);
    // }
    showPokemonInfo(sortedPokemon);
  }

  if (descendent === "numero") {
    showPokemonInfo(arrayPokemon);
  }
//opción  para calcular los pokemon por max hp (el mayor va primero)
  if (descendent === "hp") {
    const sortedPokemon = sortByHp(arrayPokemon);
    showPokemonInfo(sortedPokemon);
  }
});

let buscaPokemon = document.getElementById("buscador")
buscaPokemon.addEventListener("click", () => {
  let inputBuscador = document.getElementById("searchPoke").value;

  showData.innerHTML = "";
  document.getElementById("dataPokemon").classList.remove("hide");
  document.getElementById("bienvenida").classList.add("hide");
  const searchingPokemon = buscar(arrayPokemon, inputBuscador);
  showData.innerHTML += cardData(searchingPokemon);
})

// nueva funcion para mostrar  la data de todos los pokemon de la lista 
// agrega el event listener a cada carga nueva 
const showPokemonInfo = (pokemonList) => {
  for (let pokemon of pokemonList) {
    showData.innerHTML += cardData(pokemon);
  }
//
  for (let pokemon of pokemonList) {
    cardDataAddEvent(pokemon);
  }
}