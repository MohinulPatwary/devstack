import { Suspense } from "react"
import Navbar from "./Components/Navba"
import Poster from "./Components/Poster"
import Cards from "./Components/cards/Cards";
import type { ICard } from "./Components/CardType";
import Footer from "./Components/Footer";



function App() {
  async function dataPromise (): Promise<ICard[]>{
    const res = await fetch('/Cards.json');
    const data = await res.json()
    return data
  }

  

  return (
    <>

    <Navbar></Navbar>
   <Poster></Poster>
   <Suspense fallback = {<h1>Loading...</h1>}>
    <Cards dataPromise = {dataPromise()}></Cards>
   </Suspense>
   <Footer></Footer>
   
    </>
  )
}

export default App
