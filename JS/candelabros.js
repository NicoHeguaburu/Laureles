const cartaCandelabros = document.querySelector('#divCandelabros');

const stockCandelabros = [
    { id: 1, tipo: 'candelabros', nombre: 'candelabroA', precio: 1000, },
    { id: 2, tipo: 'candelabros', nombre: 'candelabroB', precio: 2000, },
    { id: 3, tipo: 'candelabros', nombre: 'candelabroC', precio: 1200, },
    { id: 4, tipo: 'candelabros', nombre: 'candelabroD', precio: 1100, },
    { id: 5, tipo: 'candelabros', nombre: 'candelabroE', precio: 2400, },
    { id: 6, tipo: 'candelabros', nombre: 'candelabroF', precio: 2100, }
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
    arrayCarrito.push(item);
    console.log(arrayCarrito);
}