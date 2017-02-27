var assert = require('assert');
var Busqueda = require('../ejercicio3.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('Probando Conversión de Array a Celcius', function(){

    it('should return the sum is ', function(){
      assert.deepEqual(Busqueda.convertirACelcius([32,23,41]),[0,-5,5])
      assert.deepEqual(Busqueda.convertirACelcius([76,60]),[24.44,15.56])
    })

    it('should raise an error if the length of the matriz is diferent', function(){
      assert.deepEqual(Busqueda.convertirACelcius(["a","b",32]),["Error","Error",0])
      assert.deepEqual(Busqueda.convertirACelcius(["32",32]),[0,0])
    })

    it('should raise an error if the idioma param is missing', function(){
      assert.equal(Busqueda.convertirACelcius(undefined,undefined),"Error")
      assert.equal(Busqueda.convertirACelcius("string","string"),"Error")
    })
})
