function sumaMatrices (m1,m2) {
  //Escribe tu codigo aqui
  var suma = [];
  if(m1 == undefined || m2 == undefined || m1.length !== m2.length){
    return "Error";
  }
  else{
    m1.map((e,i) => suma.push(e+m2[i]));
  }
  return suma;
 
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.sumaMatrices = sumaMatrices;
}
