import { filtergeneration } from './data.js';

import pokemons from './data/pokemon/pokemon.js'; //importamos los datos del array 
const newArray = pokemons.pokemon; // guardamos esos datos en un nuevo array, lo extendi a pokemon para ingresar al array
//console.log(newArray);
const showData = document.querySelector("#showData"); //obtenemos este id para
showData.innerHTML = ""; //mostrar en la pag web, va vacío para limpiarlo cada vez que itere el ciclo
//aplicar ciclo de for para iterar por los elementos del array
for (let characteristics of newArray) {
//console.log(characteristics.num);
showData.innerHTML += `
<tr>
  <td>${characteristics.num}</td>
  <td>${characteristics.name.charAt(0).toUpperCase() + characteristics.name.slice(1)}</td>  
  <td><img src="${characteristics.img}"></td>
  <td>${characteristics.generation.num.toUpperCase()}</td>
  <td>${characteristics.generation.name.charAt(0).toUpperCase() + characteristics.generation.name.slice(1)}</td>
</tr>
`
}

const btnjson = document.querySelector("#btnMain")
btnjson.addEventListener("click", () => {
    //console.log("dentro de la funcion")
})
const g1= filtergeneration(newArray,"generation ii");
//console.log(g1);


//console.log(example);
document.getElementById("bienvenida").classList.remove("hide")
// Funcion para ocultar la tabla de pokemon en la bienvenida
let btnVer =  document.getElementById("btnMain");
btnVer.addEventListener("click", verTabla);

function verTabla(){

  document.getElementById("chart1").classList.remove("hide");
  document.getElementById("bienvenida").classList.add("hide");


}