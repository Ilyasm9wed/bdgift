const images = ['pic31.jpg', 'pic30.jpg', 'pic33.jpg','pic32.jpg','pic28.jpg','pic29.jpg','pic5.jpg','pic24.jpg','pic21.jpg','pic7.jpg']; // Make sure to add your images
let index = 0;

function showImage(i) {
  const img = document.getElementById('carousel-img');
  img.src = images[i];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

window.onload = () => {
  showImage(index);
};


