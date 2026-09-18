import type { ICard } from "../CardType"

interface RemoveStackCardProps {
    Info : ICard
    handleRemovedCard : (card : ICard) => void
}

export default function RemoveStackCard ({Info, handleRemovedCard}: RemoveStackCardProps){
    return (
        <div className="flex items-center justify-between w-full p-4 border border-gray-100 rounded-2xl bg-white shadow-sm mb-3">
         <div className="flex">
            <div>
                <img src={Info.icon} alt={Info.name} className="w-10 h-10 object-contain" />
            </div>
            <div>
                <h1>{Info.name}</h1>
                <p>{Info.category}</p>
            </div>
         </div>
         <button className="btn btn-error" onClick={() => handleRemovedCard(Info)}>X</button>
        </div>
    )
}