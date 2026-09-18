import type { ICard } from "../CardType"
import RemoveStackCard from "./RemoveStackCard"

interface SteakCardProps {
    selectedCardInfo : ICard[]
    handleRemovedCard : (card : ICard) => void
}

export default function Steakcard({selectedCardInfo ,handleRemovedCard}: SteakCardProps){
    return (
        <div>
        <h1>My Cart ({selectedCardInfo.length})</h1>
        {
            selectedCardInfo.map((Info, ind: number) => <RemoveStackCard key={ind} Info={Info} handleRemovedCard={handleRemovedCard}></RemoveStackCard>)
                
        }
    </div>

    )
}