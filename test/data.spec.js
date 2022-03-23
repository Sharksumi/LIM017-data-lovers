import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filtergeneration, orderPokemonAscendent, orderPokemonDescendent, groupEggs } from '../src/data.js';
 const pokemonList =
 [{
  "num": "001",
  "name": "bulbasaur",
  "generation": {
    "num": "generation ii",
    "name": "kanto"
  },
  "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
  "size": {
    "height": "0.71 m",
    "weight": "6.9 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ],
  
},
{
  "num": "002",
  "name": "ivysaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
  "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
  "size": {
    "height": "0.99 m",
    "weight": "13.0 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ],
 
},
{
  "num": "003",
  "name": "venusaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
  "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
  "size": {
    "height": "2.01 m",
    "weight": "100.0 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ],
 },
{
  "num": "004",
  "name": "charmander",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
  "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
  "size": {
    "height": "0.61 m",
    "weight": "8.5 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "fire"
  ],
 
}
]
  const resultP =[  
    {
      "num": "002",
      "name": "ivysaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
      "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
      "size": {
        "height": "0.99 m",
        "weight": "13.0 kg"
      },
      "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
      ],
     
    },
    {
      "num": "003",
      "name": "venusaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
      "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
      "size": {
        "height": "2.01 m",
        "weight": "100.0 kg"
      },
      "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
      ],
     },
    {
      "num": "004",
      "name": "charmander",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
      "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
      "size": {
        "height": "0.61 m",
        "weight": "8.5 kg"
      },
      "pokemon-rarity": "normal",
      "type": [
        "fire"
      ],
     
    },
 
]
const resultGenerationII=[{
  "num": "001",
  "name": "bulbasaur",
  "generation": {
    "num": "generation ii",
    "name": "kanto"
  },
  "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
  "size": {
    "height": "0.71 m",
    "weight": "6.9 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ],
  
},
]
 const arrayOrderToAZForName = [
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation ii",
      "name": "kanto"
    },
    "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
    "size": {
      "height": "0.71 m",
      "weight": "6.9 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
    
  },
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
    "size": {
      "height": "0.61 m",
      "weight": "8.5 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fire"
    ],
   
  }, 
   
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
    "size": {
      "height": "0.99 m",
      "weight": "13.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
   
  }, 
  {
    "num": "003",
    "name": "venusaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
    "size": {
      "height": "2.01 m",
      "weight": "100.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
   },
 ]
const arrayOrderToZAForName = [ 
  { 
    "num": "003",
    "name": "venusaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
    "size": {
      "height": "2.01 m",
      "weight": "100.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
   },
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
    "size": {
      "height": "0.99 m",
      "weight": "13.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
  },
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
    "size": {
      "height": "0.61 m",
      "weight": "8.5 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fire"
    ],
   
  }, 
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation ii",
      "name": "kanto"
    },
    "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
    "size": {
      "height": "0.71 m",
      "weight": "6.9 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
    
  },
   ]
  describe('filtergeneration', () => {
  it('Filter by generation i', () => {
    expect(filtergeneration(pokemonList,"generation i")).toEqual(resultP);
  });
  it('Filter by generation ii',() =>{
    expect(filtergeneration(pokemonList,"generation ii")).toEqual(resultGenerationII);
  });

  })
describe('order-pokemon-ascendet', () => {
  it('una fx de ordenamiento de la A-Z', () => {
    expect(orderPokemonAscendent(pokemonList,"name")).toEqual(arrayOrderToAZForName);
  });

 });
 describe('order-pokemon-descendet', () => {
  it('una fx de ordenamiento de la z-A', () => {
    expect(orderPokemonDescendent(pokemonList,"name")).toEqual(arrayOrderToZAForName);
  });

 });

 describe('Calculo de porcentaje por kilometros',()=>{ 
  it("Porcentaje de Huevos que no vienen de un huevo", () => {
    let arrayPokemon = [ 
      {"egg": "not in an egg"}, 
      {"egg": "2km"}, 
      {"egg": "5km"}
    ]
    
    let pokemonNotInAnEgg = groupEggs(arrayPokemon, "not in an egg")	
     let resultEgg = (1/3)*100
    expect(pokemonNotInAnEgg).toEqual(resultEgg);
  });
   
});
