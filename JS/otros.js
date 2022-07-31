const cartaOtros = document.querySelector('#divOtros');

// const stockOtros = [
//     { id: 1, tipo: 'otros', nombre: 'Manta XL 1', descripcion: 'Manta tejida a mano realizada en lana merino virgen, viste el pie de la cama (2 plazas) o en tu sillón favorito al lado de la estufa.', imagen: '../multimedia/otros/MantaXL.png', precio: 1000, cantidad: 0, precioXcantidad: 0, },
//     { id: 2, tipo: 'otros', nombre: 'Manta XL 2', descripcion: 'Manta tejida a mano realizada en lana merino virgen, viste el pie de la cama (2 plazas) o en tu sillón favorito al lado de la estufa.', imagen: '../multimedia/otros/MantaXL.png', precio: 2000, cantidad: 0, precioXcantidad: 0, },
//     { id: 3, tipo: 'otros', nombre: 'Manta XL 3', descripcion: 'Manta tejida a mano realizada en lana merino virgen, viste el pie de la cama (2 plazas) o en tu sillón favorito al lado de la estufa.', imagen: '../multimedia/otros/MantaXL.png', precio: 1200, cantidad: 0, precioXcantidad: 0, },
//     { id: 4, tipo: 'otros', nombre: 'Manta XL 4', descripcion: 'Manta tejida a mano realizada en lana merino virgen, viste el pie de la cama (2 plazas) o en tu sillón favorito al lado de la estufa.', imagen: '../multimedia/otros/MantaXL.png', precio: 1100, cantidad: 0, precioXcantidad: 0, },
//     { id: 5, tipo: 'otros', nombre: 'Manta XL 5', descripcion: 'Manta tejida a mano realizada en lana merino virgen, viste el pie de la cama (2 plazas) o en tu sillón favorito al lado de la estufa.', imagen: '../multimedia/otros/MantaXL.png', precio: 2400, cantidad: 0, precioXcantidad: 0, },
//     { id: 6, tipo: 'otros', nombre: 'Manta XL 6', descripcion: 'Manta tejida a mano realizada en lana merino virgen, viste el pie de la cama (2 plazas) o en tu sillón favorito al lado de la estufa.', imagen: '../multimedia/otros/MantaXL.png', precio: 2100, cantidad: 0, precioXcantidad: 0, }
// ]

fetch('https://mocki.io/v1/d51e10ef-1fec-46a1-aa10-7ea047b7ce1e')
    .then(response => response.json())
    .then(data => crearStock(data))

const crearStock = (Data) => {
    stockOtros = Data


    stockOtros.forEach((item) => {
        const divOtros = document.createElement('div');
        divOtros.classList.add('cartaProductos')
        divOtros.innerHTML = `<img src="${item.imagen}" class="imgProductos">
        <h3 class="tituloProductos">${item.nombre}</h3>
        <h3 class="precioProductos">${item.precio}$</h3>
        <p class="descripcionProductos">${item.descripcion}</p>
                    <button type="button" onclick="agregarAlCarritoOtros(${item.id})" class="btn btn-success w-100 agragarCarrito" data-bs-toggle="button">Agregar <i class="bi bi-cart-plus-fill"></i></button>`

        cartaOtros.append(divOtros);
    });
}

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