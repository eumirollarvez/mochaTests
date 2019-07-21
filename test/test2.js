var assert = require('assert');
var operaciones = require('../js/utilitarios')

describe('Calculadora', () => {

    it('Sumar números', () => {
        assert.equal(5, operaciones.sumarNumeros(2, 3));
    });

});