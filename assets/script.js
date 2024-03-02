/* Information de toute les diapos ici */

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

/* ca aide pour suivre  l'index  de la diapo */

let currentSlideIndex = 0; 

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');


 /* ici ca nous aide a mettre a jour la diapo */

arrowLeft.addEventListener('click', function() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    updateCarousel();
});

arrowRight.addEventListener('click', function() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    updateCarousel();
});

/* créer les points du carousel (le CSS a déjà été fait) */ 
const dotsContainer = document.querySelector('.dots');

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) {
        dot.classList.add('dot_selected');
    }
    dotsContainer.appendChild(dot);
}



/* ici c'est la mise à jour du carousel */

function updateCarouselDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentSlideIndex);
    });
}

/* la derniere fonction met a jour l'image le texte  et les points du carousel */

function updateCarousel() {
    const bannerImage = document.querySelector('.banner-img');
    bannerImage.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;

    const taglineElement = document.querySelector('#banner p');
    taglineElement.innerHTML = slides[currentSlideIndex].tagLine;

    updateCarouselDots();
}
