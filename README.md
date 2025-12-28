# 🖼️ NFT Gallery App

> A modern NFT Gallery application built using **React**, **Vite**, **React Router**, and **Tailwind CSS**.  
> Users can browse NFTs, sort them by price, and view detailed NFT pages.

---

## 🛠 Tech Stack

- **React (Vite)**
- **React Router DOM**
- **Tailwind CSS**
- **JavaScript (ES6)**

---

## 🚀 React App Setup (Using Vite)

### 1️⃣ Create a Vite React App

```bash
npm create vite@latest NFT-GALLERY

#### __2️⃣ Select Options__



* Framework: __React \
__
* Variant: __JavaScript \
__


#### __3️⃣ Move to Project Folder__


```
cd NFT-GALLERY
```



#### __4️⃣ Install Dependencies__


```
npm install
```



#### __5️⃣ Run Development Server__


```
npm run dev

The app will run at:
http://localhost:5173


---
```



### __🎨 Tailwind CSS Setup__


#### __1️⃣ Install Tailwind CSS__


```
npm install -D tailwindcss postcss autoprefixer
```



#### __2️⃣ Initialize Tailwind__


```
npx tailwindcss init -p
```



#### __3️⃣ Update <code>tailwind.config.js</code></strong>


```
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
```



#### __4️⃣ Add Tailwind Directives__


```
@tailwind base;
@tailwind components;
@tailwind utilities;
```



#### __5️⃣ Import CSS in <code>main.jsx</code></strong>


```
import './index.css'


---
```



### __🔗 Clone Project from GitHub__


#### __Repository URL__


```
https://github.com/ubaid0409/NFT-Gallery.git
```



#### __Clone Command__


```
git clone https://github.com/ubaid0409/NFT-Gallery.git
```



#### __Move to Project Folder__


```
cd NFT-GALLERY
```



#### __Install Dependencies__


```
npm install
```



#### __Run the App__


```
npm run dev


---
```



### __📁 Project Folder Structure__


```
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


---
```



### __🧠 Application Flow & File Explanation__


```


#### App.jsx

```



* Root component of the application \

* Wraps the app with `BrowserRouter \
`
* Defines routes: \

    * `/` → Home page \

    * `/nft/:id` → NFT details page \

* `Navbar` is visible on all pages \



---


```


#### Navbar.jsx

```



* Displays the application title \

* Styled using Tailwind CSS \

* Common navigation/header component \



---


```


#### Home.jsx

```



* Displays all NFTs in a grid layout \

* Uses `useState` for sorting state \

* Sorts NFTs by price: \

    * Low → High \

    * High → Low \

* Renders: \

    * `FilterBar \
`
    * Multiple `NFTCard` components \



---


```


#### FilterBar.jsx

```



* Provides sorting buttons \

* Updates sorting state in `Home \
`
* Controls NFT price order \



---


```


#### NFTCard.jsx

```



* Displays a single NFT card \

* Shows: \

    * Image \

    * Name \

    * Artist \

    * Price \

* Uses `Link` for navigation to details page \



---


```


#### NFTDetails.jsx

```



* Retrieves NFT ID from URL using `useParams \
`
* Finds NFT from `nfts.js \
`
* Displays complete NFT information \

* Includes a __Buy NFT__ button (UI only) \



---


```


#### nfts.js

```



* Contains static NFT data \

* Each NFT includes: \

    * `id \
`
    * `name \
`
    * `artist \
`
    * `price \
`
    * `image \
`
    * `description \
`
* Acts as a mock database \



---


### __✨ Features__



* 🔀 Price-based sorting \

* 🧭 Client-side routing \

* 📱 Fully responsive design \

* 🎨 Modern gradient UI \

* ⚡ Fast performance with Vite \



---


### __🔮 Future Enhancements__



* Backend integration \

* JWT authentication \

* Search and filters \

* Payment gateway \



---


### __👨‍💻 Author__



* __Name:__ Ubaid Hashmi \

* __GitHub:__[ https://github.com/ubaid0409](https://github.com/ubaid0409)