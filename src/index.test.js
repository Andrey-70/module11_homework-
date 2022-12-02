const getMonth = require('./index.js');

describe(`test getMonth`, () => {
  it('adds 1 to equal январь', () => {
    const result = getMonth(1);
    expect(result).toBe(`январь`);
  });
  it('adds 3 to equal март', () => {
    const result = getMonth(3);
    expect(result).toBe(`март`);
  });
  it('adds 12 to equal декабрь', () => {
    const result = getMonth(12);
    expect(result).toBe(`декабрь`);
  });

});