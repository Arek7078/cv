const education = document.querySelector(".education");
const leftContainer = document.querySelector(".left-container");
const rightContainer = document.querySelector(".right-container");

export function lessThank400px() {
  function moveEducation() {
    if (window.innerWidth < 400) {
      leftContainer.appendChild(education);
    } else {
      rightContainer.appendChild(education);
    }
  }
  window.addEventListener("resize", moveEducation);
  moveEducation(); 
}
