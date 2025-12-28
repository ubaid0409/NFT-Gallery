import { useState } from "react";
import { nfts } from "../data/nfts";
import NFTCard from "../components/NFTCard";
import FilterBar from "../components/FilterBar";

export default function Home() {
  const [sort, setSort] = useState("");

  const sortedNFTs = [...nfts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  }); 

  return (
    <div className="p-6 min-h-screen bg-slate-950 text-white">
      <FilterBar setSort={setSort} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedNFTs.map(nft => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
}
