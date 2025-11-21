// form.js — Handles Add/Edit Recipe form, validation, image input, and submitting recipes.

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
        // use getAll().find to locate recipe
        const all = typeof StorageAPI.getAll === "function" ? StorageAPI.getAll() : [];
        const r = all.find(x => x.id === id);
        if (!r) return;

        // Fill hidden id
        document.getElementById("recipeId").value = r.id;

        const imgInput = document.getElementById("image");
        if (imgInput) {
            imgInput.value = "";

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

        // ------------------- VALIDATION -------------------
        const fields = {
            title: document.getElementById("title").value.trim(),
            description: document.getElementById("description").value.trim(),
            ingredients: document.getElementById("ingredients").value.trim(),
            steps: document.getElementById("steps").value.trim(),
            prepTime: document.getElementById("prepTime").value.trim(),
            cookTime: document.getElementById("cookTime").value.trim(),
            difficulty: document.getElementById("difficultySelect").value.trim(),
        };

        let valid = true;

        const showError = (id, msg) => {
            const err = document.querySelector(`small[data-for="${id}"]`);
            if (err) err.textContent = msg;
        };

        // clear all previous messages
        document.querySelectorAll(".error").forEach(e => e.textContent = "");

        if (fields.title === "") {
            showError("title", "Title is required");
            valid = false;
        }
        if (fields.description.length < 10) {
            showError("description", "Description must be at least 10 characters");
            valid = false;
        }
        if (fields.ingredients === "") {
            showError("ingredients", "Add at least 1 ingredient");
            valid = false;
        }
        if (fields.steps === "") {
            showError("steps", "Add at least 1 cooking step");
            valid = false;
        }
        if (fields.prepTime === "" || Number(fields.prepTime) < 0) {
            showError("prepTime", "Prep time must be a positive number");
            valid = false;
        }
        if (fields.cookTime === "" || Number(fields.cookTime) < 0) {
            showError("cookTime", "Cook time must be a positive number");
            valid = false;
        }
        if (fields.difficulty === "") {
            showError("difficultySelect", "Select difficulty");
            valid = false;
        }

        // If ANY validation fails - STOP SAVE
        if (!valid) return;

        // ------------------- END VALIDATION -------------------

        let old = null;
        if (id) {
            if (typeof StorageAPI.get === "function") {
                try { old = StorageAPI.get(id); } catch {}
            }
            if (!old && typeof StorageAPI.getAll === "function") {
                old = StorageAPI.getAll().find(x => x.id === id) || null;
            }
        }

        let imageUrl = "";
        const imgInput = document.getElementById("image");

        if (imgInput && imgInput.files && imgInput.files.length > 0) {
            // NEW FILE UPLOADED
            imageUrl = URL.createObjectURL(imgInput.files[0]);
        } else if (imgInput && imgInput.value.trim() !== "") {
            imageUrl = imgInput.value.trim();
        } else {
            // KEEP OLD IMAGE (IMPORTANT)
            imageUrl = old?.imageUrl || old?.image || "";

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

            imageUrl: imageUrl
        };

        if (id) StorageAPI.update(recipe);
        else StorageAPI.add(recipe);

        Utils.showToast(id ? "Recipe updated" : "Recipe added");
            this.close();
            App.render();

            if (UI.currentDetailId === recipe.id) {
                UI.openDetail(recipe.id);
            }

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
