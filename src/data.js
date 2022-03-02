
export const filtergeneration = (pokemons, generation) => { //filter es usado con una funcion que sería el callback
                                                            //en el parametro se pone la info que queremos obtener
    const resultP= pokemons.filter((pokemon)=>{
        if (pokemon.generation.num==generation){
            //console.log(pokemon.generation.num)
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
