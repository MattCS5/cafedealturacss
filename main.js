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

// const apiCafeDeAltura = "https://cafe-de-altura.vercel.app/api/products";


// const getData = async(url)=>{
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
// }
// console.log(await getData(apiCafeDeAltura));

// async function pintarCards () {

//     const datosCafes = await getData(apiCafeDeAltura);
    
//     const contenedor = document.querySelector(".tiposCafes");

//     datosCafes.products.forEach(async(cafe,i)=>{
//         const card = document.createElement("a");
//         card.classList.add("cafeVenta");
//         contenedor.appendChild(card);
//         card.innerHTML=`<img src="${cafe.img_url
//         }">
//         <div class="infoCafe">
//             <span class="tipografiaCafes">
//                 <p>${cafe.brand}</p>
//             </span>
//             <p>${cafe.price}€</p>
//         </div>
//         <div class="botonAñadir">
//             <button>Añadir</button>
//         </div>`
//     })
// }
// pintarCards();


const apiCafeDeAltura = "https://cafe-de-altura.vercel.app/api/products";

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
async function pintarCards() {
    const arrayCafes = [];
    const datosCafes = await getData(apiCafeDeAltura);
    const contenedor = document.querySelector(".tiposCafes");


    for (let i = 0; i < 4; i++) {
        const cafe = datosCafes.products[i];

        const card = document.createElement("a");
        card.href = "carrito.html";
        card.classList.add("cafeVenta");
        contenedor.appendChild(card);
        card.innerHTML = `<img src="${cafe.img_url}">
            <div class="infoCafe">
                <span class="tipografiaCafes">
                    <p>${cafe.brand}</p>
                </span>
                <p>${cafe.price},00€</p>
            </div>
            <div class="botonAñadir">
                <button>Añadir</button>
            </div>`;
            card.addEventListener("click",()=> {
                arrayCafes.push(datosCafes.products)
                localStorage.setItem("cafe",JSON.stringify(cafe))
            })
    }
}

pintarCards();



