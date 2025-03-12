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
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
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

    /*----------------desplegable de programas -----------------*/

    let spanProgram = document.querySelectorAll('.programas-wraper');
    let spanProgramText = document.querySelectorAll('.programas-descript');

    spanProgram.forEach((program, index ) => {
        program.addEventListener('click', (event) => {
            event.stopPropagation();
            const isVisible = spanProgramText[index].style.display === 'block';
            spanProgramText[index].style.display = isVisible ? 'none' : 'block';;
            spanProgramText[index].style.transition = 'all 1s';
        
        });
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