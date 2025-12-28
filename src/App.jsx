import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NFTDetails from "./pages/NFTDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft/:id" element={<NFTDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
