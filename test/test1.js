var assert = require('assert');

describe('Operaciones', function() {
  var a, b;

  beforeEach(() => {
    a = 4;
    b = 2;
  });

  describe('Funciones', () => {
    it('suma', () => {
      assert.equal(a + b, 6);
    });

    it('restar', () => {
      assert.equal(a - b, 2);
    });
  });
});
