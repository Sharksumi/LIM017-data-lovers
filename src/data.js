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
  export const filterByEggs = (pokemonList, egg) => {
    let eggsOfPokemon =  pokemonList.filter((pokemon)=>{
      if (pokemon.egg == egg){
        ((eggsOfPokemon.length)/251)*100;
         }
         else{
           false
         }
    
     return Math.round(eggsOfPokemon);
    })
  }