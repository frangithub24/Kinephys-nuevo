    // const menuIcon = document.querySelector('.menu-icon');
    // const navList = document.querySelector('.nav-list');


    

    // menuIcon.addEventListener('click', function () {
    //     navList.classList.toggle('block');
    // });

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

//selecciono los elementos del slider//
    const slider = document.querySelector(".heroe-slider ul");
    const slides = document.querySelectorAll(".heroe-slider li");
    /*const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");*/

    let currentIndex = 0;
    const totalSlides = slides.length;

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

    //Configurar el slide para que avance automáticamente 
    let autoSlide = startAutoSlide(); //iniciar automaticamente 
    //  Detener el auto-slide al hacer hover sobre el slider
    const sliderContainer = document.querySelector(".heroe-slider");
    
     sliderContainer.addEventListener('mouseenter', () => {
         clearInterval(autoSlide); // Detener cuando el usuario pone el mouse sobre el slider
     });
     sliderContainer.addEventListener('mouseleave', () => {
        autoSlide = startAutoSlide(); // Reiniciar el autoslide cuando el usuario quite el mouse 
    });

    // Obtener el modal y el botón de cerrar
    const servicioItems = document.querySelectorAll(".servicio-item");
    const modalTitulo = document.querySelector(".modal-titulo");
    const modal = document.getElementById("modal");
    const modalTexto = document.querySelector(".modal-texto");
    const modalCerrar = document.querySelector(".modal-cerrar");

    
    
    servicioItems.forEach(servicio => {
        servicio.addEventListener("click", () => {
            const descripcion = servicio.getAttribute("data-descripcion");
            modalTexto.textContent = descripcion;

        modal.classList.add("show"); // Agrega la clase 'show' para mostrar el modal
    });
    });
    modalCerrar.addEventListener("click", ()=>{
        modal.classList.remove("show"); // Elimina la clase 'show' al cerrar el modal

        });
});

