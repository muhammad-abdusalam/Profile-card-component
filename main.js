// ##Catch elements
const profileCard = document.querySelector("article.profile-card");
const statsNum = document.querySelectorAll(".stats li .num");

let arrayOfStats = Array.from(statsNum);

// ##Events
window.onload = function () {
  profileCard.classList.add("show");

  // Increase stats
  arrayOfStats.forEach((num) => increaseNum(num));
};

// ##Functions
function increaseNum(stats) {
  let started = false;
  let target = stats.dataset.goal;
  if (!started) {
    started = true;
    let counter = setInterval(() => {
      stats.innerHTML++;
      if (stats.innerHTML === target) {
        clearInterval(counter);
      }
    }, 2000 / target);
  }
}
