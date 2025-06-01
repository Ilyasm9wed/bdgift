document.querySelector('.primary-btn').addEventListener('click', () => {
  alert("💖 Happy Birthday, my love! This world is brighter with you in it 💫");
});
function showMessage(message) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");
  popupMessage.textContent = message;
  popup.style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function finalSurprise() {
  showMessage("I love you more than words can say. Happy Birthday, my Queen! 👑💖");
}
function showSurprise(message) {
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popup-text');
  popupText.textContent = message;
  popup.style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
 const heartContainer = document.getElementById('heartContainer');

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 4 + Math.random() * 3 + 's';
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }

  setInterval(createHeart, 400);