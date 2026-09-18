import type { ICard } from "../CardType"
import RemoveStackCard from "./RemoveStackCard"

interface SteakCardProps {
    selectedCardInfo : ICard[]
    handleRemovedCard : (card : ICard) => void
    handleClearAll : () => void
}

export default function Steakcard({selectedCardInfo ,handleRemovedCard , handleClearAll}: SteakCardProps){
    return (
        <div className="w-auto bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col gap-5 font-sans">
         <div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">Your Stack</h3>
           <p className="text-sm text-gray-400 font-medium">
            {selectedCardInfo.length > 0 ? `${selectedCardInfo.length} Technology Selected` : "No Technology Selected"}
           </p>
        </div>
        {selectedCardInfo.length > 0 ? (
            <div>
        {
            selectedCardInfo.map((Info, ind: number) => <RemoveStackCard key={ind} Info={Info} handleRemovedCard={handleRemovedCard}></RemoveStackCard>)
                
        }
        </div>
        ) :
         <div className="border border-dashed border-gray-200 rounded-xl p-6 text-center ">
          <p className="text-sm text-gray-400 font-medium">Your stack is empty.</p>
        </div> }

        {selectedCardInfo.length > 0 ? (
        <button className="w-full py-2.5 border border-red-200 hover:border-red-300 rounded-xl text-red-600 text-sm font-bold bg-white transition-colors" onClick={handleClearAll}>
            Remove All
        </button>
               ) : null}
       </div>

    )
}