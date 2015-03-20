import assert from 'power-assert';
import divmod from '../src/node-divmod';

describe('node-divmod', () => {
  var q = 212, r = 4;
  it('result[0] is quotient', () => {
    let result = divmod(q, r);
    assert(result[0] === Math.floor(q / r));
  });

  it('result[1] is remainder', () => {
    let result = divmod(q, r);
    assert(result[1] === q % r);
  });
});
