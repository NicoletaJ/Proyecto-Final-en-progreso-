document.addEventListener("DOMContentLoaded", function() {
    
    //ESCONDER BARRA DE NAVEGACION SUPERIOR
    
    var navbar = document.querySelector('.navbar');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll hacia abajo
            navbar.classList.add('navbar-hidden');
        } else {
            // Scroll hacia arriba
            navbar.classList.remove('navbar-hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
    });

    //VALIDAR FORMULARIO PRINCIPAL

    function validarNombre() {
        let nombre = document.getElementById("nombre").value;
        let nombreError = document.getElementById("nombreError");
        if (nombre.length < 2) {
            nombreError.textContent = "El nombre debe tener al menos 2 caracteres.";
        } else {
            nombreError.textContent = "";
        }
    }

    function validarApellidos() {
        let apellidos = document.getElementById("apellidos").value;
        let apellidosError = document.getElementById("apellidosError");
        if (apellidos.length < 2) {
            apellidosError.textContent = "Los apellidos deben tener al menos 2 caracteres.";
        } else {
            apellidosError.textContent = "";
        }
    }

    function validarTelefono() {
        let telefono = document.getElementById("telefono").value;
        let telefonoError = document.getElementById("telefonoError");
        let telefonoRegex = /^[0-9]{9}$/;
        if (!telefonoRegex.test(telefono)) {
            telefonoError.textContent = "Por favor, introduce un número de teléfono válido de 9 dígitos.";
        } else {
            telefonoError.textContent = "";
        }
    }

    function validarCorreo() {
        let correo = document.getElementById("correo").value;
        let correoError = document.getElementById("correoError");
        let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!emailRegex.test(correo)) {
            correoError.textContent = "Por favor, introduce un correo electrónico válido.";
        } else {
            correoError.textContent = "";
        }
    }

    function validarTexto() {
        let texto = document.getElementById("texto").value;
        let textoError = document.getElementById("textoError");
        if (texto.length < 10) {
            textoError.textContent = "El mensaje debe tener al menos 10 caracteres.";
        } else {
            textoError.textContent = "";
        }
    }

    function handleFocus(input) {
        input.style.borderColor = "#282F3F";
    }

    function handleBlur(input) {
        input.style.borderColor = "transparent";
    }

    document.getElementById("nombre").addEventListener("input", validarNombre);
    document.getElementById("apellidos").addEventListener("input", validarApellidos);
    document.getElementById("telefono").addEventListener("input", validarTelefono);
    document.getElementById("correo").addEventListener("input", validarCorreo);
    document.getElementById("texto").addEventListener("input", validarTexto);

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        validarNombre();
        validarApellidos();
        validarTelefono();
        validarCorreo();
        validarTexto();

        if (document.querySelector(".error-message:not(:empty)")) {
            event.preventDefault();
        }
    });

    window.handleFocus = handleFocus;
    window.handleBlur = handleBlur;
    
});