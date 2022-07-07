const cartaBandejas = document.querySelector('#divBandejas');

const stockBandejas = [
    { id: 1, tipo: 'bandejas', nombre: 'bandejaA', precio: 1000, cantidad: 0, precioXcantidad: 0, },
    { id: 2, tipo: 'bandejas', nombre: 'bandejaB', precio: 2000, cantidad: 0, precioXcantidad: 0, },
    { id: 3, tipo: 'bandejas', nombre: 'bandejaC', precio: 1200, cantidad: 0, precioXcantidad: 0, },
    { id: 4, tipo: 'bandejas', nombre: 'bandejaD', precio: 1100, cantidad: 0, precioXcantidad: 0, },
    { id: 5, tipo: 'bandejas', nombre: 'bandejaE', precio: 2400, cantidad: 0, precioXcantidad: 0, },
    { id: 6, tipo: 'bandejas', nombre: 'bandejaF', precio: 2100, cantidad: 0, precioXcantidad: 0, }
]

stockBandejas.forEach((item) => {
    const divBandejas = document.createElement('div');
    divBandejas.classList.add('cartaProductos')
    divBandejas.innerHTML = `<div class="imgPorAhora"></div>
                <h3 class="tituloProductos">${item.nombre}</h3>
                <h3 class="precioProductos">${item.precio}$</h3>
                <p class="descripcionProductos">descripcion:</p>
                <button type="button" onclick="agregarAlCarritoBandejas(${item.id})" class="btn btn-success w-100 agragarCarrito" data-bs-toggle="button">Agregar <i class="bi bi-cart-plus-fill"></i></button>`

    cartaBandejas.append(divBandejas);
});

const agregarAlCarritoBandejas = (id) => {
    const item = stockBandejas.find((producto) => producto.id === id);
    item.cantidad = item.cantidad + 1;
    item.precioXcantidad = item.precio * item.cantidad;
    if (item.cantidad === 1) {
        arrayCarrito.push(item);
    } else {
        const productoRepetido = arrayCarrito.find((item) => item.cantidad > 1);
        const indiceRepetido = arrayCarrito.indexOf(productoRepetido);
        arrayCarrito[indiceRepetido] = productoRepetido;
    }
    dibujarCarrito();
    Toastify({
        text: "Agregado correctamente",
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: '#7F8D7A'
        }
    }).showToast();
};