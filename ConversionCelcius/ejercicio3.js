function convertirACelcius (f) {
  //Escribe tu codigo aqui
  if(f == undefined || typeof f == "string") {
    return "Error";
  }
  else{
    return f.map(e => !isNaN((parseInt(e)-32)*5/9) ? ((parseInt(e)-32)*5/9).toFixed(2): "Error") ;
  }
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.convertirACelcius = convertirACelcius;
}
