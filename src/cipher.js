window.cipher = {
  encode : (offset, text) =>{
    let encryptedChar = '';
    let encryptedText = '';
    text = text.toUpperCase(); // converts the text to uppercase letters
    for (let i = 0; i < text.length; i++) {
      let charASCII = text.charCodeAt(i);
      if (charASCII >= 65 && charASCII <= 90 ) { // any character between A-Z
        encryptedChar = ((charASCII - 65 + offset) % 26) + 65;
      } else {
        encryptedChar = charASCII;
      }
      encryptedText = encryptedText + String.fromCharCode(encryptedChar); 
    }
    return encryptedText;
  }
};