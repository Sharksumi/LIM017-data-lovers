import { filtergeneration, orderPokemons } from './data.js';

import pokemons from './data/pokemon/pokemon.js'; //importamos los datos del array 
const arrayPokemon = pokemons.pokemon; // guardamos esos datos en un nuevo array, lo extendi a pokemon para ingresar al array
//console.log(newArray);
const showData = document.querySelector("#showData"); //obtenemos este id para
showData.innerHTML = ""; //mostrar en la pag web, va vacío para limpiarlo cada vez que itere el ciclo
//aplicar ciclo de for para iterar por los elementos del array
const cardData = (characteristics) =>`
<main class= "pkmnPrueba">
  <div class="jsNum">${characteristics.num}</div>
  <div class="jsName">${characteristics.name.charAt(0).toUpperCase() + characteristics.name.slice(1)}</div>  
  <div class="jsImg"><img src="${characteristics.img}"></div>
  <div class="jsGen">${characteristics.generation.num.toUpperCase()}</div>
  <div class= "jsGenNum">${characteristics.generation.name.charAt(0).toUpperCase() + characteristics.generation.name.slice(1)}</div>
</main>
`
for (let characteristics of arrayPokemon) {
//console.log(characteristics.num);
showData.innerHTML += cardData(characteristics)
}

document.getElementById("bienvenida").classList.remove("hide")
// Funcion para ocultar la tabla de pokemon en la bienvenida
let btnSee =  document.getElementById("btnMain");
btnSee.addEventListener("click", showTable);

function showTable(){
  document.getElementById("dataPokemon").classList.remove("hide");
  document.getElementById("bienvenida").classList.add("hide");
}

let bt1= document.getElementById("kanto");
bt1.addEventListener("click",function(){
showData.innerHTML="";
document.getElementById("dataPokemon").classList.remove("hide");
document.getElementById("bienvenida").classList.add("hide");

const g1 =filtergeneration(arrayPokemon,"generation i")
for(let poke of g1 )  {

showData.innerHTML += cardData(poke);

  }
});

//para boton 2
let bt2= document.getElementById("johto");
bt2.addEventListener("click", function(){
showData.innerHTML="";
document.getElementById("dataPokemon").classList.remove("hide");
document.getElementById("bienvenida").classList.add("hide");
const g2=filtergeneration(arrayPokemon,"generation ii");

for(let poke of g2){
  showData.innerHTML+=cardData(poke);
}
})
//console.log(g2);
const ascendentP= document.getElementById("ascendent");
ascendentP.addEventListener("click",()=>{
  showData.innerHTML="";
  document.getElementById("dataPokemon").classList.remove("hide");
  document.getElementById("bienvenida").classList.add("hide");
  const orderUp = orderPokemons (arrayPokemon, "name");
  for(let aZorder of orderUp){
  showData.innerHTML+=cardData(aZorder)}
})
console.log(showData);