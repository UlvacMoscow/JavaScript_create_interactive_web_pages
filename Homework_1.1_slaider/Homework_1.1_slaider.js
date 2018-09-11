const collections = ['https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png',
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png',
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png',
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png',
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png'];

const image = document.getElementById('slider');
let step = 0;


/*function next() {
  if (step === collections.length)  {
    step = 0;
  }
    image.src = collections[step];
    step += 1;
};


setInterval(next(), 5000);*/

setInterval(() => {
	slider.src = collections[step];
		if (step < collections.length) step += 1;
		if (step === collections.length) step = 0;
}, 5000);

/*let index = 0;
setInterval(function() {
  if(index == images.length) index = 0;
document.getElementById('slider').src = images[index++];}, 5000);*/


//next_image(collections[0]);
