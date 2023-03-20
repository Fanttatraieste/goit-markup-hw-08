const portofolio = [
  {
    id: 1,
    title: "Technoduck",
    category: "Web-site",
    img: "images/portofolioImages/Technoduck.jpg",
    overlay: `Technoduck is a state-of-the-art coronavirus distribution
              platform. Companies use this platform for digital espionage and
              attacks on competitors secure servers.`,
  },
  {
    id: 2,
    title: "Poster New Orlean vs Golden Star",
    category: "Design",
    img: "images/portofolioImages/PosterNewOrlean.jpg",
    overlay: `I only know 25 letters of the alphabet. I don't know y.`,
  },
  {
    id: 3,
    title: "Seafood Restaurant",
    category: "Apps",
    img: "images/portofolioImages/Seafood.jpg",
    overlay: `I asked my dog what's two minus two. He said nothing.`,
  },
  {
    id: 4,
    title: "Project Prime",
    category: "Marketing",
    img: "images/portofolioImages/ProjectPrime.jpg",
    overlay: `Why don't eggs tell jokes? They'd crack each other up.`,
  },
  {
    id: 5,
    title: "Project Boxes",
    category: "Apps",
    img: "images/portofolioImages/ProjectBoxes.jpg",
    overlay: `I don't trust stairs. They're always up to something.`,
  },
  {
    id: 6,
    title: "Inspiration has no Borders",
    category: "Web-site",
    img: "images/portofolioImages/Inspiration.jpg",
    overlay: `Did you hear the rumor about butter? Well, I'm not going to spread it!`,
  },
  {
    id: 7,
    title: "Limited Edition",
    category: "Design",
    img: "images/portofolioImages/LimitedEdition.jpg",
    overlay: `What did one hat say to the other? Stay here! I'm going on ahead.`,
  },
  {
    id: 8,
    title: "Project LAB",
    category: "Marketing",
    img: "images/portofolioImages/ProjectLab.jpg",
    overlay: `Why did Billy get fired from the banana factory? He kept throwing away the bent ones.`,
  },
  {
    id: 9,
    title: "Growing Business",
    category: "Apps",
    img: "images/portofolioImages/GrowingBusiness.jpg",
    overlay: `Why are elevator jokes so classic and good? They work on many levels..`,
  },
];

const productsGrid = document.querySelector(".products-grid");

const filterBtns = document.querySelectorAll(".button-nav");

//load all items
window.addEventListener("DOMContentLoaded", function () {
  displayPortofolioItems(portofolio);
});

//filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (eventObj) {
    const category = eventObj.currentTarget.dataset.category;
    const portofolioCategory = portofolio.filter(function (portofolioItem) {
      if (portofolioItem.category === category) return portofolioItem;
    });
    if (category === "All") {
      displayPortofolioItems(portofolio);
    } else {
      displayPortofolioItems(portofolioCategory);
    }
  });
});

function displayPortofolioItems(portofolioItems) {
  let displayPortofolio = portofolioItems.map(function (item) {
    return `<li class="grid-item products-item">
          <img
            src=${item.img}
            alt=${item.title}
          />
          <div class="overlay">
            <p class="hidden-text">
              ${item.overlay}
            </p>
          </div>
          <h3 class="subtitle products-subtitle">${item.title}</h3>
          <p class="text products-text">${item.category}</p>
        </li>`;
  });
  displayPortofolio = displayPortofolio.join("");
  productsGrid.innerHTML = displayPortofolio;
}
