
let form1 = document.getElementById("form-1");
let spoilerArea = document.getElementById("spoiler-area");
let offsetText = document.getElementById("offset-text");
//let encodeButton = document.getElementById("encode-button");
spoilerArea.focus();
spoilerArea.placeholder = "Escribe aquí tu spoiler";

let form2 = document.getElementById("form-2");
let spoilerArea2 = document.getElementById("spoiler-area-2");
let offsetText2 = document.getElementById("offset-text-2");
spoilerArea2.focus();
spoilerArea2.placeholder = "Escribe aquí tu spoiler cifrado";

form1.addEventListener("submit", event => {
    spoilerArea.value = cipher.encode(Number(offsetText.value),spoilerArea.value);
    event.preventDefault()
});

form2.addEventListener("submit", event2 => {
    spoilerArea2.value = cipher.decode(Number(offsetText2.value),spoilerArea2.value);
    event2.preventDefault()
});