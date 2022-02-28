//import { datajson } from './data.js';

import data from './data/pokemon/pokemon.js'; //importamos los datos del array 
const newArray = data.pokemon; // guardamos esos datos en un nuevo array, lo extendi a pokemon para ingresar al array
//console.log(newArray);
const showData = document.querySelector("#showData"); //obtenemos este id para
showData.innerHTML = ""; //mostrar en la pag web, va vacío para limpiarlo cada vez que itere el ciclo
//aplicar ciclo de for para iterar por los elementos del array
for (let characteristics of newArray) {
//console.log(characteristics.num);
showData.innerHTML += `
<tr>
  <td>${characteristics.num}</td>  
  <td>${characteristics.name}</td>  
  <td>${characteristics.img}</td>  
  <td>${characteristics.generation.num}</td>  
  <td>${characteristics.generation.name}</td>  
</tr>
`
}

const btnjson = document.querySelector("#btnMain")
btnjson.addEventListener("click", () => {
    console.log("dentro de la funcion")
})

//console.log(example);
