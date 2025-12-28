import { Link } from "react-router-dom";

export default function NFTCard({ nft }) {
  return (
    <div className="bg-slate-900 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition">
      <img src={nft.image} alt={nft.name} className="h-48 w-full object-cover rounded-t-2xl" />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{nft.name}</h3>
        <p className="text-sm text-gray-400">Artist: {nft.artist}</p>
        <p className="text-cyan-400 font-bold mt-2">{nft.price} ETH</p>

        <Link
          to={`/nft/${nft.id}`}
          className="block text-center mt-6 w-full py-3 rounded-xl font-semibold
            bg-gradient-to-r from-purple-600 to-cyan-500
            hover:opacity-90 transition">
          View Details
        </Link>
      </div>
    </div>
  );
}
