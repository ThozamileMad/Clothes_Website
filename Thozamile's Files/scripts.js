const searchPlaceholderButton = document.querySelector("#search-but");
const searchForm = document.querySelector("#search-form");

function retractElement() {
  searchPlaceholderButton.style.transform = "scaleX(0)";

  setTimeout(() => {
    // Change Placeholder
    searchPlaceholderButton.style.display = "none";

    // Change Replcacement
    searchForm.style.display  = "block";
    searchForm.style.transform = "scaleX(1)";
  }, 500);
} 


searchPlaceholderButton.onclick = retractElement;
