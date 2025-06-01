
function createFireSparks(x, y, count = 35) {
  const container = document.getElementById("fire-container");
  for (let i = 0; i < count; i++) {
    const fire = document.createElement("div");
    fire.classList.add("fire");

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 100 + 30;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    fire.style.left = `${x}px`;
    fire.style.top = `${y}px`;
    fire.style.setProperty("--x", `${dx}px`);
    fire.style.setProperty("--y", `${dy}px`);

    container.appendChild(fire);
    setTimeout(() => fire.remove(), 1200);
  }
}

// Fire sparks when h1 loads
window.addEventListener("load", () => {
  const h1 = document.querySelector("h1");
  const rect = h1.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  createFireSparks(centerX, centerY);
});

