window.StorageAPI = {
    key: "recipes",

    getAll() {
        try {
            return JSON.parse(localStorage.getItem(this.key)) || [];
        } catch {
            return [];
        }
    },

    saveAll(recipes) {
        localStorage.setItem(this.key, JSON.stringify(recipes));
    },

    add(recipe) {
        const all = this.getAll();
        all.push(recipe);
        this.saveAll(all);
    },

    update(updatedRecipe) {
        let all = this.getAll();
        all = all.map(r => r.id === updatedRecipe.id ? updatedRecipe : r);
        this.saveAll(all);
    },

    remove(id) {
        const all = this.getAll().filter(r => r.id !== id);
        this.saveAll(all);
    },

    seedIfEmpty(seedList) {
        if (this.getAll().length === 0) {
            localStorage.setItem(this.key, JSON.stringify(seedList));
        }
    }
};
