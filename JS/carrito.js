arrayCarrito = [];


const botonCarrito = document.querySelector('#botonCarrito');
const contenedorCarrito = document.querySelector('#contenedorCarrito');
const cuerpoCarrito = document.querySelector('#cuerpoCarrito')

contenedorCarrito.addEventListener("mouseover", () => {
    cuerpoCarrito.style.display = "block";
});

contenedorCarrito.addEventListener("mouseleave", () => {
    cuerpoCarrito.style.display = "none";
});