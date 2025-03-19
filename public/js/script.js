const carousel = document.querySelector('.carousel');
const imagesCarrousel = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll(".experiencias-item");
const overlay = document.querySelector('.overlay');

const xButton = document.querySelectorAll('x-button');

let index = 0;
const totalImages = imagesCarrousel.length;

function showSlide(newIndex) {
    if (newIndex < 0) {
        index = totalImages - 1;
    } else if (newIndex >= totalImages) {
        index = 0;
    } else {
        index = newIndex;
    }

    carousel.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

// Cambio automático cada 5 segundos
setInterval(() => showSlide(index + 1), 5000);




images.forEach(image => {
    image.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log("click");
        images.forEach (image => image.classList.remove('zoomed')); 
        image.classList.toggle('zoomed')
        overlay.style.display = 'block';
        xButton.forEach(button => button.style.display = 'block');
        
    })

    document.addEventListener('click', () => {
        image.classList.remove('zoomed');
        overlay.style.display = 'none';
        xButton.forEach(button => button.style.display = 'none');
    });
});





/*--------------- toogle navbar ---------------*/


let menuIcon = document.getElementById('menu-icon');
let navList = document.getElementById('navList');

menuIcon.addEventListener('click', () => {
    console.log('click');
    
    navList.classList.toggle('active');
});

document.querySelectorAll('.navListItems a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

    /*--------------- clase active de navbar y scroll a section ---------------*/

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 120;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            console.log(`Section: ${id}, Offset: ${offset}, Height: ${height}`); // Verifica los valores de cada sección
    
            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    if(id) { 
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                    }
                    
                });
            }
        });
    };

    /*----------------desplegable de opiniones -----------------*/

    let opinion = document.querySelector('.opiniones-text-desplegable');
    let opinionSpan = document.querySelector('.opiniones-text');

    opinionSpan.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpinionVisible = opinion.style.display === 'block';
        opinion.style.display = isOpinionVisible ? 'none' : 'block';
        opinion.style.transition = 'all 1s';
    });

    opinion.addEventListener('click', (event) => {
        event.stopPropagation();
        opinion.style.display = 'none';
    });


    /*----------------autocompletado de msj de textarea------------*/

    function setMessage(message) {

        window.location.href = '#contacto';

        setTimeout(() => {
            const textarea = document.querySelector('#contacto textarea');
            if (textarea) {
                textarea.value = message;
            }
        }, 100);
    } 
    
    /*------------------Manejo del formulario-----------------*/

    const showError = (element, msj) => {  
        element.textContent = msj;
        element.style.display = 'block';
        console.log('click');
        
    
        const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
        inputs.forEach(input => {
            input.style.boxShadow = '0 0 1rem var(--error-color)';
            input.addEventListener('focus', () => {
                unshowError(element);
                input.style.boxShadow = '0 0 1rem var(--scrollbarTrack-color)';
        });
        });
    }
    const unshowError = (element, msj) => { 
        element.textContent = '';
        element.style.display = 'none';
    
        const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
        inputs.forEach(input => {
            input.style.boxShadow = 'none';
        });
    }

    const formSendCart = document.querySelector('.form-ok');

    const submitFunction = (event) => {
        console.log('click');
        if(!validationForm()) {
            event.preventDefault();
            return(
                formSendCart.style.display = 'block',
                formSendCart.style.transition = 'all 1s',
                formSendCart.style.opacity = 1,
                formSendCart.style.zIndex = 1500,
                formSendCart.style.position = 'fixed'
            )}
    }
    
    document.getElementById('form').addEventListener('submit', submitFunction) 
    
    function validationForm(){
        const textAreas = document.querySelectorAll('input[type="text"]');
        let correctValidation = true;
    
        textAreas.forEach(area => {
            let errorArea = document.getElementById('error' + area.id.charAt(0).toUpperCase() + area.id.slice(1)) 
            if (area.value.length == ''){
                showError(errorArea, 'Decinos cual es tu nombre!')
                correctValidation = false
            }else if(area.value.length < 3){
                showError(errorArea, 'Este campo debe tener al menos 3 caracteres')
                correctValidation = false
            } else {
                unshowError(errorArea)
            }
        });
    
        const email = document.getElementById('email');
        let errorEmail = document.getElementById('errorEmail');
    
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ 
            unshowError(errorEmail)
        } else {
            showError(errorEmail, 'Debes ingresar un formato de mail valido')
        }

        const msjArea = document.getElementById('mensaje');
        let errorMsj = document.getElementById('errorMensaje');

        if(msjArea.value.length ==''){
            showError(errorMsj, 'Contanos porque te queres contactar con Lunaticos de viaje!' )
            correctValidation = false;      
        } else {
            unshowError(errorMsj)
        }

        return correctValidation;
    }

    
    /*---------------Boton de whatsapp ---------------*/

    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            document.getElementById("whatsapp-button").style.display = "block";
        }, 10000); // 10000 milisegundos = 15 segundos
    })