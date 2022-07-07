const cartaOtros = document.querySelector('#divOtros');

const stockOtros = [
    { id: 1, tipo: 'otros', nombre: 'otroA', precio: 1000, cantidad: 0, precioXcantidad: 0, },
    { id: 2, tipo: 'otros', nombre: 'otroB', precio: 2000, cantidad: 0, precioXcantidad: 0, },
    { id: 3, tipo: 'otros', nombre: 'otroC', precio: 1200, cantidad: 0, precioXcantidad: 0, },
    { id: 4, tipo: 'otros', nombre: 'otroD', precio: 1100, cantidad: 0, precioXcantidad: 0, },
    { id: 5, tipo: 'otros', nombre: 'otroE', precio: 2400, cantidad: 0, precioXcantidad: 0, },
    { id: 6, tipo: 'otros', nombre: 'otroF', precio: 2100, cantidad: 0, precioXcantidad: 0, }
]

stockOtros.forEach((item) => {
    const divOtros = document.createElement('div');
    divOtros.classList.add('cartaProductos')
    divOtros.innerHTML = `<div class="imgPorAhora"></div>
                <h3 class="tituloProductos">${item.nombre}</h3>
                <h3 class="precioProductos">${item.precio}$</h3>
                <p class="descripcionProductos">descripcion:</p>
                <button type="button" onclick="agregarAlCarritoOtros(${item.id})" class="btn btn-success w-100 agragarCarrito" data-bs-toggle="button">Agregar <i class="bi bi-cart-plus-fill"></i></button>`

    cartaOtros.append(divOtros);
});

const agregarAlCarritoOtros = (id) => {
    const item = stockOtros.find((producto) => producto.id === id)
    item.cantidad = item.cantidad + 1
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
}