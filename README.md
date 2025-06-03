Frontend Test Project

A technical demo built with modern React stack. It includes Searching Job by type and role, spinner control, and UI components with clean modular structure.

⚙️ Tech Stack

Vite – Fast dev tooling

React – UI library

Tailwind CSS – Utility CSS

Ant Design – UI components

Context API – State management

Custom Modules – Filtering & loading logic

🔧 Setup

git clone <repo-url>
cd project-directory
npm install
npm run dev

🧩 Features

Modular filtering logic

Users can filter/search by jobType and role (e.g. FrontEnd, GraphicDesigner)

Context-managed spinner, 0.5 Seconds Loader is shown everytime a user searchs a job

Fully Responsive UI

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
