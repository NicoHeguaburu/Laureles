const cartaCentros = document.querySelector('#divCentros');

const stockCentros = [
    { id: 1, tipo: 'centros', nombre: 'centroA', precio: 1000, cantidad: 0, },
    { id: 2, tipo: 'centros', nombre: 'centroB', precio: 2000, cantidad: 0, },
    { id: 3, tipo: 'centros', nombre: 'centroC', precio: 1200, cantidad: 0, },
    { id: 4, tipo: 'centros', nombre: 'centroD', precio: 1100, cantidad: 0, },
    { id: 5, tipo: 'centros', nombre: 'centroE', precio: 2400, cantidad: 0, },
    { id: 6, tipo: 'centros', nombre: 'centroF', precio: 2100, cantidad: 0, }
]

stockCentros.forEach((item) => {
    const divCentros = document.createElement('div');
    divCentros.classList.add('cartaProductos')
    divCentros.innerHTML = `<div class="imgPorAhora"></div>
                <h3 class="tituloProductos">${item.nombre}</h3>
                <h3 class="precioProductos">${item.precio}$</h3>
                <p class="descripcionProductos">descripcion:</p>
                <button type="button" onclick="agregarAlCarritoCentros(${item.id})" class="btn btn-success w-100 agragarCarrito" data-bs-toggle="button">Agregar <i class="bi bi-cart-plus-fill"></i></button>`

    cartaCentros.append(divCentros);
});

const agregarAlCarritoCentros = (id) => {
    const item = stockCentros.find((producto) => producto.id === id)
    item.cantidad = item.cantidad + 1
    item.precio = item.precio * item.cantidad;

    if (item.cantidad === 1) {
        arrayCarrito.push(item);
    } else {
        const productoRepetido = arrayCarrito.find((item) => item.cantidad > 1);
        const indiceRepetido = arrayCarrito.indexOf(productoRepetido);
        arrayCarrito[indiceRepetido] = productoRepetido;
    }
    dibujarCarrito();
}