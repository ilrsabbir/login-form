let passwordField = document.querySelector("#password");
let showHideBtn = document.querySelector(".showHideBtn");

passwordField.setAttribute("type", "password");

showHideBtn.addEventListener("click", ()=>{
    showHideBtn.classList.toggle("fa-eye");
    (passwordField.type === "password")? passwordField.type="text":passwordField.type="password";
});