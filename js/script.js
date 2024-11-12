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

        console.log("Desplazamiento a Quienes Somos");

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
            block: "start",
         
        });

        navMobile.classList.remove("open"); // Cierra el menú hamburguesa
        hamburgerButton.style.display = 'block'; // Vuelve a mostrar el botón hamburguesa
        backButton.style.display = 'none'; // Oculta el botón de cerrar
    });
    
    //Función para deslizar a la sección nuestros horarios
    const horariosLink = document.querySelector("#horarios-contacto-link");
    const horariosSection = document.querySelector("#horarios-contacto");

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

//selecciono los elementos del slider//
    const slider = document.querySelector(".heroe-slider ul");
    const slides = document.querySelectorAll(".heroe-slider li");
    /*const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");*/
    const totalSlides = slides.length;
    let currentIndex = 0;
    //const images = document.querySelectorAll(".heroe-slider img");
    //const totalImages = images.length;
    //const sliderContainer = document.querySelector("heroe-slider");
    // Clonamos el primer slide y lo añadimos al final para la continuidad visual
    const firstSlideClone = slides[0].cloneNode(true);
    slider.appendChild(firstSlideClone);
   
    // Función para actualizar la posición del slider
    function updateSliderPosition() {
        currentIndex++;
        slider.style.transition = "transform 1s ease-in-out";
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;


        if (currentIndex === totalSlides) {
            setTimeout(() => {
                slider.style.transition = "none";
                slider.style.transform = "translateX(0)";
                currentIndex = 0;
            }, 1000);
        }
    }
    setInterval(updateSliderPosition, 4000);

            // 1. Definición del objeto con los servicios
const servicios = {
    "Kinesiología traumatológica y deportiva": {
        texto: "Su objetivo es optimizar la función de los pacientes con patologías musculoesqueléticas, utilizando como medio principal la prescripción de ejercicios. <br>Este espacio está destinado a las siguientes patologías más prevalentes de consultorio externo:",
        lesiones: [
            "Cervicalgias y cervicobraquialgias",
            "Dorsalgias",
            "Dolor lumbar crónico y lumbociatalgias",
            "Fracturas de miembro superior (hombro, codo, muñeca)",
            "Lesiones del manguito rotador",
            "Inestabilidad de hombro",
            "Tendinopatía bicipital",
            "Epicondilalgia",
            "Tenosinovitis de Quervain",
            "Fracturas de miembro inferior",
            "Lesiones de rodilla (Ligamento cruzado anterior y meniscos, esguince de rodilla)",
            "Esguince de tobillo",
            "Tendinopatía rotuliana",
            "Fascitis plantar",
            "Síndrome femoropatelar",
            "Fracturas por estrés",
            "Contusiones musculares"
        ]
    },
    "Rehabilitación Respiratoria": {
        texto: "La rehabilitacion respiratoria es un tratamiento dirigido a personas con enfermedades respiratorias con el objetivo de reducir su sintomatología (principalmente disnea), mejorar y mantener el máximo grado de independencia en las actividades diarias y disminuir sus exacerbación, optimizando así su calidad de vida. <br><br>Está destinado a pacientes que posean, entre otras, las siguientes patologías:",
        lesiones: [
            "Enfermedad Pulmonar Obstructiva Crónica (EPOC)", 
            "Fibrosis pulmonar", 
            "Cirugía pulmonar", 
            "Enfermedades neuromusculares"
        ]
    },
    "Osteopatía": {
        texto: "La osteopatia es un enfoque holístico, que considera al cuerpo como a una unidad en la que todas sus estructuras están interconectadas y se influyen entre sí, buscando así el verdadero origen de los síntomas. <br><br>El objetivo de esta disciplina es restaurar el equilibrio del cuerpo a través de técnicas manuales para mejorar su función y promover la autocuración.",
        lesiones: [
        ]
    },
    "Actividad física en el adulto mayor": {
        texto: "Es un espacio de atención en donde pacientes mayores van a poder mejorar su acondicionamiento físico general a través del aumento de la capacidad aeróbica, el fortalecimiento y la flexibilidad.<br><br> Su objetivo es que el adulto mayor tenga un envejecimiento saludable, fomentando la prevención de enfermedades y la independencia en las actividades de la vida diaria. <br><br>Está destinado a pacientes mayores a 60 años, sedentarios, con factores de riesgo cardiovasculares (hipertensión, dislipemia y sobrepeso) y patologías como diabetes y artrosis, entre otras.",
        lesiones: [
        ]
    },
    "Microelectrólisis percutánea": {
        texto: "La microelectrólisis percutánea consiste en la aplicación de una corriente galvánica en el orden de microamperios, en forma percutánea (con una aguja de acupuntura) con el fin de generar, entre otros efectos, analgesia, regeneración del tejido y normalización del pH local. Esta técnica es empleada en lesiones agudas, subagudas y crónicas tales como:",
        lesiones: [    
            "Tendinopatía rotuliana y aquiliana", 
            "Síndrome del supraespinoso", 
            "Lesiones del Manguito rotador", 
            "Codo de tenista (epicondilitis)", 
            "Codo de golfista (epitrocleitis)", 
            "Pubalgias", 
            "Fascitis plantar", 
            "Desgarros", 
            "Puntos gatillo"
        ]    
    }
};
    // Obtener el modal y el botón de cerrar
    const servicioItems = document.querySelectorAll(".servicio-item");
    const modalTitulo = document.querySelector(".modal-titulo");
    const modal = document.getElementById("modal");
    const modalTexto = document.querySelector(".modal-texto");
    const modalCerrar = document.querySelector(".modal-cerrar");

    servicioItems.forEach(item => {
        item.addEventListener('click', () => {
            const titulo = item.getAttribute('data-titulo');
            const servicio = servicios[titulo];
    
            modalTitulo.textContent = titulo;
            modalTexto.innerHTML = `
                <p>${servicio.texto}</p>
                <div class="lesiones-lista">
                    <div class="lesiones-columna">
                        
                        <ul>
                            ${servicio.lesiones.map((lesion) => `<li>${lesion}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
            modal.style.display = 'block'; // Muestra el modal
        });
    });

/*    servicioItems.forEach(servicio => {
        servicio.addEventListener("click", () => {
            const descripcion = servicio.getAttribute("data-descripcion");
            modalTexto.textContent = descripcion;
        modal.classList.add("show"); // Agrega la clase 'show' para mostrar el modal
            const titulo = servicio.getAttribute("data-titulo");
            modalTexto.innerHTML = descripcion;
            modalTitulo.textContent = titulo;
            
        modal.style.display = "flex"; // Agrega la clase 'show' para mostrar el modal
    });
    });*/
    modalCerrar.addEventListener("click", ()=>{
        modal.classList.remove("show"); // Elimina la clase 'show' al cerrar el modal
        modal.style.display="none"; // Elimina la clase 'show' al cerrar el modal

        });
   


});

        