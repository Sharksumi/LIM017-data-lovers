export const filtergeneration = (pokemons, generation) => {
    //filter es usado con una funcion que sería el callback
    //en el parametro se pone la info que queremos obtener
    const resultP = pokemons.filter((pokemon) => {
      if (pokemon.generation.num == generation) {
        return true;
      } else {
        return false;
      }
    });
  
    return resultP;
  };
  
  export const orderPokemonAscendent = (pokemonList) => {
    const pokemonListCopy = pokemonList.slice();
    const sortedPokemon = pokemonListCopy.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });

    return sortedPokemon;
  };

// export const sortByHp = (pokemonList) => {
//     const pokemonListCopy = pokemonList.slice();
// const calculador = pokemonListCopy.sort((a,b) => {
//   if (a.stats["max-hp"] > b.stats["max-hp"]) {
//     return 1;
//   }else if (a.stats["max-hp"] < b.stats["max-hp"]) {
//       return -1;
//   } else {
//     return 0;
//   }
// });
//   return calculador;
//   }


  export const orderPokemonDescendent = (pokemonList) => {
    const pokemonListCopy = pokemonList.slice();
    const sortedPokemon = pokemonListCopy.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
  
    return sortedPokemon.reverse();
  };
  
  export const orderPokemons = (pokemons, name) => {
    const upPokemon = pokemons.sort((pokemons) => {
      if (pokemons == name) {
        return name - 1;
      } else {
        return false;
      }
    });
  
    // console.log(upPokemon);
    return upPokemon;
  };
  // Función buscar 
 export const buscar = (pokemonList,name)=> {
 const findPokemon = pokemonList.find(element => element.name.toLowerCase() === name.toLowerCase());
 return findPokemon;

}
//filtrar por cantidad de kilometros para reventar un huevo
export const groupEggs =(pokemonList)=>{
  let notAnEggArray =  pokemonList.filter(pokemon => pokemon.egg === "not in eggs");
  let twoKmsEggArray = pokemonList.filter(Pokemon => Pokemon.egg === "2 km");
  let fiveKmsEggArray = pokemonList.filter(Pokemon => Pokemon.egg === "5 km");
  let sevenKmsEggArray = pokemonList.filter(Pokemon => Pokemon.egg === "7 km");
  let tenKmsEggArray = pokemonList.filter(Pokemon => Pokemon.egg === "10 km");


  //contabilizar y agrupar los tipos de huevo segun su kilometraje
  let resultEgg =[];
      resultEgg["notAnEggArray"] = notAnEggArray;
      resultEgg["twoKmsEggArray"] = twoKmsEggArray;
      resultEgg["fiveKmsEggArray"] = fiveKmsEggArray;
      resultEgg["sevenKmsEggArray"] = sevenKmsEggArray;
      resultEgg["tenKmsEggArray"] = tenKmsEggArray;
    
      return resultEgg;
    }

//funcion contando huevos
//  export const countingEggs = (resultEgg) => {
  
  

//    return 
// };

