window.FormAPI = {
    form: null,

    init() {
        this.form = document.getElementById("recipeForm");

        // Close modal buttons
        document.getElementById("formClose").onclick = () => this.close();
        document.getElementById("cancelBtn").onclick = () => this.close();

        // Add Recipe buttons
        const btnAdd = document.getElementById("btnAdd");
        const btnAddEmpty = document.getElementById("btnAddEmpty");
        if (btnAdd) btnAdd.onclick = () => this.openAdd();
        if (btnAddEmpty) btnAddEmpty.onclick = () => this.openAdd();

        // Form submit
        this.form.onsubmit = (e) => {
            e.preventDefault();
            this.save();
        };
    },

    openAdd() {
        this.resetForm();
        document.getElementById("formTitle").textContent = "Add Recipe";
        this.open();
    },

    openEdit(id) {
  // use getAll().find to locate recipe (safe even if StorageAPI.get doesn't exist)
  const all = typeof StorageAPI.getAll === "function" ? StorageAPI.getAll() : [];
  const r = all.find(x => x.id === id);
  if (!r) return;

  // Fill hidden id
  document.getElementById("recipeId").value = r.id;

  // --- IMAGE INPUT: DO NOT PRE-FILL FILE INPUT ---
  // File inputs cannot be programmatically pre-filled for security reasons.
  // Clear the input and (optionally) show a preview of the existing image.
  const imgInput = document.getElementById("image");
  if (imgInput) {
    imgInput.value = ""; // <-- safe: keep file input empty

    // OPTIONAL: if you want to show the current image to the user,
    // add an <img id="imagePreview"> to your form HTML and set its src here:
    const preview = document.getElementById("imagePreview");
    if (preview) {
      preview.src = r.image || r.imageUrl || "https://via.placeholder.com/150";
      preview.style.display = "block";
    }
  }

  // Fill other fields
  document.getElementById("title").value = r.title;
  document.getElementById("description").value = r.description;
  document.getElementById("ingredients").value = r.ingredients.join("\n");
  document.getElementById("steps").value = r.steps.join("\n");
  document.getElementById("prepTime").value = r.prepTime;
  document.getElementById("cookTime").value = r.cookTime;
  document.getElementById("difficultySelect").value = r.difficulty;

  document.getElementById("formTitle").textContent = "Edit Recipe";
  this.open();
},

    resetForm() {
        this.form.reset();
        document.getElementById("recipeId").value = "";
        const scroll = document.querySelector(".form-scroll");
        if (scroll) scroll.scrollTop = 0;
    },

    save() {
    const id = document.getElementById("recipeId").value;

    let old = null;
    if (id) {
        if (typeof StorageAPI.get === "function") {
            try { old = StorageAPI.get(id); } catch {}
        }
        if (!old && typeof StorageAPI.getAll === "function") {
            old = StorageAPI.getAll().find(x => x.id === id) || null;
        }
    }

    // ----- FIX IMAGE LOGIC -----
    let newImage = "";
    const imgInput = document.getElementById("image");

    if (imgInput && imgInput.files && imgInput.files.length > 0) {
        newImage = URL.createObjectURL(imgInput.files[0]);
    } else if (imgInput && imgInput.value.trim() !== "") {
        newImage = imgInput.value.trim();
    } else {
        newImage = old ? old.image || old.imageUrl : "";
    }

    const recipe = {
        id: id || Utils.uuid(),
        title: document.getElementById("title").value.trim(),
        description: document.getElementById("description").value.trim(),
        ingredients: document.getElementById("ingredients").value
            .split("\n").filter(x => x.trim() !== ""),
        steps: document.getElementById("steps").value
            .split("\n").filter(x => x.trim() !== ""),
        prepTime: Number(document.getElementById("prepTime").value),
        cookTime: Number(document.getElementById("cookTime").value),
        difficulty: document.getElementById("difficultySelect").value,
        image: newImage
    };

    if (id) StorageAPI.update(recipe);
    else StorageAPI.add(recipe);

    Utils.showToast(id ? "Recipe updated" : "Recipe added");
    this.close();
    App.render();
},

    open() {
        document.getElementById("formModal").setAttribute("aria-hidden", "false");
    },

    close() {
        document.getElementById("formModal").setAttribute("aria-hidden", "true");
    }
};

// Initialize
window.addEventListener("DOMContentLoaded", () => FormAPI.init());
