document.addEventListener('DOMContentLoaded', () => {
    
    const formulario = document.querySelector('.formulario');
    const btnEnviar = document.querySelector('.btn-enviar');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const textoOriginal = btnEnviar.textContent;
            btnEnviar.textContent = 'Enviando...';
            btnEnviar.style.opacity = '0.7';
            btnEnviar.style.cursor = 'wait';
            btnEnviar.disabled = true;

            setTimeout(() => {
                
                alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo muy pronto.');
                
                formulario.reset();

                btnEnviar.textContent = textoOriginal;
                btnEnviar.style.opacity = '1';
                btnEnviar.style.cursor = 'pointer';
                btnEnviar.disabled = false;
                
            }, 1500); 
        });
    }

});
