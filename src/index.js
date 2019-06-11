
let form1 = document.getElementById("form-1");
let spoilerArea = document.getElementById("spoiler-area");
let encodeButton = document.getElementById("encode-button");

form1.addEventListener("submit", event => {
    //console.log(cipher.encode(1,spoilerArea.value));
    spoilerArea.value = cipher.encode(19,spoilerArea.value);
    event.preventDefault()
});

