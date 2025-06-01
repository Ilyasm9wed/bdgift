 function showMessage() {
    document.getElementById('messageBox').style.display = 'block';
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement('div');
      heart.classList.add('floating-heart');
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = Math.random() * 100 + 600 + 'px';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    }
  }