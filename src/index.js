
let form1 = document.getElementById("form-1");
let spoilerArea = document.getElementById("spoiler-area");
let offsetText = document.getElementById("offset-text");
//let encodeButton = document.getElementById("encode-button");

spoilerArea.focus();

form1.addEventListener("submit", event => {
    //console.log(cipher.encode(1,spoilerArea.value));
    spoilerArea.value = cipher.encode(Number(offsetText.value),spoilerArea.value);
    event.preventDefault()
});

