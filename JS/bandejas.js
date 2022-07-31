const cartaBandejas = document.querySelector('#divBandejas');

const stockBandejas = [
    { id: 1, tipo: 'bandejas', nombre: 'Mabel', descripcionCorta: 'Rectangular, con asas, confeccionada en madera de pino con aguada blanca que trasluce la veta de la madera.', descripcionLarga: 'El fondo está decorado con bouquet de flores y mensaje personalizado. Etiqueta que acompaña el diseño y puede llevar un nombre o una fecha. Medidas: 55 cms x 30  ', precio: 1800, cantidad: 0, precioXcantidad: 0, },
    { id: 2, tipo: 'bandejas', nombre: 'Verónica', descripcion: 'Formato rectangular, con asas. Realizada en MDF y pintada en blanco roto con delicadas hojas color ocre. Esta bandeja es ideal para servir budines, bocaditos dulces o salados o llevar el café a la mesa.  Acompaña un corazón decorado con el mismo motivo al cual puedes agregar un nombre o una fecha. Queda hermosa como centro de mesa con flores en tela o velas y ramas verdes.', precio: 800, cantidad: 0, precioXcantidad: 0, },
    { id: 3, tipo: 'bandejas', nombre: 'Mariana', descripcion: 'Bandeja y cajita en pino, en la cual puedes apreciar la veta de la madera. El fondo de la bandeja nos recuerda los antiguos carteles en chapa, en color blanco roto, con manchas de óxido. Opcional: taza de té a tono.  Esta bandeja es ideal para un regalo al cual puedes agregar un rico té importado, chocolates o jabones finos para colocar en la mesada del baño. Medida de la bandeja: 30 x 25 cms.Medida de la caja: 15 x 10 cms.', precio: 1200, cantidad: 0, precioXcantidad: 0, },
    { id: 4, tipo: 'bandejas', nombre: 'lucia', descripcion: 'Ideal para apoyar tus platos calientes que están realizados totalmente en madera, con patas redondeadas y diseños variados. Podrás apoyar aquí tus fuentes sin estropear la mesa. Pintadas, decapadas o color madera, pueden terminarse con sténcil a tu gusto o bouquet de flores. Medida: Diámetro 40 cms.', precio: 1100, cantidad: 0, precioXcantidad: 0, },
    { id: 5, tipo: 'bandejas', nombre: 'bandejaE', descripcion: '', precio: 2400, cantidad: 0, precioXcantidad: 0, },
    { id: 6, tipo: 'bandejas', nombre: 'bandejaF', descripcion: '', precio: 2100, cantidad: 0, precioXcantidad: 0, }
]

stockBandejas.forEach((item) => {
    const divBandejas = document.createElement('div');
    divBandejas.classList.add('cartaProductos')
    divBandejas.innerHTML = `<div class="imgPorAhora"></div>
                <h3 class="tituloProductos">${item.nombre}</h3>
                <h3 class="precioProductos">${item.precio}$</h3>
                <p class="descripcionProductos">${item.descripcionCorta}<span class="" onclick="mostrarMas(${item.id})">ver mas</span><span class="d-none" id="descripcionLarga>${item.descripcionLarga}<span/></p>
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