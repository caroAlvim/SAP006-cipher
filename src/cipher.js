

const cipher = {

  encode: function (offset, str) {

    if (typeof offset !== "number") {
      throw TypeError("A chave precisa ser um número")
    }


    let msgCifrada = "";

    for (let i = 0; i < str.length; i++) {
      let codifica = str[i].charCodeAt();
      if (codifica >= 65 && codifica <= 90) {
        codifica = ((codifica - 65 + offset) % 26) + 65;
      }
      //seleciona letras minusculas
      else if (codifica >= 97 && codifica <= 122) {
        codifica = ((codifica - 97 + offset) % 26) + 97;
      }
      //caracteres e numeros
      else if (codifica >= 32 && codifica <= 64 ){
        codifica = ((codifica - 32 + offset) % 33) + 32;
      }
      msgCifrada += String.fromCharCode(codifica);
    }
    return msgCifrada;
  },

  // função para decifrar 
  decode: function (offset, str) {

    if (typeof offset !== "number") {
      throw TypeError("Chave precisa ser um número")
    }

    let msgDecifrada = "";

    for (let i = 0; i < str.length; i++) {
      let decodifica = str[i].charCodeAt();
      if (decodifica >= 65 && decodifica <= 90) {
        decodifica = ((decodifica + 65 - offset) % 26) + 65;
      }
      //minusculas
      else if (decodifica >= 97 && decodifica <= 122) {
        decodifica = 122 - ((122 - decodifica + offset) % 26);
      }
      //caracteres e numeros
      else if (decodifica >= 32 && decodifica <= 64 ){
        decodifica = 64 - ((64 - decodifica + offset) % 33);
      }
      msgDecifrada += String.fromCharCode(decodifica);
    }
    return msgDecifrada;
  }

  // Formula TecNoz ((codigoDaLetraASC - cod1Letra + deslocamento) % tamTotalAlfabeto) + cod1Letra

};


export default cipher;
