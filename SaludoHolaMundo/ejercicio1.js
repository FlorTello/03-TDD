function saludo (string) {
  //Escribe tu codigo aqui
  if(string == undefined || string ==""){
  	return "Error";
  }
  else if(typeof string == 'number') {return "Error de Dato" }
  else if(string.toUpperCase() == "ES" ){	return "Hola Mundo!";  	}
  else if(string.toUpperCase() == "EN" ){	return "Hello World!";  }
  else if(string.toUpperCase() == "FR" ){	return "Salut Monde!";  }
  else{
  	return "Usted es de otro Planeta!";
  }
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.saludo = saludo;
}
