function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
// script.js
document.querySelectorAll(".navbar ul li a").forEach(link => {
  link.addEventListener("click", () => {
    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
    audio.play();
  });
});
