var assert = require('assert');
var Busqueda = require('../ejercicio2.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('Probando Suma de Matrices', function(){

    it('should return the sum is ', function(){
      assert.deepEqual(Busqueda.sumaMatrices([1,2,3],[1,2,3]),[2,4,6])
      assert.deepEqual(Busqueda.sumaMatrices([3,4,5],[2,-5,0]),[5,-1,5])
    })

    it('should raise an error if the length of the matriz is diferent', function(){
      assert.equal(Busqueda.sumaMatrices([1,2,3,4,5],[1,2]),"Error")
    })

    it('should raise an error if the idioma param is missing', function(){
      assert.equal(Busqueda.sumaMatrices(undefined,undefined),"Error")
    })

})
