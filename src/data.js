
export const filtergeneration = (pokemons, generation) => { //filter es usado con una funcion que sería el callback
                                                            //en el parametro se pone la info que queremos obtener
    const resultP= pokemons.filter((pokemon)=>{
        if (pokemon.generation.num==generation){
            
            return true;
        }
        else{
            return false;
        }
    })

return resultP;
}


export const orderPokemons = (pokemons,name) => {
    const upPokemon=pokemons.sort((pokemons) =>{  
        if(pokemons==name){
            return name -1;
        }else{
            return false;
        }
    });
         
return upPokemon;
};


export const anotherExample = () => {
return 'OMG';
};
