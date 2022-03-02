import { filtergeneration } from './data.js';

import pokemons from './data/pokemon/pokemon.js'; //importamos los datos del array 
const arrayPokemon = pokemons.pokemon; // guardamos esos datos en un nuevo array, lo extendi a pokemon para ingresar al array
//console.log(newArray);
const showData = document.querySelector("#showData"); //obtenemos este id para
showData.innerHTML = ""; //mostrar en la pag web, va vacío para limpiarlo cada vez que itere el ciclo
//aplicar ciclo de for para iterar por los elementos del array
const cardData = (characteristics) =>`
<tr>
  <td>${characteristics.num}</td>
  <td>${characteristics.name.charAt(0).toUpperCase() + characteristics.name.slice(1)}</td>  
  <td><img src="${characteristics.img}"></td>
  <td>${characteristics.generation.num.toUpperCase()}</td>
  <td>${characteristics.generation.name.charAt(0).toUpperCase() + characteristics.generation.name.slice(1)}</td>
</tr>
`
for (let characteristics of arrayPokemon) {
//console.log(characteristics.num);
showData.innerHTML += cardData(characteristics)
// showData.innerHTML += `
// <tr>
//   <td>${characteristics.num}</td>
//   <td>${characteristics.name.charAt(0).toUpperCase() + characteristics.name.slice(1)}</td>  
//   <td><img src="${characteristics.img}"></td>
//   <td>${characteristics.generation.num.toUpperCase()}</td>
//   <td>${characteristics.generation.name.charAt(0).toUpperCase() + characteristics.generation.name.slice(1)}</td>
// </tr>
// `
}

<<<<<<< HEAD
const btnjson = document.querySelector("#btnMain")
btnjson.addEventListener("click", () => {
    //console.log("dentro de la funcion")
})
const g1= filtergeneration(newArray,"generation ii");
//console.log(g1);


//console.log(example);
=======
>>>>>>> ce71a6e6f4d30d06402238866dfb5c11bd44d860
document.getElementById("bienvenida").classList.remove("hide")
// Funcion para ocultar la tabla de pokemon en la bienvenida
let btnSee =  document.getElementById("btnMain");
btnSee.addEventListener("click", showTable);

function showTable(){

  document.getElementById("chart1").classList.remove("hide");
  document.getElementById("bienvenida").classList.add("hide");


}
//para filtrar por generación
//const g1= filtergeneration(arrayPokemon,"generation i");
//console.log(g1);
let bt1= document.getElementById("kanto");
bt1.addEventListener("click",function(){
showData.innerHTML="";
document.getElementById("chart1").classList.remove("hide");
document.getElementById("bienvenida").classList.add("hide");

const g1 =filtergeneration(arrayPokemon,"generation i")
for(let poke of g1 )  {

showData.innerHTML += cardData(poke);

  }
});



const g2=filtergeneration(arrayPokemon,"generation i");
console.log(g2);