    // const menuIcon = document.querySelector('.menu-icon');
    // const navList = document.querySelector('.nav-list');


    

    // menuIcon.addEventListener('click', function () {
    //     navList.classList.toggle('block');
    // });

// DOMContentLoaded permite que se cargue todo al iniciar la pagina
document.addEventListener('DOMContentLoaded', () => {

    //Guardo en las variables del botón hamburguesa y el listado a mostrado
    const hamburgerButton = document.querySelector('.menu-icon'); 
    const navMobile = document.querySelector('.nav-mobile'); 
    const backButton = document.querySelector(".menu-back");
    

    //Función para abrir y cerrar el menú modificando el estilo 
    hamburgerButton.addEventListener('click', () => {

        if(navMobile.style.display ==='block') {
            navMobile.style.display = 'none';
            backButton.style.display = 'none';
        } else {
            navMobile.style.display = 'block';
            backButton.style.display = 'block';
            hamburgerButton.style.display ='none';
        }
    });

    //Función para volver al menú hamburguesa cuando toco la x
    backButton.addEventListener("click", () => {
        navMobile.style.display = 'none';
        hamburgerButton.style.display = 'block';
        backButton.style.display = 'none';
    })
});