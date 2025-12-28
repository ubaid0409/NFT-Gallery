🖼️ NFT Gallery App

A modern NFT Gallery application built using React, Vite, React Router, and Tailwind CSS. Users can browse NFTs, sort them by price, and view detailed NFT pages.

🛠 Tech Stack

React (Vite)

React Router DOM

Tailwind CSS

JavaScript (ES6)

🚀 React App Setup (Using Vite)

1️⃣ Create a Vite React App

npm create vite@latest NFT-GALLERY

2️⃣ Select Options
Framework: React


Variant: JavaScript


3️⃣ Move to Project Folder
cd NFT-GALLERY

4️⃣ Install Dependencies
npm install

5️⃣ Run Development Server
npm run dev

The app will run at:
http://localhost:5173


🎨 Tailwind CSS Setup
1️⃣ Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

2️⃣ Initialize Tailwind
npx tailwindcss init -p

3️⃣ Update tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

4️⃣ Add Tailwind Directives
@tailwind base;
@tailwind components;
@tailwind utilities;

5️⃣ Import CSS in main.jsx
import './index.css'


🔗 Clone Project from GitHub
Repository URL
https://github.com/ubaid0409/NFT-Gallery.git

Clone Command
git clone https://github.com/ubaid0409/NFT-Gallery.git

Move to Project Folder
cd NFT-GALLERY

Install Dependencies
npm install

Run the App
npm run dev


📁 Project Folder Structure
NFT-GALLERY
│
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── NFTCard.jsx
│   │   └── FilterBar.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   └── NFTDetails.jsx
│   │
│   ├── data
│   │   └── nfts.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── index.css


🧠 Application Flow & File Explanation
App.jsx
Root component of the application


Wraps the app with BrowserRouter


Defines routes:


/ → Home page


/nft/:id → NFT details page


Navbar is visible on all pages



Navbar.jsx
Displays the application title


Styled using Tailwind CSS


Common navigation/header component



Home.jsx
Displays all NFTs in a grid layout


Uses useState for sorting state


Sorts NFTs by price:


Low → High


High → Low


Renders:


FilterBar


Multiple NFTCard components



FilterBar.jsx
Provides sorting buttons


Updates sorting state in Home


Controls NFT price order



NFTCard.jsx
Displays a single NFT card


Shows:


Image


Name


Artist


Price


Uses Link for navigation to details page



NFTDetails.jsx
Retrieves NFT ID from URL using useParams


Finds NFT from nfts.js


Displays complete NFT information


Includes a Buy NFT button (UI only)



nfts.js
Contains static NFT data


Each NFT includes:


id


name


artist


price


image


description


Acts as a mock database



✨ Features
🔀 Price-based sorting


🧭 Client-side routing


📱 Fully responsive design


🎨 Modern gradient UI


⚡ Fast performance with Vite



👨‍💻 Author
Name: Ubaid Hashmi


GitHub: https://github.com/ubaid0409

