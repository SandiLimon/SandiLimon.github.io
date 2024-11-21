function validateForm() {
  var holder = document.getElementById("holder").value;
  var ccNumber = document.getElementById("cc_number").value;
  var ccMonth = document.getElementById("cc_month").value;
  var ccYear = document.getElementById("cc_year").value;
  var ccCvc = document.getElementById("cc_cvc").value;


  if (holder === "" || ccNumber === "" || ccMonth === "" || ccYear === "" || ccCvc === "") {
    alert("Por favor, complete todos los campos.");
    return; 
  }

  swal({
    title: '¡GRACIAS POR SU COMPRA!',
    icon: 'success',
    button: 'Aceptar',
  }).then(function() {
  
    window.location.href = "index.html";
  });
}

function validarLetras(event) {
  event.target.value = event.target.value.replace(/[^A-Za-zÁáÉéÍíÓóÚúÑñ\s]/g, '');
}

function validarNumeros(event) {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
}