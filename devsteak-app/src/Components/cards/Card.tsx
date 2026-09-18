// import { useState } from "react"
import type { ICard } from "../CardType"

interface CardProps {
  card : ICard;
  selectedCardInfo: ICard[]; 
  handleAddedCard: (card: ICard) => void;
  handleRemovedCard: (card: ICard) => void; 
}


export default function Card({card , selectedCardInfo, handleAddedCard, handleRemovedCard}: CardProps){

  const isAdded = selectedCardInfo.some((item) => item.id === card.id);

  function handleAddToSteak() {
    if (isAdded) {
      handleRemovedCard(card); 
    } else {
      handleAddedCard(card);
    }
  }

    return (
        <div>
              <div className="card bg-base-100 shadow-md border p-5 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <img src={card.icon} alt={card.name} className="w-10 h-10 object-contain" />
        <span className="badge badge-info badge-outline">{card.badge}</span>
      </div>
      <h2 className="text-xl font-bold">{card.name}</h2>
      <p className="text-gray-500 text-sm my-2">{card.description}</p>
      <div className="flex items-center justify-between text-xs my-3 pt-3 border-t">
        <span className="bg-gray-100 p-1.5 rounded">{card.category}</span>
        <span>{card.difficulty}</span>
        <span className="text-amber-500 font-bold">★ {card.rating}</span>
      </div>
      <button className="btn btn-neutral w-full mt-2" onClick={handleAddToSteak} disabled={isAdded }>
        {isAdded ? "Added to steak" :"Add to Stack"}
      </button>
    </div>
        </div>
    )
}