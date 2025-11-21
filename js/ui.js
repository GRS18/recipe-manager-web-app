window.UI = {

    // ----- Modal Controls -----
    openModal(id) {
        document.getElementById(id).setAttribute("aria-hidden", "false");
    },

    closeModal(id) {
        document.getElementById(id).setAttribute("aria-hidden", "true");
    },

    // ----- Render Cards -----
    renderList(recipes) {
        const grid = document.getElementById("cardsGrid");
        const empty = document.getElementById("emptyState");

        // Always clear first
        grid.innerHTML = "";

        // If no recipes → show empty state
        if (recipes.length === 0) {
            empty.style.display = "flex";   // show block
            empty.hidden = false;
            return;
        }

        // Recipes exist → hide empty state
        empty.style.display = "none";
        empty.hidden = true;

        // Render cards
        grid.innerHTML = recipes.map(r => `
            <div class="card">
                <div class="card-media" style="background-image:url('${r.imageUrl || "https://via.placeholder.com/300"}');"></div>
                <div class="card-body">
                    <h3 class="card-title">${r.title}</h3>
                    <p class="card-desc">${r.description || ""}</p>
                    <div class="card-meta">
                        <div class="badges">
                            <span class="badge ${r.difficulty.toLowerCase()}">${r.difficulty}</span>
                        </div>
                        <button class="btn" onclick="UI.openDetail('${r.id}')">View</button>
                    </div>
                </div>
            </div>
        `).join("");
    },

openDetail(id) {
    const r = StorageAPI.getAll().find(x => x.id === id);

    const top = document.querySelector("#detailModal .detail-top");
    const scroll = document.querySelector("#detailModal .detail-scroll");
    const actions = document.querySelector("#detailModal .detail-actions");

    // TOP area (image + title)
    top.innerHTML = `
    <img src="${r.imageUrl || "https://via.placeholder.com/600"}" class="detail-image" />
    <h2 class="detail-title">${r.title}</h2>
`;


    // SCROLL area (Description, Ingredients, Steps)
   scroll.innerHTML = `
    <p><strong>Description:</strong> ${r.description}</p>
    <p><strong>Ingredients:</strong></p>
    <ul class="detail-list">
        ${r.ingredients.map(i => `<li>${i}</li>`).join("")}
    </ul>
    <p><strong>Steps:</strong></p>
    <ol class="detail-list">
        ${r.steps.map(s => `<li>${s}</li>`).join("")}
    </ol>
`;


    // RESET SCROLL POSITION
    scroll.scrollTop = 0;

    // ACTION buttons (Edit + Delete)
   actions.innerHTML = `
    <button class="btn primary" onclick="FormAPI.openEdit('${r.id}')">Edit</button>
    <button class="btn danger" onclick="App.confirmDelete('${r.id}')">Delete</button>
`;

    this.openModal("detailModal");
}
};

// Back-to-Top button (for main page scroll)
const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  // Only track main window scroll
  if (window.scrollY > 400) {
    backBtn.style.display = "flex";
  } else {
    backBtn.style.display = "none";
  }
});

backBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Close modal buttons
document.getElementById("detailClose").onclick = () => UI.closeModal("detailModal");
document.getElementById("formClose").onclick = () => UI.closeModal("formModal");
