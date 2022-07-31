const cartaMateras = document.querySelector('#divMateras');

// const stockMateras = [
//     { id: 1, tipo: 'materas', nombre: 'Laureles', descripcion: 'Terminaciones que permiten apreciar la veta y el color de la madera, con protección de lacas de primera categoría.', imagen: '../multimedia/materas/materas.png', precio: 1000, cantidad: 0, precioXcantidad: 0, },
//     { id: 2, tipo: 'materas', nombre: 'Sofia', descripcion: 'Terminaciones que permiten apreciar la veta y el color de la madera, con protección de lacas de primera categoría.', imagen: '../multimedia/materas/materas.png', precio: 2000, cantidad: 0, precioXcantidad: 0, },
//     { id: 3, tipo: 'materas', nombre: 'Ana', descripcion: 'Terminaciones que permiten apreciar la veta y el color de la madera, con protección de lacas de primera categoría.', imagen: '../multimedia/materas/materas.png', precio: 1200, cantidad: 0, precioXcantidad: 0, },
//     { id: 4, tipo: 'materas', nombre: 'Marisol', descripcion: 'Terminaciones que permiten apreciar la veta y el color de la madera, con protección de lacas de primera categoría.', imagen: '../multimedia/materas/materas.png', precio: 1100, cantidad: 0, precioXcantidad: 0, },
//     { id: 5, tipo: 'materas', nombre: 'Mateo', descripcion: 'Terminaciones que permiten apreciar la veta y el color de la madera, con protección de lacas de primera categoría.', imagen: '../multimedia/materas/materas.png', precio: 2400, cantidad: 0, precioXcantidad: 0, },
//     { id: 6, tipo: 'materas', nombre: 'Martin', descripcion: 'Terminaciones que permiten apreciar la veta y el color de la madera, con protección de lacas de primera categoría.', imagen: '../multimedia/materas/materas.png', precio: 2100, cantidad: 0, precioXcantidad: 0, }
// ]

fetch('https://mocki.io/v1/384a799c-1d0c-44ff-af35-870b180b7184')
    .then(response => response.json())
    .then(data => crearStock(data))

const crearStock = (Data) => {
    stockMateras = Data


    stockMateras.forEach((item) => {
        const divMateras = document.createElement('div');
        divMateras.classList.add('cartaProductos');
        divMateras.innerHTML = `<img src="${item.imagen}" class="imgProductos">
        <h3 class="tituloProductos">${item.nombre}</h3>
        <h3 class="precioProductos">${item.precio}$</h3>
        <p class="descripcionProductos">${item.descripcion}</p>
                    <button type="button" onclick="agregarAlCarritoMateras(${item.id})" class="btn btn-success w-100 agragarCarrito" data-bs-toggle="button">Agregar <i class="bi bi-cart-plus-fill"></i></button>`

        cartaMateras.append(divMateras);
    });
}



const agregarAlCarritoMateras = (id) => {
    const item = stockMateras.find((producto) => producto.id === id)
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