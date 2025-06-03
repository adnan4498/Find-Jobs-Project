Frontend Test Project

A technical demo built with modern React stack. It includes Searching Job by type and role, spinner control, and UI components with clean modular structure.

⚙️ Tech Stack

* Vite – Fast dev tooling

* React – UI library

* Tailwind CSS – Utility CSS

* Ant Design – UI components

* Context API – State management

* Custom Modules – Filtering & loading logic

🔧 Setup

git clone <repo-url>
cd project-directory
npm install
npm run dev

🧩 Features

* Modular filtering logic

* Users can search jobs by jobType and role (e.g. Latest Jobs or FrontEnd, GraphicDesigner)

* Context-managed spinner, 0.5 Seconds Loader is shown everytime a user searchs a job

* Fully Responsive UI

📁 Structure

src/

├── components /

├── customModules / filteringModules

├── data / JobsData.js

├── shared / Navbar.jsx

├── utils / ContextApi

└── main.jsx

🎨 Design

[Figma Link](https://www.figma.com/design/8IiWesnv0NANUkvnoar4HS/Frontend-Test?node-id=1-98&t=vUr3Hdn3nuH2smwQ-0)

📝 Notes:
- Fonts are preloaded in `index.html` for faster rendering and reduced load time.
- Used `manualChunks` in `vite.config.js` to split React and Ant Design into separate bundles for better caching and performance.
- Design was based on a 1440px layout; for screens below 1440px, I carefully adjusted the design to best match the original while maintaining usability."

