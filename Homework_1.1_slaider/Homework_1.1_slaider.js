const collections = ['https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png',
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png',
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png',
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png',
'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png'];

const image = document.getElementById('slider');
let step = 0;


setInterval(() => {
	image.src = collections[step];
		if (step < collections.length) step += 1;
		if (step === collections.length) step = 0;
}, 5000);
