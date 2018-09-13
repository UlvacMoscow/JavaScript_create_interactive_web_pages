/*onst prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");


prevPhoto.onclick =

function prevPhoto()    {
    var gallery = document.getElementById("article-gallery");
    gallery.style.prevPhoto = -400 + "px";
}

function nextPhoto()    {

}*/
const current = document.getElementById('currentPhoto');
const collection = ["i/breuer-building.jpg",
                    "i/guggenheim-museum.jpg",
                    "i/headquarters.jpg",
                    "i/IAC.jpg",
                    "i/new-museum.jpg"];

let image = 0;

function showPhoto() {
  /*if (this.id === 'prevPhoto')  {
    if (image === 0) {
		image = collection.length - 1;
  	} else {
  		image--;
  	}
    current.src = collection[image];
  }
  if (this.id === 'nextPhoto')  {
    if (image === 0) {
		image = collection.length - 1;
	} else {
		image++;
	}
    current.src = collection[image];
  }*/
  console.log(this.id);
};


for (const buttonId of ['prevPhoto', 'nextPhoto'])  {
  const button = document.getElementById('buttonId');
  button.onclick = showPhoto;
};
