const cartaBandejas = document.querySelector('#divBandejas');

const stockBandejas = [
    { id: 1, tipo: 'bandejas', nombre: 'Mabel', descripcion: 'Madera de pino en aguado blanco. El fondo floriado y el mensaje personalizado.', imagen: 'multimedia\bandejas\imagenesFarmstyle.png', precio: 1800, cantidad: 0, precioXcantidad: 0, },
    { id: 2, tipo: 'bandejas', nombre: 'Verónica', descripcion: 'Madera de pino en aguado blanco. El fondo floriado y el mensaje personalizado.', imagen: 'multimedia\bandejas\imagenesFarmstyle.png', precio: 800, cantidad: 0, precioXcantidad: 0, },
    { id: 3, tipo: 'bandejas', nombre: 'Mariana', descripcion: 'Madera de pino en aguado blanco. El fondo floriado y el mensaje personalizado.', imagen: 'multimedia\bandejas\imagenesFarmstyle.png', precio: 1200, cantidad: 0, precioXcantidad: 0, },
    { id: 4, tipo: 'bandejas', nombre: 'Lucia', descripcion: 'Madera de pino en aguado blanco. El fondo floriado y el mensaje personalizado.', imagen: 'multimedia\bandejas\imagenesFarmstyle.png', precio: 1100, cantidad: 0, precioXcantidad: 0, },
    { id: 5, tipo: 'bandejas', nombre: 'Maria', descripcion: 'Madera de pino en aguado blanco. El fondo floriado y el mensaje personalizado.', imagen: 'multimedia\bandejas\imagenesFarmstyle.png', precio: 2400, cantidad: 0, precioXcantidad: 0, },
    { id: 6, tipo: 'bandejas', nombre: 'Federico', descripcion: 'Madera de pino en aguado blanco. El fondo floriado y el mensaje personalizado.', imagen: 'multimedia\bandejas\imagenesFarmstyle.png', precio: 2100, cantidad: 0, precioXcantidad: 0, }
]

stockBandejas.forEach((item) => {
    const divBandejas = document.createElement('div');
    divBandejas.classList.add('cartaProductos')
    divBandejas.innerHTML = `<img scr="${item.imagen}"/>
                <h3 class="tituloProductos">${item.nombre}</h3>
                <h3 class="precioProductos">${item.precio}$</h3>
                <p class="descripcionProductos">${item.descripcion}</p>
                <button type="button" onclick="agregarAlCarritoBandejas(${item.id})" class="btn btn-success w-100 agragarCarrito" data-bs-toggle="button">Agregar <i class="bi bi-cart-plus-fill"></i></button>`

    cartaBandejas.append(divBandejas);
});

const agregarAlCarritoBandejas = (id) => {
    const item = stockBandejas.find((producto) => producto.id === id);
    item.cantidad = item.cantidad + 1;
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
};