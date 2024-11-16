function toggleReadMore(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const moreText = document.querySelector(".more-text");
    const readMoreLink = event.target.closest("a"); // Use closest to ensure we get the link element
    const icon = readMoreLink.querySelector("i"); // Get the icon element
  
    if (moreText.style.display === "none" || !moreText.style.display) {
      moreText.style.display = "block"; // Show the extra text
      readMoreLink.innerHTML = 'Less <i class="fa-solid fa-angle-up"></i>'; // Change link text and icon
    } else {
      moreText.style.display = "none"; // Hide the extra text
      readMoreLink.innerHTML = 'More <i class="fa-solid fa-angle-down"></i>'; // Change link text and icon
    }
  }
  