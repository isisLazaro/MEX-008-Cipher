window.cipher = {
  encode : (offset, str) => {
    let encryptedChar = '';
    let encryptedStr = '';
    let charASCII;
    for (let i = 0; i < str.length; i++) {
      charASCII = str.charCodeAt(i);
      if (charASCII >= 65 && charASCII <= 90 ) { // any character between A-Z
        encryptedChar = ((charASCII - 65 + offset) % 26) + 65;
      } 
      else if (charASCII >= 97 && charASCII <= 122 ) { // any character between a-z
        encryptedChar = ((charASCII - 97 + offset) % 26) + 97;
      } 
      else {
        encryptedChar = charASCII;
      }
      encryptedStr = encryptedStr + String.fromCharCode(encryptedChar); 
    }
    return encryptedStr;
  },

  decode : (offset, str) => {
    let decryptedChar = '';
    let decryptedStr = '';
    let charASCII;
    for (let i = 0; i < str.length; i++) {
      charASCII = str.charCodeAt(i);
      if (charASCII >= 65 && charASCII <= 90 ) { // any character between A-Z
        decryptedChar = ((charASCII + 65 - offset) % 26) + 65;
      }
      else if (charASCII >= 97 && charASCII <= 122 ) { // any character between a-z
        decryptedChar = ((charASCII + 122 - offset) % 26) + 122;
      }
      else {
        decryptedChar = charASCII;
      }
      decryptedStr = decryptedStr + String.fromCharCode(decryptedChar); 
    }
    return decryptedStr;
  }
};
