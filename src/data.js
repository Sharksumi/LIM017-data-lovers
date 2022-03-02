
export const filtergeneration = (pokemons, generation) => { //filter es usado con una funcion que sería el callback
                                                            //en el parametro se pone la info que queremos obtener
    const resultP= pokemons.filter((pokemon)=>{
        if (pokemon.generation.num==generation){
<<<<<<< HEAD
            //console.log(pokemon.generation.num)
=======
            
>>>>>>> ce71a6e6f4d30d06402238866dfb5c11bd44d860
            return true;
        }
        else{
            return false;
        }
    })

return resultP;
}


export const datajson = () => {
return "datajson"
};

export const anotherExample = () => {
return 'OMG';
};
