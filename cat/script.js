// Fetching from cat API
async function getCat() {
  try {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    const response = await fetch(url);
    const catData = await response.json();
    updateUi(catData);
  } catch (error) {
    console.log(error, "error");
  }
}
getCat();

// Select the container where the cat cards will be appended
const catContainer = document.querySelector(".catContainer");

const updateUi = (catData) => {
  // Ensure the catContainer is empty before adding new elements
  catContainer.innerHTML = "";

  for (let cat of catData) {
    const catImage = cat.url;
    const catName = cat.id;
    const catHeight = cat.height;
    const catWidth = cat.width;
    const cardBody = document.createElement("div");

    cardBody.classList.add("cat-card");

    cardBody.innerHTML = `
      <img src="${catImage}" alt="Cat Image" />
      <div class="cat-card-content">
        <p class="card-text">Meet Cat ${catName}, a cat with a height of ${catHeight} pixels and a width of ${catWidth} pixels. You can catch a glimpse of this marvelous cat <a href="${catImage}" target="_blank">here</a>.</p>
      </div>
    `;

    catContainer.appendChild(cardBody);
  }
};
