import { filtergeneration, anotherExample } from '../src/data.js';


describe('filtergeneration', () => {
  it('is a function', () => {
    expect(typeof filtergeneration).toBe('function');
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
