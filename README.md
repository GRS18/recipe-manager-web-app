# Recipe Manager (HTML / CSS / JavaScript / localStorage)

## Overview
This web application allows users to create, edit, view, and delete recipes.  
The application is built using HTML, CSS, and JavaScript.  
All data is stored in the browser using localStorage.

## Running the App

#### Using Live Server
1. Install the Live Server extension in VS Code.

2. Right-click index.html → “Open with Live Server”.

3. The app will automatically start at: [http://localhost:5500/](http://localhost:5500/)

No backend setup is required — everything runs in the browser.

## Data Structure (localStorage)
- The application stores all recipes under the key: **recipes**
- Each recipe is an object inside an array.

### Structure of a Recipe Object
```json
{
  "id": "uuid-generated-string",
  "title": "Puran Poli",
  "description": "Maharashtrian sweet flatbread",
  "ingredients": [
    "Wheat Flour - 2 cups",
    "Chana Dal - 1.5 cups",
    "Jaggery - 1 cup",
    "Ghee - 2 tbsp"
  ],
  "steps": [
    "Mix dough",
    "Prepare filling",
    "Roll and cook"
  ],
  "category": "Dessert",
  "image": "encoded image string (Data URI)",
  "createdAt": "2025-02-21T10:20:30Z"
}
```

### localStorage Example
```json
[
  {
    "id": "c2c45a5e-f5c8-4e9e-bef0-192aa8dc09fd",
    "title": "Puran Poli",
    "description": "Maharashtrian sweet flatbread",
    "ingredients": ["Wheat flour - 2 cups", "Jaggery - 1 cup"],
    "steps": ["Knead dough", "Cook dal", "Roll poli"],
    "category": "Dessert",
    "image": "data:image/png;encoded-string-here",
    "createdAt": "2025-11-21T10:15:00Z"
  }
]
```

## Assumptions & Limitations

- User will enter valid recipe data (title, ingredients, steps, etc.).

- Images are stored as encoded image strings (Data URI) instead of files.

- App is designed for personal, single-user use.

- Browser supports:

    - localStorage

    - ES6 JavaScript

    - FileReader API for image handling

## Limitations

- localStorage is browser-dependent Clearing browser data will delete all recipes.

- Large images increase storage usage Data URIs take more space and may hit the ~5MB browser limit.

- No backend → no online sync or user accounts.

- Not designed for very large datasets (1000+ recipes).

- Works best on modern browsers (Chrome, Edge, Firefox).

## Known Issues
These are known issues you may fix later:

- GitHub Pages sometimes does not show updated JS/CSS due to caching → Hard refresh: Ctrl + Shift + R

- Some recipe images may not load due to invalid URLs or blocked resources.

- Modal scrolling may behave differently depending on the device.
