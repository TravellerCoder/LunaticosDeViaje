const carousel = document.querySelector('.carousel');
const imagesCarrousel = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll(".experiencias-item");
const overlay = document.querySelector('.overlay');
const spanProgram = document.querySelector('.programas-wraper');
const spanProgramText = document.querySelector('.programas-descript');
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
        xButton.style.display = 'block';
        
    })

    document.addEventListener('click', () => {
        image.classList.remove('zoomed');
        overlay.style.display = 'none';
        xButton.style.display = 'none';
    });
});


spanProgram.addEventListener('click', (event) => {
    console.log('click');
    console.log(spanProgramText);
    event.stopPropagation();
    spanProgramText.style.display = 'block';

});

spanProgram.addEventListener('click', (event) => {
    event.stopPropagation();
    spanProgramText.style.display = 'none';
});


/*--------------- toogle navbar ---------------*/


let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navBar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}


    /*--------------- remover el toggle del icon y navbar cuando hace click en el navbar link ---------------*/

    navLinks.forEach(link => {
        link.onclick = () => {
            menuIcon.classList.remove('bx-x');
            navBar.classList.remove('active');
        }
    });

