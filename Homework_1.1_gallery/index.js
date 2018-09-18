const nextSlide = document.getElementById('nextPhoto');
const prevSlide = document.getElementById('prevPhoto');
const currentSlide = document.getElementById('currentPhoto');

const collectionSlide = ["i/breuer-building.jpg",
                    "i/guggenheim-museum.jpg",
                    "i/headquarters.jpg",
                    "i/IAC.jpg",
                    "i/new-museum.jpg"];

let slide = 0;

function showNextSlide() {
  slide += 1;
  if (slide == collectionSlide.length)  { slide = 0 };
  currentSlide.src = collectionSlide[slide];
};

function showPrevSlide()  {
  slide -= 1;
  if (slide == -1)  {slide = collectionSlide.length - 1};
  currentSlide.src = collectionSlide[slide];
}

nextSlide.onclick = showNextSlide;
prevSlide.onclick = showPrevSlide;
