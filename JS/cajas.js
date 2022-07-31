const cartaCajas = document.querySelector('#divCajas');

// const stockCajas = [
//     { id: 2, tipo: 'cajas', nombre: 'Maria', descripcion: 'Caja totalmente realizada en MDF con tapa superior que cumple con diferentes funciones.  La que presentamos aquí está pensada como costurero.', imagen: '../multimedia/cajas/cajas.png', precio: 2000, cantidad: 0, precioXcantidad: 0, },
//     { id: 1, tipo: 'cajas', nombre: 'Lucia', descripcion: 'Caja totalmente realizada en MDF con tapa superior que cumple con diferentes funciones.  La que presentamos aquí está pensada como costurero.', imagen: '../multimedia/cajas/cajas.png', precio: 1000, cantidad: 0, precioXcantidad: 0, },
//     { id: 3, tipo: 'cajas', nombre: 'Marcos', descripcion: 'Caja totalmente realizada en MDF con tapa superior que cumple con diferentes funciones.  La que presentamos aquí está pensada como costurero.', imagen: '../multimedia/cajas/cajas.png', precio: 1200, cantidad: 0, precioXcantidad: 0, },
//     { id: 4, tipo: 'cajas', nombre: 'Mario', descripcion: 'Caja totalmente realizada en MDF con tapa superior que cumple con diferentes funciones.  La que presentamos aquí está pensada como costurero.', imagen: '../multimedia/cajas/cajas.png', precio: 1100, cantidad: 0, precioXcantidad: 0, },
//     { id: 5, tipo: 'cajas', nombre: 'Sofia', descripcion: 'Caja totalmente realizada en MDF con tapa superior que cumple con diferentes funciones.  La que presentamos aquí está pensada como costurero.', imagen: '../multimedia/cajas/cajas.png', precio: 2400, cantidad: 0, precioXcantidad: 0, },
//     { id: 6, tipo: 'cajas', nombre: 'Brenda', descripcion: 'Caja totalmente realizada en MDF con tapa superior que cumple con diferentes funciones.  La que presentamos aquí está pensada como costurero.', imagen: '../multimedia/cajas/cajas.png', precio: 2100, cantidad: 0, precioXcantidad: 0, }
// ]

fetch('https://mocki.io/v1/0428c28e-b914-45bf-9284-4b8ea70af6c3')
    .then(response => response.json())
    .then(data => crearStock(data))

const crearStock = (Data) => {
    stockCajas = Data


    stockCajas.forEach((item) => {
        const divCajas = document.createElement('div');
        divCajas.classList.add('cartaProductos');
        divCajas.innerHTML = `<img src="${item.imagen}" class="imgProductos">
        <h3 class="tituloProductos">${item.nombre}</h3>
        <h3 class="precioProductos">${item.precio}$</h3>
        <p class="descripcionProductos">${item.descripcion}</p>
                    <button type="button" onclick="agregarAlCarritoCajas(${item.id})" class="btn btn-success w-100 agragarCarrito" data-bs-toggle="button">Agregar <i class="bi bi-cart-plus-fill"></i></button>`

        cartaCajas.append(divCajas);
    });
}






const agregarAlCarritoCajas = (id) => {
    const item = stockCajas.find((producto) => producto.id === id)
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