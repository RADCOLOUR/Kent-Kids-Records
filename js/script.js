document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  setTimeout(() => {
    heroContent.style.opacity = 1;
  }, 100);
});

document.addEventListener("DOMContentLoaded", () => {

  const heroContent = document.querySelector(".hero-content");
  heroContent.style.opacity = 0;

  const warningOverlay = document.getElementById("warning-overlay");
  const proceedButton = document.getElementById("proceed-button");

  proceedButton.addEventListener("click", () => {

    warningOverlay.style.display = "none";

    setTimeout(() => {
      heroContent.style.transition = "opacity 1.5s ease-in-out";
      heroContent.style.opacity = 1;
    }, 100);
  });
});
