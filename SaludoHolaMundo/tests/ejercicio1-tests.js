var assert = require('assert');
var Busqueda = require('../ejercicio1.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('Provando saludos', function(){

    it('should return the greeting of es ', function(){
      assert.equal(Busqueda.saludo("es"),"Hola Mundo!")
      assert.equal(Busqueda.saludo("ES"),"Hola Mundo!")
    })

    it('should return the greeting of en ', function(){
      assert.equal(Busqueda.saludo("en"),"Hello World!")
      assert.equal(Busqueda.saludo("EN"),"Hello World!")
    })

    it('should return the greeting of fr ', function(){
      assert.equal(Busqueda.saludo("fr"),"Salut Monde!")
      assert.equal(Busqueda.saludo("FR"),"Salut Monde!")
    })

    it('should return the greeting of "Otro Lugar" ', function(){
      assert.equal(Busqueda.saludo("aa"),"Usted es de otro Planeta!")
    })

    it('should raise an error if the idioma param is missing', function(){
      assert.equal(Busqueda.saludo(undefined),"Error")
    })

    it('should raise an error if the idioma param is missing', function(){
      assert.equal(Busqueda.saludo(23),"Error de Dato")
    })

})
