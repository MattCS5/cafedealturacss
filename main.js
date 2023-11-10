const flechasAbrir = document.querySelectorAll(".pregunta img");
console.log(flechasAbrir);

const textoInteractivo = document.querySelectorAll(".respuesta p");
console.log(textoInteractivo);

const divFaq = document.querySelector(".faq");
console.log(divFaq);
const elementoEliminar = document.querySelectorAll(".divider");


flechasAbrir.forEach((felcha,i) =>{
    felcha.addEventListener("click", function(){
        textoInteractivo[i].classList.toggle("hidden");
        felcha.classList.toggle("flechaDireccion");
        elementoEliminar[i].classList.toggle("hidden");
    });
});



