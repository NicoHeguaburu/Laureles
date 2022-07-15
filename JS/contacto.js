const btn = document.getElementById('button');


// FUNCIONANDO
// SDK DE LA API

// document.getElementById('form')
//     .addEventListener('submit', function(event) {
//         event.preventDefault();

//         btn.value = 'Enviando...';

//         const serviceID = 'default_service';
//         const templateID = 'template_tw5rsrj';

//         emailjs.sendForm(serviceID, templateID, this)
//             .then(() => {
//                 btn.value = 'Send Email';
//                 Toastify({
//                     text: "Mensaje Enviado",
//                     duration: 2000,
//                     gravity: 'top',
//                     position: 'right',
//                     style: {
//                         background: '#198754'
//                     }
//                 }).showToast();
//             }, (err) => {
//                 btn.value = 'Send Email';
//                 alert(JSON.stringify(err));
//             });
//     });









// NO FUNCIONANDO
// CON FETCH

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault(); // prevent reload
        btn.value = 'enviando..'

        let Data = new FormData(this);

        Data.append('service_id', 'default_service');
        Data.append('template_id', 'template_tw5rsrj');
        Data.append('user_id', 'J9fRhPVVBUpKg1wtM');


        fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
                method: 'POST',
                body: JSON.stringify(Data),
                headers: {
                    contentType: false,
                    processData: false
                }
            })
            .then(() => {
                btn.value = 'Enviar mensaje';
                Toastify({
                    text: "Mensaje Enviado",
                    duration: 2000,
                    gravity: 'top',
                    position: 'right',
                    style: {
                        background: '#198754'
                    }
                });
            });
    })










// DOCUMENTACION DE LA API 
// CON AJAX



// $('#myForm').on('submit', function(event) {
//     event.preventDefault(); // prevent reload

//     var formData = new FormData(this);
//     formData.append('service_id', 'YOUR_SERVICE_ID');
//     formData.append('template_id', 'YOUR_TEMPLATE_ID');
//     formData.append('user_id', 'YOUR_PUBLIC_KEY');

//     $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
//         type: 'POST',
//         data: formData,
//         contentType: false, // auto-detection
//         processData: false // no need to parse formData to string
//     }).done(function() {
//         alert('Your mail is sent!');
//     }).fail(function(error) {
//         alert('Oops... ' + JSON.stringify(error));
//     });
// });