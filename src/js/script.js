function toggleReadMore(event) {
  event.preventDefault();

  const readMoreLink = event.target.closest("a");
  const description = readMoreLink.closest(".description") || readMoreLink.closest(".maknae-description");
  const moreText = description.querySelector(".more-text");
  const icon = readMoreLink.querySelector("i");

  if (moreText.style.display === "none" || !moreText.style.display) {
    moreText.style.display = "block";
    readMoreLink.innerHTML = 'Less <i class="fa-solid fa-angle-up"></i>';
  } else {
    moreText.style.display = "none";
    readMoreLink.innerHTML = 'More <i class="fa-solid fa-angle-down"></i>';
  }
}


window.onload = () => {
  document.querySelectorAll(".card-container").forEach((parent) => {
    parent.querySelectorAll(".card").forEach((container) => {
      container.addEventListener("mouseover", () => {
        parent.classList.add("children-focused");
      });
  
      container.addEventListener("mouseleave", () => {
        parent.classList.remove("children-focused");
      });
    });
  });
};
