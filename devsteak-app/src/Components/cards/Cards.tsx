import { use, useState } from "react"
import type { ICard } from "../CardType";
import Card from "./Card";
import StackCard from "./StackCard";





interface CardsProps {
  dataPromise: Promise<ICard[]>;
}

export default function Cards({dataPromise} : CardsProps){ 

    const cards = use(dataPromise) 
    // console.log(cards)
    const [selectedCardInfo, setSelectedCardInfo] = useState<ICard[]>([])

  
  const handleAddedCard = (card: ICard) => {
    setSelectedCardInfo((prev) => [...prev, card]);
  };

 
  const handleRemovedCard = (card: ICard) => {
    setSelectedCardInfo((prev) => prev.filter((item) => item.id !== card.id));
  };
    
    return (
        
      <main className="container w-full">
        <div className="space-y-3 my-8">
          <h1 className="font-bold text-5xl">Explore the <span className=" bg-linear-to-r from-pink-500 via-orange-500 to-blue-950 bg-clip-text text-transparent">Technologies</span></h1>
          <p className="font-bold text-1xl text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
        </div>
          <section className="grid grid-cols-10 w-full gap-4">
            <div className="col-span-7 grid grid-cols-3 gap-4">
          
          {
             cards.map((card, ind: number) => <Card key = {ind} card = {card} handleAddedCard = {handleAddedCard} selectedCardInfo={selectedCardInfo} handleRemovedCard={handleRemovedCard}></Card>)
          }
        </div>
        <div className="col-span-3">
          <h1>cart</h1>
          <StackCard selectedCardInfo={selectedCardInfo} handleRemovedCard={handleRemovedCard} ></StackCard>
        </div>
          </section>
      </main>
    )
}