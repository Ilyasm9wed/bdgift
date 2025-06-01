// Animation lors du chargement de la page
window.addEventListener('load', () => {
  const animatedItems = document.querySelectorAll('.animate');
  animatedItems.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('show');
    }, i * 200); // Décalage pour effet "cascade"
  });
});

// Interactivité sur le bouton
document.getElementById('learnMoreBtn').addEventListener('click', () => {
  alert("Merci de célébrer l'amour ! ❤️");
});

document.querySelectorAll('.navbar li').forEach(li => {
  li.addEventListener('click', (e) => {
    const sparkle = document.createElement('span');
    sparkle.textContent = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.left = `${e.offsetX}px`;
    sparkle.style.top = `${e.offsetY}px`;
    sparkle.style.animation = 'fade 1s forwards';
    li.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  });
});
