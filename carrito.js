const cafe = JSON.parse(localStorage.getItem("cafe"));

console.log(cafe);

let productosHTML = "";

// Visualización de productos

const divCesta = document.querySelector(".cesta");
divCesta.innerHTML= `<p>Cesta(${cafe.length})</p>`

cafe.forEach((productoCafe, i) => {
productosHTML += `
<div class="contadorProducto">
    <div class="resta">
        <img src="resta.png">
    </div>

    <div class="contador">
        <p>1</p>
    </div>

    <div class="suma">
        <img src="suma.png">
    </div>

    <div class="contenedorImg">

        <img class="imagenCafe" src="${productoCafe.img_url}">

        <div class="textoProductos">
            <p><b>${productoCafe.brand}</b></p>
            <p>Paquete de café, 250 gr</p>
        </div>
    </div>

    <div class="precio">
        <p><b>${productoCafe.price},00€</b></p>
    </div>
    </div>
    <div class="lineaGrande"></div>`
});

const contenedorProductos = document.querySelector(".infoPorductos");
contenedorProductos.innerHTML = productosHTML;

// Contador productos

// const agregarCantidadProducto = (producto) => {
//     const objetos = cafe.find(objeto => {
//         if (objeto.brand === producto.brand) {
//             return true
//         }
//         return false
//     })

//     if (objetos) {
//         objetos.cantidad += 1
//     } else {
//         producto.cantidad = 1
//         cafe.push(producto)
//     }

// }


// Visualización del carrito

let result= 3.78;
let restult1 = 0;

const pintarCarrito = (array) => {
    const carrito = document.querySelector(".infoCarito");
    carrito.innerHTML = ''
    array.forEach((cafe) => {
        carrito.innerHTML = `

<div class="linea"></div>
        <div class="totalCarrito">
            <div class="textoCarrito">
                <p>SUBTOTAL</p>
                <p><b>${restult1 += cafe.price}€</b></p>
            </div> 

            <div class="textoCarrito">
                <p>ENVÍO</p>
                <p><b>GRATIS</b></p>
            </div>
            <div class="textoCarrito">
                <p><b>TOTAL</b></p>
                <p><b>${result += cafe.price}€</b></p>
            </div>
            <div class="iva">
                <p>Incluye 3.78€ de IVA</p>
            </div>
     </div> `;
    })
}

pintarCarrito(cafe);

