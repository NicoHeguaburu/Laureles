const cartaCentros = document.querySelector('#divCentros');

// const stockCentros = [
//     { id: 1, tipo: 'centros', nombre: 'Julieta', descripcion: 'Centro de mesa rectangular con molduras metalicas y decorado con flores', imagen: '../multimedia/centros/centros.png', precio: 1000, cantidad: 0, precioXcantidad: 0, },
//     { id: 2, tipo: 'centros', nombre: 'Martina', descripcion: 'Centro de mesa rectangular con molduras metalicas y decorado con flores', imagen: '../multimedia/centros/centros.png', precio: 2000, cantidad: 0, precioXcantidad: 0, },
//     { id: 3, tipo: 'centros', nombre: 'Gualberto', descripcion: 'Centro de mesa rectangular con molduras metalicas y decorado con flores', imagen: '../multimedia/centros/centros.png', precio: 1200, cantidad: 0, precioXcantidad: 0, },
//     { id: 4, tipo: 'centros', nombre: 'Alfonso', descripcion: 'Centro de mesa rectangular con molduras metalicas y decorado con flores', imagen: '../multimedia/centros/centros.png', precio: 1100, cantidad: 0, precioXcantidad: 0, },
//     { id: 5, tipo: 'centros', nombre: 'Emilia', descripcion: 'Centro de mesa rectangular con molduras metalicas y decorado con flores', imagen: '../multimedia/centros/centros.png', precio: 2400, cantidad: 0, precioXcantidad: 0, },
//     { id: 6, tipo: 'centros', nombre: 'Felipe', descripcion: 'Centro de mesa rectangular con molduras metalicas y decorado con flores', imagen: '../multimedia/centros/centros.png', precio: 2100, cantidad: 0, precioXcantidad: 0, }
// ]

fetch('https://mocki.io/v1/85d64ec0-06e5-4cb8-b071-a3d04c3f6772')
    .then(response => response.json())
    .then(data => crearStock(data))

const crearStock = (Data) => {
    stockCentros = Data


    stockCentros.forEach((item) => {
        const divCentros = document.createElement('div');
        divCentros.classList.add('cartaProductos')
        divCentros.innerHTML = `<img src="${item.imagen}" class="imgProductos">
                                <h3 class="tituloProductos">${item.nombre}</h3>
                                <h3 class="precioProductos">${item.precio}$</h3>
                                <p class="descripcionProductos">${item.descripcion}</p>
                                <button type="button" onclick="agregarAlCarritoCentros(${item.id})" class="btn btn-success w-100 agragarCarrito" data-bs-toggle="button">Agregar <i class="bi bi-cart-plus-fill"></i></button>`

        cartaCentros.append(divCentros);
    });
}



const agregarAlCarritoCentros = (id) => {
    const item = stockCentros.find((producto) => producto.id === id)
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