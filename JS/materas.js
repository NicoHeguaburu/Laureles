const cartaMateras = document.querySelector('#divMateras');

const stockMateras = [
    { id: 1, tipo: 'materas', nombre: 'materasA', precio: 1000, },
    { id: 2, tipo: 'materas', nombre: 'materasB', precio: 2000, },
    { id: 3, tipo: 'materas', nombre: 'materasC', precio: 1200, },
    { id: 4, tipo: 'materas', nombre: 'materasD', precio: 1100, },
    { id: 5, tipo: 'materas', nombre: 'materasE', precio: 2400, },
    { id: 6, tipo: 'materas', nombre: 'materasF', precio: 2100, }
]

stockMateras.forEach((item) => {
    const divMateras = document.createElement('div');
    divMateras.classList.add('cartaProductos');
    divMateras.innerHTML = `<div class="imgPorAhora"></div>
                <h3 class="tituloProductos">${item.nombre}</h3>
                <h3 class="precioProductos">${item.precio}$</h3>
                <p class="descripcionProductos">descripcion:</p>
                <button type="button" onclick="agregarAlCarritoMateras(${item.id})" class="btn btn-success w-100 agragarCarrito" data-bs-toggle="button">Agregar <i class="bi bi-cart-plus-fill"></i></button>`

    cartaMateras.append(divMateras);
});

const agregarAlCarritoMateras = (id) => {
    const item = stockMateras.find((producto) => producto.id === id)
    arrayCarrito.push(item);
    console.log(arrayCarrito);
}