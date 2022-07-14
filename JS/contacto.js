const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_tw5rsrj';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                Toastify({
                    text: "Mensaje Enviado",
                    duration: 2000,
                    gravity: 'top',
                    position: 'right',
                    style: {
                        background: '#198754'
                    }
                }).showToast();
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });