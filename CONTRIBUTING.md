# Contributing to CrazyUX

## 1. Introduction

Welcome to **CrazyUX**! 🚀

We are building the web's most confusingly beautiful, soft-glowing, upside-down experience. Our goal is to experiment with Neumorphism, clean UI, and unconventional layouts (like our upside-down scroll).

We are very open to contributions! Whether you are a design wizard, a JavaScript ninja, or just someone who found a typo, we want your help.

**We welcome:**
* ✨ **New Features:** New experimental pages or components.
* 🐛 **Bug Fixes:** Did the scroll logic break? Let us know.
* 📖 **Documentation:** Typos, unclear guides, or better comments.
* 🎨 **UI Improvements:** smoother shadows, better glows.

---

## 2. Getting Started

Since this is a vanilla HTML/CSS/JS project, setting it up is very easy.

### Prerequisites
* A code editor (VS Code recommended).
* A web browser (Chrome, Firefox, etc.).
* Git installed on your machine.

### Installation & Running
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/CrazyUX/website.git](https://github.com/CrazyUX/website.git)
    ```
2.  **Open the project:**
    Navigate to the folder and open `index.html` in your browser.
    * *Tip: Use "Live Server" extension in VS Code for real-time updates.*

### Coding Standards
* **File Structure (CRITICAL):**
    * Main site styles go in `css/style.css`.
    * Main site logic goes in `js/script.js`.
    * **New Web Apps/Pages:** If you are building a new experiment, DO NOT clutter the root. Create a new folder inside `projects/`.
    * *Example:* `projects/my-calculator/index.html`
* **Formatting:** Use 4 spaces or tabs (just be consistent).
* **Style:** Keep classes kebab-case (e.g., `.neu-card`, `.btn-glow`).

---

## 3. How to Contribute

Follow these steps to get your code merged without breaking the upside-down world.

### a. Fork the Repository
Click the **Fork** button at the top right of the repo page on GitHub. This creates a copy of the project in your account.

### b. Create a New Branch
Do not work on the `main` branch. Create a branch for your specific task.

**Naming Conventions:**
* `feature/your-feature-name` (e.g., `feature/dark-mode-toggle`)
* `fix/bug-description` (e.g., `fix/mobile-nav-overlap`)
* `docs/update-readme` (e.g., `docs/fix-typos`)

```bash
git checkout -b feature/amazing-new-card

### c. Make Changes
* **Write your code.**
* **Design Rule:** Stick to the Neumorphism theme (Soft UI).
* **Logic Rule:** Remember the site scrolls **up**. Test your changes to ensure the start-at-bottom logic still works.
* Add comments if your logic is complex.

### d. Commit Your Changes
Use meaningful commit messages so we know what you did.

```bash
git commit -m "feat: added a new gallery page in projects folder"

### e. Push and Create a Pull Request (PR)
Push your branch to your forked repository:

```bash
git push origin feature/amazing-new-card

1.  Go to the original **CrazyUX** repository on GitHub and click **"Compare & pull request"**.
2.  In your PR description, please include:
    * **What you changed.**
    * **Screenshots** (if you changed the UI).
    * **Related Issues** (e.g., "Closes #42").

---

## 4. Code of Conduct
We believe in creativity and kindness.

* Be respectful in comments and reviews.
* Constructive criticism is welcome; being mean is not.
* Harassment of any kind will not be tolerated.

---

## 5. Issue Reporting Guidelines
Found a bug? Great! (Well, not great, but thanks for finding it).

Please open an **Issue** on GitHub and include:

* **Description:** What happened?
* **Steps to Reproduce:**
    1.  Step 1: Open page.
    2.  Step 2: Scroll up fast.
    3.  Step 3: Nav bar explodes.
* **Expected Behavior:** What should have happened?
* **Screenshots:** Visuals help us fix things faster.
* **Browser:** (e.g., Chrome v90, Safari on iPhone).

---

## 6. Review Process
Once you submit a PR:

1.  **Wait for review:** We usually review within 2-3 days.
2.  **Code Quality Check:** We will check if you followed the folder structure (`projects/` folder!) and if your HTML is clean.
3.  **Style Check:** Does it match the CrazyUX soft-glow aesthetic?
4.  **Merge:** If everything looks good, we will merge your code into the `main` branch!

**Happy Coding! Keep it Crazy.** 🤪