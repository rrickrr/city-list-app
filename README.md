# City List App

This is a simple React app that fetches a list of cities and allows the user to filter them by name or state.

## How to Run

1. Clone this repository:
    ```
    git clone https://github.com/rrickrr/city-list-app.git
    ```
2. Navigate into the folder:
    ```
    cd city-list-app
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Start the development server:
    ```
    npm run dev
    ```
5. Open your browser to:
    ```
    http://localhost:5173/
    ```

---

## Features

✅ Fetches cities from: https://roots.thecompernolles.com/cities.json  
✅ Shows a **loading message** while fetching.  
✅ Shows a **friendly error message** if the fetch fails (e.g., server down or network issues).  
✅ Filters cities by name or state as the user types.

---

## Engineering Highlights

- **Thoughtful Error Handling:** If the data fetch fails (due to network issues, server problems, or invalid responses), the app displays a **clear, friendly message** to the user, rather than a cryptic technical error. The real error is also logged to the browser console for debugging.
- **Highly Annotated Code:** The key component (`App.jsx`) is **fully commented**, explaining:
    - Why each piece of state exists.
    - What each section of the UI does.
    - The reasoning behind error handling and filtering logic.
- **User-Friendly UI:** The app is visually presented inside a **centered navy blue box**, ensuring a clear and focused user experience.

---

## About

This project was built as part of a coding exercise to demonstrate:
- Good engineering practices.
- Clear handling of edge cases.
- Thoughtful communication of intent through code comments.

---

