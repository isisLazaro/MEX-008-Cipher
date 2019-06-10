window.cipher = {
  // ... 
};

const encode = (offset, text) =>{
  text = text.toUpperCase(); // converts the text to uppercase letters
  // FALTA QUITAR CARACTERES ESPECIALES: ACENTOS, Ñ, SIMBOLOS
  let encryptedChar = "";
  let encryptedText = "";

  for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") { //anything but white space
          encryptedChar = String.fromCharCode(((text.charCodeAt(i) - 65 + offset) % 26) + 65);
      } else { // keep white space
          encryptedChar = text[i];
      }
      encryptedText = encryptedText + encryptedChar; 
  }
  return encryptedText;
}

var cipher = {}; //objeto
//console.log(typeof cipher);
cipher.encode = encode;
