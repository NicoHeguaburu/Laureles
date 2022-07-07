const cartaCandelabros = document.querySelector('#divCandelabros');

const stockCandelabros = [
    { id: 1, tipo: 'candelabros', nombre: 'candelabroA', precio: 1000, cantidad: 0, precioXcantidad: 0, },
    { id: 2, tipo: 'candelabros', nombre: 'candelabroB', precio: 2000, cantidad: 0, precioXcantidad: 0, },
    { id: 3, tipo: 'candelabros', nombre: 'candelabroC', precio: 1200, cantidad: 0, precioXcantidad: 0, },
    { id: 4, tipo: 'candelabros', nombre: 'candelabroD', precio: 1100, cantidad: 0, precioXcantidad: 0, },
    { id: 5, tipo: 'candelabros', nombre: 'candelabroE', precio: 2400, cantidad: 0, precioXcantidad: 0, },
    { id: 6, tipo: 'candelabros', nombre: 'candelabroF', precio: 2100, cantidad: 0, precioXcantidad: 0, }
]

stockCandelabros.forEach((item) => {
    const divCandelabros = document.createElement('div');
    divCandelabros.classList.add('cartaProductos')
    divCandelabros.innerHTML = `<div class="imgPorAhora"></div>
                <h3 class="tituloProductos">${item.nombre}</h3>
                <h3 class="precioProductos">${item.precio}$</h3>
                <p class="descripcionProductos">descripcion:</p>
                <button type="button" onclick="agregarAlCarritoCandelabros(${item.id})" class="btn btn-success w-100 agragarCarrito" data-bs-toggle="button">Agregar <i class="bi bi-cart-plus-fill"></i></button>`

    cartaCandelabros.append(divCandelabros);
});

const agregarAlCarritoCandelabros = (id) => {
    const item = stockCandelabros.find((producto) => producto.id === id)
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