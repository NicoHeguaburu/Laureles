const cartaCajas = document.querySelector('#divCajas');

const stockCajas = [
    { id: 1, tipo: 'cajas', nombre: 'cajaA', precio: 1000, },
    { id: 2, tipo: 'cajas', nombre: 'cajaB', precio: 2000, },
    { id: 3, tipo: 'cajas', nombre: 'cajaC', precio: 1200, },
    { id: 4, tipo: 'cajas', nombre: 'cajaD', precio: 1100, },
    { id: 5, tipo: 'cajas', nombre: 'cajaE', precio: 2400, },
    { id: 6, tipo: 'cajas', nombre: 'cajaF', precio: 2100, }
]

stockCajas.forEach((item) => {
    const divCajas = document.createElement('div');
    divCajas.classList.add('cartaProductos')
    divCajas.innerHTML = `<div class="imgPorAhora"></div>
                <h3 class="tituloProductos">${item.nombre}</h3>
                <h3 class="precioProductos">${item.precio}$</h3>
                <p class="descripcionProductos">descripcion:</p>
                <button type="button" onclick="agregarAlCarritoCajas(${item.id})" class="btn btn-success w-100 agragarCarrito" data-bs-toggle="button">Agregar <i class="bi bi-cart-plus-fill"></i></button>`

    cartaCajas.append(divCajas);
});

const agregarAlCarritoCajas = (id) => {
    const item = stockCajas.find((producto) => producto.id === id)
    arrayCarrito.push(item);
    console.log(arrayCarrito);
}