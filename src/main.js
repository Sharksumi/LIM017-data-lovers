import {
  filtergeneration,
  orderPokemons,
  orderPokemonAscendent,
  orderPokemonDescendent,
  buscar,
  searchForID,
  filterByEggs
} from "./data.js";

import pokemonList from "./data/pokemon/pokemon.js"; //importamos los datos del array
const arrayPokemon = pokemonList.pokemon; // guardamos esos datos en un nuevo array, lo extendi a pokemon para ingresar al array
//console.log(arrayPokemon);
const showData = document.querySelector("#showData"); //obtenemos este id para
showData.innerHTML = ""; //mostrar en la pag web, va vacío para limpiarlo cada vez que itere el ciclo
//aplicar ciclo de for para iterar por los elementos del array
const cardData = (characteristics) => `
<section class= "showCard0" id="pkmCard" >
  <div class="jsNum">${characteristics.num}</div>
  <div class="jsName">${characteristics.name.charAt(0).toUpperCase() + characteristics.name.slice(1)}</div>
  <div><img class="jsImg" src="${characteristics.img}"></div>
  <a href="#"class="showCard" id="${characteristics.num}">"Más información"</a>
  <div class="jsGen">${characteristics.generation.num.toUpperCase()}</div>
  <div class= "jsGenNum">${characteristics.generation.name.charAt(0).toUpperCase() + characteristics.generation.name.slice(1)
  }</div>
</section>
`;
for (let characteristics of arrayPokemon) {
  //console.log(characteristics.num);
  showData.innerHTML += cardData(characteristics);
  // const card2= document.querySelectorAll(".showCard0");
// for( let pokemon of card2){
//   pokemon.addEventListener("click",(e)=>{
//     console.log(e.target.id);
//   })
}

// }

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

    for (let pokemon of sortedPokemon) {
      showData.innerHTML += cardData(pokemon);
    }
  }

  if (descendent === "ascendent") {
    const sortedPokemon = orderPokemonAscendent(arrayPokemon);
    for (let pokemon of sortedPokemon) {
      showData.innerHTML += cardData(pokemon);
    }
  }

  if (descendent === "numero") {
    for (let pokemon of arrayPokemon) {
      showData.innerHTML += cardData(pokemon);
    }
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

  const closeCard = document.querySelectorAll(".close")[0];
  const openCard = document.querySelectorAll(".showCard")[0]; 
  const modal = document.querySelectorAll(".modal")[0];
  const modalContainer = document.querySelectorAll(".modalContainer")[0];
  
  
  
  openCard.addEventListener("click", function (e) {
    console.log(  e.target.id)
    e.preventDefault();
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-close");

// Nay - 22/03/22
    let pokemonData =searchForID(arrayPokemon, e.target.id);
    console.log(pokemonData);

    showData2.innerHTML = cardData2(pokemonData);
// - aqui termina-     
  });
  const showData2 = document.querySelector("#showData2");
  showData2.innerHTML="";
 
  const cardData2 = (pokemonData) => `
  <section class= "pkmCard2" id=${pokemonData.num}>
    <div class="jsNum">${pokemonData.num}</div>
    <div class="jsName">${pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</div>
    <div ><img class="jsImg" src="${pokemonData.img}"></div>
    <div class= "jstype">${pokemonData.type}</div>
    <div class="statAttack>${pokemonData.stats["base-attack"]}+" Ataque base" </div>
    <div class="jsAbout">${pokemonData.about}</div>
    <div class= "jsEggs">${pokemonData.egg}</div>
  </section>
  `;
  for(let pokemon of arrayPokemon){  
  showData2.innerHTML += cardData2(pokemon)}

   
  closeCard.addEventListener("click", function () {
    modal.classList.toggle("modal-close");
  
    setTimeout(function () {
      modalContainer.style.opacity = "0";
      modalContainer.style.visibility = "hidden";
    }, 900)
  });
  
  window.addEventListener("click", function (e) {
    // console.log(e.target);
    if (e.target == modalContainer) {
      modal.classList.toggle("modal-close");
  
      setTimeout(function () {
        modalContainer.style.opacity = "0";
        modalContainer.style.visibility = "hidden";
      }, 900)
    }
  });
});


 
//este ciclo solo me muestra el ultimo cuando da clic en <a>, creo que es porque
// no le puse pokemonData. Pero si pongo pokemondata salen los 251.



//  function showMoreInformation  (){   

// }



//declaramos variable para que aparezca la info de los huevos
// const showData3= document.querySelector("#showData3"); //obtenemos este id para
// showData3.innerHTML = ""


// const callEggs =document.getElementById("calculatedEggs");
// callEggs.addEventListener("click",() => {
//   showData3.innerHTML=""
//   document.getElementById("dataPokemon").classList.remove("hide");
//   document.getElementById("bienvenida").classList.add("hide");


//  const notInEggs = filterByEggs(arrayPokemon, "not in eggs");
//  for( let egg0 of notInEggs){
//   showData3.innerHTML += cardData(egg0)
//  }

// })