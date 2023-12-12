const apiCafeDeAltura = "https://cafe-de-altura.vercel.app/api/products";

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

console.log( await getData(apiCafeDeAltura));
async function pintarCards() {
    const datosCafes = await getData(apiCafeDeAltura);
    const contenedor = document.querySelector(".tiposCafes");
    
    datosCafes.products.forEach((cafe) => {
        const card = document.createElement("div");
       
        if (cafe.available === true){
            card.classList.add("cafeVenta");
        }else if(cafe.available=== false){
            card.classList.add("agotado")
            // card.setAttribute("disabled");
        }
        contenedor.appendChild(card);
        
        card.innerHTML = `<img src="${cafe.img_url}">
        <div class="infoCafe">
        <span class="tipografiaCafes">
        <p>${cafe.brand}</p>
        </span>
        <p>${cafe.price},00€</p>
        </div>
        <div class="botonAñadir">
        <a><button class="botonAñadirCarrito">Añadir</button></a>
        </div>`;
        
        // const botonAñadir = document.querySelector(".botonAñadirCarrito");
        card.addEventListener("click", () => clickCard(cafe));
    });
}

function clickCard(cafe) {
    const arrayCafes = JSON.parse(localStorage.getItem("cafe")) || [];
    arrayCafes.push(cafe);
    localStorage.setItem("cafe", JSON.stringify(arrayCafes));
}

pintarCards();