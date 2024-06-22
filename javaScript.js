document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registro-formulario-validacion");

    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const usuario = document.getElementById("usuario").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Validar correo electrónico
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            alert("Por favor ingrese un correo electrónico válido.");
            return;
        }

        // Validar teléfono (solo números)
        const telefonoRegex = /^[0-9]+$/;
        if (!telefonoRegex.test(telefono)) {
            alert("Por favor ingrese un número de teléfono válido.");
            return;
        }

        // Validar contraseñas coincidentes
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Simulación de registro exitoso
        alert("Registro exitoso!");

        // Limpiar formulario
        registrationForm.reset();
    });
});
