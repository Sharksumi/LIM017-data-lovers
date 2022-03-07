import { filtergeneration, anotherExample } from '../src/data.js';
import pokemons from './data/pokemon/pokemon.js';

const arrMuestra = {
  "num": "223",
  "name": "remoraid",
  "generation": {
    "num": "generation ii",
    "name": "johto"
  }
}

describe('filtergeneration', () => {
  it('Es una función', () => {
    expect(pokemons,arrMuestra).toBe('true');
  });

  it('returns `resultP`', () => {
    expect(true).toBe('resultP');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
