document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cotizacionForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            let isValid = true;
            const errors = [];

            // Obtener campos
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const presupuesto = document.getElementById('presupuesto');
            const tipoObra = document.getElementById('tipoObra');
            const ubicacion = document.getElementById('ubicacion');
            const tamanoProyecto = document.getElementById('tamanoProyecto');
            const descripcion = document.getElementById('descripcion');

            // Validación  de campos vacíos
            const fields = [
                { el: nombre, name: 'Nombre' },
                { el: email, name: 'Email' },
                { el: presupuesto, name: 'Presupuesto' },
                { el: tipoObra, name: 'Tipo de obra' },
                { el: ubicacion, name: 'Ubicación' },
                { el: tamanoProyecto, name: 'Tamaño del proyecto' },
                { el: descripcion, name: 'Descripción' }
            ];

            fields.forEach(field => {
                if (!field.el.value.trim()) {
                    isValid = false;
                    errors.push(`El campo ${field.name} es obligatorio.`);
                    field.el.style.borderColor = 'red';
                } else {
                    field.el.style.borderColor = '';
                }
            });

            // Validación de Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value && !emailRegex.test(email.value)) {
                isValid = false;
                errors.push('Por favor, ingrese un correo electrónico válido.');
                email.style.borderColor = 'red';
            }

            // Si hay errores, detener el envío
            if (!isValid) {
                e.preventDefault();
                alert('Errores en el formulario:\n\n- ' + errors.join('\n- '));
            } else {
                console.log('Formulario válido, enviando...');
            }
        });
    }
});