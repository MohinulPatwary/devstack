import type { ICard } from "../CardType"
import RemoveStackCard from "./RemoveStackCard"

interface SteakCardProps {
    selectedCardInfo : ICard[]
    handleRemovedCard : (card : ICard) => void
    handleClearAll : () => void
}

export default function Steakcard({selectedCardInfo ,handleRemovedCard , handleClearAll}: SteakCardProps){
    return (
        <div>
        <h1>My Cart ({selectedCardInfo.length})</h1>
        {
            selectedCardInfo.map((Info, ind: number) => <RemoveStackCard key={ind} Info={Info} handleRemovedCard={handleRemovedCard}></RemoveStackCard>)
                
        }
        {selectedCardInfo.length > 0 ? (
    <button className="btn btn-sm btn-outline btn-error" onClick={handleClearAll}>
      Clear All
    </button>
         ) : null}
    </div>

    )
}