/* eslint-disable no-undef */
import {
    equal
} from 'assert';
import funcionesCalculos from '../js/utilies';

describe('Calculadora', () => {

    it('Sumar números', () => {
        equal(5, funcionesCalculos.sumarNumeros(2, 3));
    });

    it('Restar números', () => {
        equal(1, funcionesCalculos.restarNumeros(3, 2));
    });

    it('Multiplicar números', () => {
        equal(6, funcionesCalculos.multiplicarNumeros(2, 3));
    });

    it('Dividir números', () => {
        equal(1, funcionesCalculos.dividirNumeros(3, 3));
    });

});