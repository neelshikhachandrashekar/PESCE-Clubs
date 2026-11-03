// Welcome message
console.log("Welcome to PESCE Clubs!");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// Club Search Functionality

const searchInput = document.getElementById("clubSearch");
const searchButton = document.getElementById("searchBtn");
const clubCards = document.querySelectorAll(".club-card");
const noResults = document.getElementById("noResults");

function searchClubs() {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    clubCards.forEach(card => {
        const clubName = card.querySelector("h3").textContent.toLowerCase();
        const clubDescription = card.querySelector("p").textContent.toLowerCase();

        if (
            clubName.includes(searchText) ||
            clubDescription.includes(searchText)
        ) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.style.display = visibleCount === 0 ? "block" : "none";
}

searchButton.addEventListener("click", searchClubs);

searchInput.addEventListener("input", searchClubs);