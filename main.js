const flechasAbrir = document.querySelectorAll(".pregunta img");

const textoInteractivo = document.querySelectorAll(".respuesta p");

const divFaq = document.querySelector(".faq");
const elementoEliminar = document.querySelectorAll(".divider");


flechasAbrir.forEach((felcha,i) =>{
    felcha.addEventListener("click", function(){
        textoInteractivo[i].classList.toggle("hidden");
        felcha.classList.toggle("flechaDireccion");
        elementoEliminar[i].classList.toggle("hidden");
    });
});







