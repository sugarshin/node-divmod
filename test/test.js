import assert from 'power-assert';
import divmod from '../src/node-divmod';

describe('node-divmod', () => {
  it('result[0] is quotient', () => {
    let result = divmod(212, 4);
    assert(result[0] === Math.floor(212 / 4));
  });

  it('result[1] is remainder', () => {
    let result = divmod(212, 4);
    assert(result[1] === 212 % 4);
  });
});
