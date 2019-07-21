/* eslint-disable no-undef */
import {
  equal
} from 'assert';

describe('Operaciones', function () {
  var a = 4,
    b = 2;

  describe('Funciones', () => {
    // eslint-disable-next-line no-undef
    it('suma', () => equal(a + b, 6));

    it('resta', () => equal(a - b, 2));
  });
});