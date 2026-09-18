import type { ICard } from "../CardType"

interface RemoveStackCardProps {
    Info : ICard
    handleRemovedCard : (card : ICard) => void
}

export default function RemoveStackCard ({Info, handleRemovedCard}: RemoveStackCardProps){
    return (
        <div className="card bg-base-100 shadow-md border p-5 rounded-xl my-3">
         <h1>{Info.name}</h1>
         <button className="btn btn-error" onClick={() => handleRemovedCard(Info)}>Remove</button>
        </div>
    )
}