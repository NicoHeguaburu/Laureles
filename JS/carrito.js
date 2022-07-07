let arrayCarrito = [];

if (localStorage.getItem('arrayCarritoJSON')) {
    arrayCarritoJson = JSON.parse(localStorage.getItem('arrayCarritoJSON'));
    arrayCarrito = arrayCarritoJson;
}


const botonCarrito = document.querySelector('#botonCarrito');
const contenedorCarrito = document.querySelector('#contenedorCarrito');
const cuerpoCarrito = document.querySelector('#cuerpoCarrito')

contenedorCarrito.addEventListener("mouseover", () => {
    cuerpoCarrito.style.display = "block";
});

contenedorCarrito.addEventListener("mouseleave", () => {
    cuerpoCarrito.style.display = "none";
});

cuerpoCarrito.innerHTML = `<h6 class="d-flex justify-content-center mt-3">Carrito vacío</h6>`;

if (arrayCarritoJson) {
    dibujarCarrito();
}

function dibujarCarrito() {
    cuerpoCarrito.innerHTML = "";
    arrayCarrito.forEach(item => {
        const divCarritoItem = document.createElement('div');
        divCarritoItem.innerHTML =
            `<div class="d-flex" id="listaCarritoItem"><div>${item.cantidad} x ${item.nombre} - $${item.precio}</div></div>`
        cuerpoCarrito.append(divCarritoItem);
    });
    let precioTotal = 0;
    arrayCarrito.forEach(item => {
        precioTotal = item.precioXcantidad + precioTotal;
    });
    const divTotal = document.createElement('div');
    divTotal.innerHTML = `<h6 class="d-flex justify-content-center mt-1">TOTAL: ${precioTotal}</h6><button id="btnVaciarCarro" onclick="vaciarCarrito()">vaciar carro</button>`
    cuerpoCarrito.append(divTotal);
    storage();
}

function vaciarCarrito() {
    arrayCarrito.forEach(item => {
        item.cantidad = 0;
    });
    arrayCarrito = [];
    cuerpoCarrito.innerHTML = `<h6 class="d-flex justify-content-center mt-3">Carrito vacío</h6>`;
    localStorage.removeItem('arrayCarritoJSON');
    Toastify({
        text: "Carrito vaciado",
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: '#ff4d4d'
        }
    }).showToast();
}


function storage() {
    const arrayCarritoJson = JSON.stringify(arrayCarrito);
    localStorage.setItem('arrayCarritoJSON', arrayCarritoJson);
}