import { useParams } from "react-router-dom";
import { nfts } from "../data/nfts";

export default function NFTDetails() {
  const { id } = useParams();
  const nft = nfts.find(n => n.id === Number(id));

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="bg-slate-900 rounded-2xl p-4 
        border border-purple-500/20">
          <img
            src={nft.image}
            alt={nft.name}
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 
        border border-purple-500/20">

          <h1 className="text-3xl font-bold text-purple-400">
            {nft.name}
          </h1>

          <p className="text-gray-400 mt-2">
            Created by <span className="text-cyan-400">{nft.artist}</span>
          </p>

          <p className="mt-6 text-gray-300 leading-relaxed">
            {nft.description}
          </p>

          <div className="mt-8 flex items-center justify-between 
          bg-slate-800 p-4 rounded-xl border border-cyan-400/30">

            <span className="text-gray-400">Current Price</span>

            <span className="text-2xl font-bold text-cyan-400">
              {nft.price} ETH
            </span>
          </div>

          <button
            className="mt-6 w-full py-3 rounded-xl font-semibold
            bg-gradient-to-r from-purple-600 to-cyan-500
            hover:opacity-90 transition">
            Buy NFT
          </button>

        </div>
      </div>
    </div>
  );
}
