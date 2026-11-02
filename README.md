# Assignment #6. jQuery (Selectors, Effects, Animations)

**Name:** Torekhan Taimas
**Group:** IT-2503
**GitHub Pages:**

## Project Files

- `index.html` - page structure
- `style.css` - styling and light/dark theme variables
- `script.js` - all jQuery code


---

## Part 1. Getting Started with jQuery

### Task 0. Setup
- Include jQuery from a CDN.
- Write a `$(document).ready(function() { ... })` function.
- Test by printing "jQuery is ready!" in the console.

<img width="1917" height="1061" alt="изображение" src="https://github.com/user-attachments/assets/ec637d0f-09c0-482f-8d86-ef3c7d335ad7" />


### Task 1. Selectors & CSS
- Display name, headline, and short introduction.
- Include a profile section titled "Welcome to My Portfolio."
- Use tag, ID, and class selectors.
- Update the headline with `.text()` or `.html()`.
- Use `.css()` to change styling.
- Add buttons to switch between light and dark themes.

<img width="1917" height="1036" alt="изображение" src="https://github.com/user-attachments/assets/dfbf5f40-2e64-4582-9af8-fd245866b3de" />

<img width="1917" height="1017" alt="изображение" src="https://github.com/user-attachments/assets/bd78af37-62a4-4a35-b129-8dd52900f980" />



---

## Part 2. jQuery Effects

### Task 2. Visibility Methods
- "About Me" section with biography, status message, and fun facts.
- Hide, Show, and Toggle buttons control the status and fun facts.

<img width="1070" height="541" alt="изображение" src="https://github.com/user-attachments/assets/c31630ac-a3ae-4245-9bc6-b9db30b44087" />
<img width="1090" height="277" alt="изображение" src="https://github.com/user-attachments/assets/1c37a01d-7193-4ac6-8ebd-59486e493f5a" />



### Task 3. Fade Methods
- Gallery with three images.
- `.fadeIn()`, `.fadeOut()`, `.fadeToggle()` buttons.

<img width="1101" height="366" alt="изображение" src="https://github.com/user-attachments/assets/abe71965-9bcc-40b1-b802-30f3c65467c5" />

<img width="1063" height="227" alt="изображение" src="https://github.com/user-attachments/assets/918f9ca6-de66-4252-835c-d98d0135c414" />


### Task 4. Slide Methods
- Three clickable headings: Music, Movie, Subject.
- Collapsible panel under each heading using `.slideUp()`, `.slideDown()`, `.slideToggle()`.

<img width="1042" height="682" alt="изображение" src="https://github.com/user-attachments/assets/7badbe98-fcc3-46b9-990e-6cd301500609" />

<img width="1043" height="425" alt="изображение" src="https://github.com/user-attachments/assets/6f4aa862-5b5a-4bf3-bfe0-5b1b4d92e59b" />

---

## Part 3. DOM Manipulation with jQuery

### Task 5. Add & Remove Elements
- Initial list of four skills.
- Text input and three buttons: Add Skill, Prepend Skill, Remove Skill.
- Uses `.append()`, `.prepend()`, `.remove()`.
- Empty input is rejected with an error message.

<img width="1031" height="297" alt="изображение" src="https://github.com/user-attachments/assets/77491370-884c-41d6-b0c9-c854f4710c9f" />

<img width="1162" height="660" alt="изображение" src="https://github.com/user-attachments/assets/e57283c6-f112-434e-bcf3-d3ead79be78d" />


### Task 6. Modifying Attributes
- Social link with a button that changes its destination using `.attr()`.

<img width="1142" height="326" alt="изображение" src="https://github.com/user-attachments/assets/c9f4103a-7b9e-4110-ad05-002afa574a17" />

<img width="1036" height="316" alt="изображение" src="https://github.com/user-attachments/assets/eef1e554-19bd-4cda-aa66-9bd0e907d00f" />


### Task 7. Form Interaction
- Name and Email inputs.
- Live output below the form using `.val()` and `.text()`.

<img width="1047" height="385" alt="изображение" src="https://github.com/user-attachments/assets/a09c7a8d-65bf-48f4-9fd0-a8d59a5531e0" />


---

## Part 4. Animations

### Task 8. Basic Animation
- Four skill bars start at zero width.
- "Animate My Skills" uses `.animate()` to grow each bar to a different target width (90%, 75%, 60%, 45%).
- Clicking again animates the bars back to zero.

<img width="1047" height="327" alt="изображение" src="https://github.com/user-attachments/assets/f3448d02-1c5f-4964-9577-e428e290273f" />

<img width="1042" height="360" alt="изображение" src="https://github.com/user-attachments/assets/a58d0774-dc8b-4356-9af0-57cd5ba69766" />


---

## Summary of Work Process

I started with the HTML structure, one section per task. Then I wrote the CSS with variables so the theme switch only needs to change a few values. After that I implemented each task in `script.js` step by step and tested every button in the browser. The hardest parts were keeping the skill-bar animation from overlapping on repeated clicks (solved with `.stop(true)` and disabling the button) and safely adding user input to the list (solved by using `.text()` instead of `.html()`). Finally I deployed the project with GitHub Pages and took screenshots for each task.
