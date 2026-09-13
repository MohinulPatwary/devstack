import { Suspense } from "react"
import Navbar from "./Components/Navba"
import Poster from "./Components/Poster"
import Cards from "./Components/Cards";

function App() {
  async function dataPromise (){
    const res = await fetch('/cards.jsoon');
    const data = await res.json;
    return data
  }

  

  return (
    <>
   const cardsPromise = dataPromise();
    <Navbar></Navbar>
   <Poster></Poster>
   <Suspense fallback = {<h1>Loading...</h1>}>
    <Cards dataPromise = {cardsPromise}></Cards>
   </Suspense>
   
    </>
  )
}

export default App
