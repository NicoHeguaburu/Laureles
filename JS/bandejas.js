const cartaBandejas = document.querySelector('#divBandejas');

const stockBandejas = [
    { id: 1, tipo: 'bandejas', nombre: 'bandejaA', precio: 1000, },
    { id: 2, tipo: 'bandejas', nombre: 'bandejaB', precio: 2000, },
    { id: 3, tipo: 'bandejas', nombre: 'bandejaC', precio: 1200, },
    { id: 4, tipo: 'bandejas', nombre: 'bandejaD', precio: 1100, },
    { id: 5, tipo: 'bandejas', nombre: 'bandejaE', precio: 2400, },
    { id: 6, tipo: 'bandejas', nombre: 'bandejaF', precio: 2100, }
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
    const item = stockBandejas.find((producto) => producto.id === id)
    arrayCarrito.push(item);
    console.log(arrayCarrito);
}