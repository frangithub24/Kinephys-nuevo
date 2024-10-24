// DOMContentLoaded permite que se cargue todo al iniciar la pagina
document.addEventListener('DOMContentLoaded', () => {

    //Guardo en las variables del botón hamburguesa y el listado a mostrado
    const hamburgerButton = document.querySelector('#menu-toggle'); 
    const navMobile = document.querySelector('#nav-mobile'); 
    const backButton = document.querySelector('.menu-back');

    //Función para abrir y cerrar el menú modificando el estilo 
    hamburgerButton.addEventListener('click', () => {
        navMobile.classList.add("open");
        hamburgerButton.style.display = "none";
        backButton.style.display = "block";
    });
    //Función para volver al menú hamburguesa cuando toco la x
    backButton.addEventListener("click", () => {
        navMobile.classList.remove("open");
        hamburgerButton.style.display = 'block';
        backButton.style.display = 'none';
    });

   //Función para deslizar a la sección quienes somos
    const quienesSomosLink = document.querySelector("#quienes-somos-link");
    const quienesSomosSection = document.querySelector("#quienes-somos");

    quienesSomosLink.addEventListener("click", (e) => {
        e.preventDefault(); //evita el comportamiento predeterminado del link
        quienesSomosSection.scrollIntoView({
            behavior: 'smooth', // Desplazamiento suave 
            block: "start"         
        });
        
        navMobile.classList.remove("open"); // Cierra el menú hamburguesa
        hamburgerButton.style.display = 'block'; // Vuelve a mostrar el botón hamburguesa
        backButton.style.display = 'none'; // Oculta el botón de cerrar
    });

    //Función para deslizar a la sección nuestros servicios
    const nuestrosServiciosLink = document.querySelector("#nuestros-servicios-link");
    const nuestrosServiciosSection = document.querySelector("#nuestros-servicios");

    nuestrosServiciosLink.addEventListener("click", (e) => {
        e.preventDefault(); //evita el comportamiento predeterminado del link
        nuestrosServiciosSection.scrollIntoView({
            behavior: 'smooth', // Desplazamiento suave 
            block: "start"         
        });

        navMobile.classList.remove("open"); // Cierra el menú hamburguesa
        hamburgerButton.style.display = 'block'; // Vuelve a mostrar el botón hamburguesa
        backButton.style.display = 'none'; // Oculta el botón de cerrar
    });

    //Función para deslizar a la sección coberturas
    const coberturasLink = document.querySelector("#coberturas-link");
    const coberturasSection = document.querySelector("#coberturas");

    coberturasLink.addEventListener("click", (e) => {
        e.preventDefault(); //evita el comportamiento predeterminado del link
        
        coberturasSection.scrollIntoView({
            behavior: 'smooth', // Desplazamiento suave 
            block: "start"         
        });

        navMobile.classList.remove("open"); // Cierra el menú hamburguesa
        hamburgerButton.style.display = 'block'; // Vuelve a mostrar el botón hamburguesa
        backButton.style.display = 'none'; // Oculta el botón de cerrar
    });
    
    //Función para deslizar a la sección nuestros horarios
    const horariosLink = document.querySelector("#nuestros-horarios-link");
    const horariosSection = document.querySelector("#nuestros-horarios");

    horariosLink.addEventListener("click", (e) => {
        e.preventDefault(); //evita el comportamiento predeterminado del link
        
        horariosSection.scrollIntoView({
            behavior: 'smooth', // Desplazamiento suave 
            block: "start"         
        });

        navMobile.classList.remove("open"); // Cierra el menú hamburguesa
        hamburgerButton.style.display = 'block'; // Vuelve a mostrar el botón hamburguesa
        backButton.style.display = 'none'; // Oculta el botón de cerrar
    });

        //Función para deslizar a la sección contacto
        const contactoLink = document.querySelector("#contacto-link");
        const contactoSection = document.querySelector("#contacto");
    
        contactoLink.addEventListener("click", (e) => {
            e.preventDefault(); //evita el comportamiento predeterminado del link
            
            contactoSection.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave 
                block: "start"         
        });
    });
//selecciono los elementos del slider//
    const slider = document.querySelector(".heroe-slider ul");
    const slides = document.querySelectorAll(".heroe-slider li");
    /*const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");*/

    let currentIndex = 0;
    const totalSlides = slides.length;
    const sliderContainer = document.querySelector("heroe-slider");

    // Función para actualizar la posición del slider
    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    //comenzar el auto desplazamiento
    function startAutoSlide() {
        return setInterval(() => {
             if (currentIndex < totalSlides - 1 ) {
                currentIndex ++;
            } else {
                currentIndex = 0; //volver al inicio cuando se llega al final//
             }    
            updateSliderPosition();
        },3000); //cambia la imagen cada 3 segundos
    }

    //Funciones para mover el slider manualmente
 
    function nextSlide() {
        if(currentIndex < totalSlides -1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    }
    function prevSlide(){
        if(currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1;
        }
        updateSliderPosition();
    }
    //Detectar el tamaño de pantalla y ajustar el comportamiento
    let autoSlide;
    function adjustSliderForScreenSize(){
        if(window.innerWidth < 768) {
            //En móviles, activar auto-slide
            autoSlide = startAutoSlide();
            //Detenerlo al hacer hover sobre el slider
            sliderContainer.addEventListener('mouseenter', () => {
                clearInterval(autoSlide); // Detener cuando el usuario pone el mouse sobre el slider
            });
            sliderContainer.addEventListener('mouseleave', () => {
               autoSlide = startAutoSlide(); // Reiniciar el autoslide cuando el usuario quite el mouse 
           });
        } else { 
            //En escritorio, desactivar auto-slide y habilitar navegación manual
            clearInterval(autoSlide);//Detener el atuo-slide si estaba activado
            //Habilitar botones de navegación manual
            const prevButton=document.querySelector(".prev");
            const nextButton=document.querySelector(".next");

            prevButton.addEventListener("click", prevSlide);
            nextButton.addEventListener("click", nextSlide);
        }
    }
    
    // Detectar cambios de tamaño de la pantalla (en caso de que se redimensione)
window.addEventListener('resize', adjustSliderForScreenSize);

// Ejecutar ajuste inicial cuando se carga la página
adjustSliderForScreenSize();
    



    // Obtener el modal y el botón de cerrar
    const servicioItems = document.querySelectorAll(".servicio-item");
    const modalTitulo = document.querySelector(".modal-titulo");
    const modal = document.getElementById("modal");
    const modalTexto = document.querySelector(".modal-texto");
    const modalCerrar = document.querySelector(".modal-cerrar");
    
    
    servicioItems.forEach(servicio => {
        servicio.addEventListener("click", () => {
            const descripcion = servicio.getAttribute("data-descripcion");
            const titulo = servicio.getAttribute("data-titulo");
            modalTexto.innerHTML = descripcion;
            modalTitulo.textContent = titulo;
            
        modal.style.display = "flex"; // Agrega la clase 'show' para mostrar el modal
    });
    });
    modalCerrar.addEventListener("click", ()=>{
        modal.style.display="none"; // Elimina la clase 'show' al cerrar el modal

        });
});

