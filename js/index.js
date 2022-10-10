/* ---- Scroll animación ---- */

window.addEventListener('scroll', () => {

    const seccion = document.querySelectorAll('section');

    for (let i = 1; i < seccion.length; i++) {

        /* altura de la pantalla */
        
        const altura = window.innerHeight/1.3; 
        // const altura = document.documentElement.scrollTop;

        /* altura desde la seccion al borde superior */

        const distancia = seccion[i].getBoundingClientRect().top; 
        // const distancia = seccion[i].offsetTop;

        if (distancia <= altura) {

            seccion[i].classList.add('aparece');
            seccion[i].classList.add('animado');

        }
        else {

            seccion[i].classList.remove('aparece');
            seccion[i].classList.remove('animado');

        }

    }

});