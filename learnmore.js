 for (let i = 0; i < 50; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = `${Math.random() * 100}vw`;
      sparkle.style.animationDuration = `${5 + Math.random() * 10}s`;
      sparkle.style.opacity = Math.random();
      sparkle.style.width = sparkle.style.height = `${4 + Math.random() * 6}px`;
      document.body.appendChild(sparkle);
    }

    function goBack() {
      window.history.back();
    }
    
function showSparks(x, y) {
  const container = document.getElementById('spark-container');
  for (let i = 0; i < 20; i++) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    const angle = Math.random() * 360;
    const distance = Math.random() * 80 + 20;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    spark.style.setProperty('--x', `${dx}px`);
    spark.style.setProperty('--y', `${dy}px`);
    container.appendChild(spark);
    setTimeout(() => spark.remove(), 1000);
  }
}

// Learn More button (optional use elsewhere)
// You can call showSparks(x, y) where needed

// Go Back button effect
document.getElementById("goBackBtn").addEventListener("click", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  showSparks(x, y);
});

