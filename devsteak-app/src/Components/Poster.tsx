import bannerStack from '../assets/banner-stack.png'

export default function Poster(){
    return (
        <main className='flex justify-between items-center container mx-auto'>
           <div>
             <div>
                <h1 className="font-bold text-6xl">Build Your Ideal</h1>
                <h1 className='font-bold text-6xl bg-linear-to-r from-pink-500 via-orange-500 to-blue-950 bg-clip-text text-transparent'>Development Stack</h1>
                <p>Explore frontend, backend, database, and tooling options,<br />
                      compare them side by side, and put together the stack that fits your <br />
                       next project.</p>

         <div>
               <button className="px-6 py-3 font-semibold text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 bg-linear-to-r from-pink-500 via-orange-500 to-indigo-600">
    Explore Technologies
     </button>
     <button className="px-6 py-3 font-semibold rounded-xl border border-black hover:bg-gray-50 transition-colors duration-200">
    Explore Technologies
     </button>
         </div>

            </div>
           </div>
            <div>
                <img src={bannerStack} alt="Banner stack" className=' bg-cover' />
            </div>
            
        </main>
    )
}

