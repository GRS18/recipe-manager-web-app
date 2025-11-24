// app.js — Main app controller: loads initial data, applies filters, and connects UI + Storage + Form.

window.App = {
    seedRecipes: [
        {
            id: crypto.randomUUID(),
            title: "Puran Poli",
            description: "Traditional Maharashtrian sweet flatbread stuffed with chana dal–jaggery puran.",
            ingredients: [
                "Wheat flour – 2 cups (250g)",
                "All-purpose flour (maida) – 1 cup (120g)",
                "Chana dal – 1 cup (200g)",
                "Jaggery – 1 cup (180g), grated",
                "Turmeric – 1/4 tsp",
                "Cardamom powder – 1/2 tsp",
                "Nutmeg (optional) – a pinch",
                "Oil – 2 tbsp",
                "Ghee – 3–4 tbsp (for roasting)",
                "Water – as needed (approx. 1.5 cups)"
            ],
            steps: [
                "Wash chana dal thoroughly 2–3 times.",
                "Add dal to pressure cooker and pour 2 cups water.",
                "Pressure cook for 4–5 whistles until soft.",
                "Drain extra water and transfer cooked dal to a pan.",
                "Add grated jaggery and cook on low heat.",
                "Stir continuously until jaggery melts and mixes.",
                "Cook until mixture thickens into puran (no water left).",
                "Add cardamom and nutmeg; allow mixture to cool.",
                "Blend puran using puran yantra or mash until smooth.",
                "For dough: mix wheat flour, maida, turmeric, and oil.",
                "Add water slowly and knead soft, elastic dough.",
                "Rest dough for 20–25 minutes.",
                "Make equal-sized dough balls and puran balls.",
                "Flatten dough ball, place puran ball inside, and seal.",
                "Roll gently into thin poli using dry flour.",
                "Heat tawa, place rolled poli and cook on medium flame.",
                "Apply ghee and cook until golden brown spots appear.",
                "Flip, apply ghee again; cook fully.",
                "Serve warm with ghee or milk."
            ],
            prepTime: 40,
            cookTime: 30,
            difficulty: "Hard",
            imageUrl: "assets/images/PuranPoli.jpg"
        },
        {
            id: crypto.randomUUID(),
            title: "Varan Bhat",
            description: "Classic Maharashtrian comfort dish of dal (varan) served with steamed rice.",
            ingredients: [
                "Toor dal – 1 cup (200g)",
                "Water – 3 cups (for pressure cooking)",
                "Turmeric – 1/2 tsp",
                "Salt – 1 tsp or to taste",
                "Ghee – 1 tbsp",
                "Cumin seeds – 1/2 tsp",
                "Hing – 1 pinch",
                "Green chilli (optional) – 1, slit",
                "Sugar/jaggery – 1/2 tsp (optional)",
                "Rice – 1.5 cups (300g)",
                "Water – 3 cups (for cooking rice)"
            ],
            steps: [
                "Wash toor dal 2–3 times until water turns clear.",
                "Add dal to pressure cooker with 3 cups water and turmeric.",
                "Pressure cook for 4–5 whistles until dal becomes soft.",
                "Whisk cooked dal until smooth.",
                "Add salt and optional sugar/jaggery; simmer for 4–5 minutes.",
                "Heat ghee in a small tadka pan.",
                "Add cumin seeds and let them splutter.",
                "Add hing and green chilli; sauté for a few seconds.",
                "Pour tadka over boiling dal and mix well.",
                "For rice: wash rice 2–3 times.",
                "Add rice to pot or cooker with 3 cups water.",
                "Cook until soft and fluffy (2 whistles in cooker).",
                "Serve hot rice topped with ghee and warm varan."
            ],
            prepTime: 15,
            cookTime: 25,
            difficulty: "Easy",
            imageUrl: "assets/images/VaranBhat.jpg"
        },
        {
            id: crypto.randomUUID(),
            title: "Ukadiche Modak",
            description: "Traditional steamed Maharashtrian modaks filled with sweet coconut–jaggery mixture.",
            ingredients: [
                "Rice flour – 2 cups (250g)",
                "Water – 2 cups (500ml)",
                "Ghee – 2 tsp",
                "Salt – 1 pinch",
                "Fresh grated coconut – 2 cups (200g)",
                "Jaggery – 1 cup (180g), grated",
                "Cardamom powder – 1/2 tsp",
                "Nutmeg powder – 1 pinch",
                "Sesame seeds (optional) – 1 tbsp"
            ],
            steps: [
                "Heat a pan and add grated coconut.",
                "Add grated jaggery and cook on low flame.",
                "Stir until jaggery melts and combines with coconut.",
                "Cook until the mixture thickens and becomes sticky.",
                "Add cardamom, nutmeg, and sesame seeds; mix well and cool.",
                "For dough (ukad): boil 2 cups water with a pinch of salt and 1 tsp ghee.",
                "Lower the flame and add rice flour slowly.",
                "Mix with a spoon until it forms a dough-like mass.",
                "Cover and rest for 5 minutes.",
                "Transfer to a plate and knead while warm using a little ghee.",
                "Knead until smooth, soft dough forms (no cracks).",
                "Create small lemon-sized dough balls.",
                "Flatten each ball into small cups using fingers.",
                "Place 1–2 tsp coconut-jaggery filling in the center.",
                "Close edges and shape into a modak using fingers or mold.",
                "Heat a steamer and grease the plate with ghee.",
                "Place modaks and steam for 12–15 minutes.",
                "Remove and apply a little ghee on top before serving."
            ],
            prepTime: 30,
            cookTime: 20,
            difficulty: "Medium",
            imageUrl: "assets/images/UkadicheMoadak.jpg"
        },
        {
            id: crypto.randomUUID(),
            title: "Vada Pav",
            description: "Iconic Mumbai street food made with spicy potato vada, pav, and garlic chutney.",
            ingredients: [
                "Potatoes – 4 medium (400g), boiled & mashed",
                "Green chilies – 2, finely chopped",
                "Ginger – 1 inch, crushed",
                "Garlic – 6 cloves, crushed",
                "Turmeric – 1/2 tsp",
                "Coriander leaves – 2 tbsp, chopped",
                "Salt – 1 tsp or to taste",
                "Mustard seeds – 1 tsp",
                "Curry leaves – 6–7",
                "Oil – 2 tbsp (for tempering)",
                
                "Besan (gram flour) – 1 cup (120g)",
                "Turmeric – 1/4 tsp (for batter)",
                "Red chili powder – 1/2 tsp",
                "Salt – 1/2 tsp",
                "Baking soda – 1 pinch (optional)",
                "Water – as needed for batter",

                "Oil – for deep frying",
                
                "Pav – 6 pieces",
                "Dry garlic chutney – 3–4 tbsp",
                "Green chutney – 2–3 tbsp",
                "Tamarind chutney – 2–3 tbsp (optional)"
            ],
            steps: [
                "Boil potatoes and peel them. Mash them in a large bowl.",
                "Heat 2 tbsp oil in a pan. Add mustard seeds and let them crackle.",
                "Add crushed garlic, ginger, chopped green chilies, and curry leaves.",
                "Sauté for 1–2 minutes on medium flame.",
                "Add turmeric and salt. Mix well.",
                "Add this tempering to the mashed potatoes.",
                "Add chopped coriander leaves and mix thoroughly.",
                "Shape the mixture into round lemon-sized balls. Keep aside.",
                
                "For batter, mix besan, turmeric, red chili powder, salt, and a pinch of baking soda.",
                "Add water gradually to form a smooth, thick, flowing batter.",
                
                "Heat oil for deep frying.",
                "Dip each potato ball into the besan batter and coat it evenly.",
                "Gently drop into hot oil and fry until golden and crisp.",
                "Remove on tissue paper and keep aside.",
                
                "Slice pav horizontally but not completely.",
                "Apply dry garlic chutney on the inside.",
                "Add green chutney and sweet tamarind chutney (optional).",
                "Place one hot vada in the pav and press slightly.",
                
                "Serve with fried green chilies and extra chutney."
            ],
            prepTime: 20,
            cookTime: 15,
            difficulty: "Easy",
            imageUrl: "assets/images/VadaPav.jpg"
        },
        {
            id: crypto.randomUUID(),
            title: "Kothimbir Vadi",
            description: "Traditional Maharashtrian steamed and shallow-fried coriander cakes made with gram flour and spices.",
            ingredients: [
                "Fresh coriander leaves – 2 cups (tightly packed, ~80g), finely chopped",
                "Besan (gram flour) – 1 cup (120g)",
                "Rice flour – 2 tbsp (optional, helps crispiness)",
                "Green chilies – 2, finely chopped",
                "Ginger – 1 inch, grated",
                "Garlic – 4 cloves, crushed",
                "Red chili powder – 1 tsp",
                "Turmeric – 1/2 tsp",
                "Cumin seeds – 1/2 tsp",
                "Sesame seeds – 1 tbsp",
                "Salt – 1 tsp or to taste",
                "Sugar – 1/2 tsp (optional but traditional)",
                "Water – ~1/2 cup (adjust as needed)",
                "Oil – 2 tbsp for batter + more for shallow frying"
            ],
            steps: [
                "Wash and finely chop coriander leaves. Keep aside.",
                "In a mixing bowl, add besan, rice flour, red chili powder, turmeric, cumin seeds, sesame seeds, sugar, and salt.",
                "Add green chilies, ginger, and garlic paste. Mix well.",
                "Add chopped coriander leaves and combine with the dry mixture.",
                "Add water gradually to form a thick batter (like dhokla or pakora batter consistency).",
                "Add 2 tbsp oil to the batter and mix well.",
                "Grease a steel plate or thali with oil.",
                "Pour the batter into the plate and spread evenly (about 1–1.5 cm thick).",
                "Steam on medium flame for 15–20 minutes until set.",
                "Insert a toothpick; if it comes out clean, the vadi is cooked.",
                "Let the steamed block cool completely.",
                "Cut into squares, diamonds, or rectangles.",
                "Heat oil in a pan for shallow frying.",
                "Place vadis on the pan and fry until golden brown and crisp on both sides.",
                "Remove and serve hot with chutney or ketchup."
            ],
            prepTime: 20,
            cookTime: 25,
            difficulty: "Medium",
            imageUrl: "assets/images/KothambirVadi.jpg"
        },
        {
            id: crypto.randomUUID(),
            title: "Misal Pav",
            description: "Spicy Maharashtrian misal served with pav, topped with farsan, onions, coriander, and lemon.",
            ingredients: [
                "Matki (moth beans) sprouted – 2 cups (about 250g)",
                "Oil – 3 tbsp",
                "Onion – 2 medium (150g), finely chopped",
                "Tomato – 2 medium (140g), finely chopped",
                "Ginger-garlic paste – 1 tbsp",
                "Green chilies – 2, chopped",
                "Red chili powder – 2 tsp",
                "Turmeric – 1/2 tsp",
                "Garam masala – 1 tsp",
                "Kolhapuri Misal Masala – 1 tbsp (or use extra chili powder)",
                "Coriander powder – 1 tsp",
                "Cumin powder – 1 tsp",
                "Mustard seeds – 1/2 tsp",
                "Cumin seeds – 1/2 tsp",
                "Curry leaves – 6–8",
                "Salt – 1.5 tsp or to taste",
                "Jaggery – 1 tsp (optional)",
                "Water – 3 to 4 cups",
                "Farsan (sev/chiwda mix) – 1 to 1.5 cups",
                "Fresh coriander – 1/2 cup, chopped",
                "Onion – 1 small, finely chopped (for topping)",
                "Lemon – 1",
                "Pav – 6 to 8"
            ],
            steps: [
                "Wash matki sprouts well and keep them ready.",
                "Heat 3 tbsp oil in a pot.",
                "Add mustard seeds, cumin seeds, and curry leaves. Let them splutter.",
                "Add chopped onions and sauté until light golden.",
                "Add ginger-garlic paste and green chilies. Cook for 1 minute.",
                "Add tomatoes and cook until soft and mushy.",
                "Add red chili powder, turmeric, coriander powder, cumin powder, garam masala, and Kolhapuri misal masala. Mix well.",
                "Cook the masala until oil releases from the sides.",
                "Add matki sprouts and mix well with the masala.",
                "Add salt and jaggery (optional).",
                "Pour 3–4 cups of water to make a thin, spicy 'rassa' (gravy).",
                "Cover and cook for 15–20 minutes on medium flame until matki becomes soft.",
                "Taste and adjust salt/spice as needed.",
                "Turn off gas and let it rest for 5 minutes to allow flavors to blend.",
                "To assemble: In a bowl add cooked misal, top with chopped onion, fresh coriander, lots of farsan, and a squeeze of lemon.",
                "Serve hot with pav toasted on tawa with butter."
            ],
            prepTime: 25,
            cookTime: 20,
            difficulty: "Medium",
            imageUrl: "assets/images/MisalPav.jpg"
        },
        {
            id: crypto.randomUUID(),
            title: "Pav Bhaji",
            description: "Famous Mumbai street-style mashed vegetable curry served with buttery pav.",
            ingredients: [
                "Potatoes – 3 medium (300g), boiled & mashed",
                "Cauliflower – 1 cup (80g), boiled & mashed",
                "Green peas – 1/2 cup (60g), boiled",
                "Carrot – 1 medium (70g), boiled & mashed",
                "Capsicum – 1 medium (80g), finely chopped",
                "Tomatoes – 3 medium (200g), finely chopped",
                "Onion – 2 medium (150g), finely chopped",
                "Ginger-garlic paste – 1 tbsp",
                "Green chilies – 1 or 2, finely chopped",
                "Butter – 3 tbsp (for bhaji) + more for pav",
                "Oil – 2 tbsp",
                "Pav Bhaji Masala – 2 tbsp",
                "Red chili powder – 1.5 tsp",
                "Turmeric – 1/2 tsp",
                "Kashmiri red chili powder – 1 tsp (for color)",
                "Salt – 1.5 tsp or to taste",
                "Lemon – 1",
                "Fresh coriander – 1/2 cup, finely chopped",
                "Water – 2 to 3 cups (adjust for consistency)",
                "Pav – 8 pieces"
            ],
            steps: [
                "Boil potatoes, cauliflower, peas, and carrot. Mash them together and keep aside.",
                "Heat oil + 2 tbsp butter on a tawa or deep pan.",
                "Add chopped onions and sauté until golden brown.",
                "Add ginger-garlic paste and green chilies. Cook for 1 minute.",
                "Add tomatoes and cook until soft and mushy.",
                "Add capsicum and cook for 3 minutes.",
                "Add pav bhaji masala, red chili powder, Kashmiri chili powder, turmeric, and salt.",
                "Mix well and cook until the masala releases oil.",
                "Add all mashed vegetables and mix with the masala.",
                "Add water gradually to adjust consistency. Bhaji should be thick but flowy.",
                "Start mashing everything using a masher on the tawa/pan for 3–5 minutes.",
                "Add 1 more tbsp butter and mix.",
                "Simmer for 10 minutes on low flame so spices blend well.",
                "Turn off heat and add chopped coriander + squeeze of lemon.",
                "To toast pav: heat a tawa, add butter, a pinch of pav bhaji masala, and place pav on it. Toast until golden.",
                "Serve hot bhaji topped with butter, coriander, onions, lemon, and masala pav."
            ],
            prepTime: 20,
            cookTime: 25,
            difficulty: "Medium",
            imageUrl: "assets/images/PavBhajii.jpg"
        },
        {
            id: crypto.randomUUID(),
            title: "Pithla Bhakri",
            description: "Traditional Maharashtrian gram-flour curry (Pithla) served with rustic Jowar or Bajra Bhakri.",
            ingredients: [
                "Besan (gram flour) – 1 cup (120g)",
                "Onion – 1 large (100g), finely chopped",
                "Green chilies – 2, finely chopped",
                "Garlic – 5 cloves, crushed",
                "Ginger – 1/2 inch, grated",
                "Turmeric – 1/2 tsp",
                "Red chili powder – 1 tsp",
                "Curry leaves – 6 to 8",
                "Mustard seeds – 1/2 tsp",
                "Cumin seeds – 1/2 tsp",
                "Oil – 2 tbsp",
                "Salt – 1 tsp or as needed",
                "Water – 2.5 to 3 cups",
                "Fresh coriander – 3 tbsp, chopped",

                "— For Bhakri —",
                "Jowar flour – 2 cups (250g)",
                "Hot water – as needed",
                "Salt – 1/2 tsp"
            ],
            steps: [
                "In a bowl, whisk besan with 3 cups of water until smooth and lump-free. Keep aside.",
                "Heat 2 tbsp oil in a pan.",
                "Add mustard seeds, cumin seeds, curry leaves and let them splutter.",
                "Add chopped onions and sauté until soft and slightly golden.",
                "Add garlic, ginger, and green chilies. Cook for 1 minute.",
                "Add turmeric and red chili powder. Mix well.",
                "Pour in the besan mixture slowly while stirring continuously to avoid lumps.",
                "Add salt and cook on medium flame, stirring constantly.",
                "Pithla will start thickening; continue mixing for 5–7 minutes until smooth and creamy.",
                "Lower the flame and simmer for 3 minutes. If too thick, add a little water.",
                "Turn off heat and add fresh coriander on top.",
                "— Make Bhakri —",
                "In a bowl, add jowar flour and salt. Pour hot water slowly while mixing with a spoon.",
                "When slightly cool, knead with hands until soft and smooth.",
                "Take a portion, flatten using palms or roll using hands and a little flour.",
                "Heat tawa. Place bhakri gently and cook on medium flame.",
                "Flip once lightly cooked, then press edges with cloth so it puffs up.",
                "Flip again and cook until brown spots appear.",
                "Serve hot bhakri with steaming pithla, onions, and green chili."
            ],
            prepTime: 15,
            cookTime: 25,
            difficulty: "Medium",
            imageUrl: "assets/images/PithlaBhakri.jpg"
        }

    ],

   init() {
        // Seed storage if empty
        StorageAPI.seedIfEmpty(this.seedRecipes);

        // Filters
        document.getElementById("search").oninput = () => this.render();
        document.getElementById("difficulty").onchange = () => this.render();
        document.getElementById("maxTime").oninput = () => this.render();

        this.render();
    },

    closeModal(id) {
        document.getElementById(id).setAttribute("aria-hidden", "true");
    },

    openConfirm(id) {
        this.currentDetailId = id;

        const confirmModal = document.getElementById("confirmModal");
        const yesBtn = document.getElementById("confirmYes");
        const noBtn = document.getElementById("confirmNo");

        confirmModal.setAttribute("aria-hidden", "false");

        yesBtn.onclick = null;
        noBtn.onclick = null;

        yesBtn.onclick = () => {
            StorageAPI.remove(id);
            Utils.showToast("Recipe deleted");
            this.closeModal("confirmModal");
            this.closeModal("detailModal");
            App.render();
        };

        noBtn.onclick = () => {
            this.closeModal("confirmModal");
        };
    },

    closeConfirm() {
        document.getElementById("confirmModal").setAttribute("aria-hidden", "true");
    },

    getFiltered() {
        const q = document.getElementById("search").value.toLowerCase();
        const diff = document.getElementById("difficulty").value;
        const maxT = document.getElementById("maxTime").value.trim() === "" 
            ? null 
            : Number(document.getElementById("maxTime").value);

        return StorageAPI.getAll().filter(r =>
            r.title.toLowerCase().includes(q) &&
            (diff === "All" || r.difficulty === diff) &&
            (maxT === null || (r.prepTime + r.cookTime) <= maxT)
        );
    },

    render() {
        UI.renderList(this.getFiltered());
    }

};

// Initialize
document.addEventListener("DOMContentLoaded", () => App.init());