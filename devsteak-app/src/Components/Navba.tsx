import logoText from '../assets/logo-text.png'
export default function Navbar(){
    return (
        <div className='fixed top-0 left-0 right-0 z-50 bg-white border-b border-b-gray-100 shadow-sm'>
           <div className ="container mx-auto flex justify-between items-center h-20.5 px-8">
             <img src={logoText} alt="Logo" />
            <ul className='flex justify-evenly gap-8 font-medium'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='flex items-center gap-4'>
                <button className='px-4 py-2 text-sm font-medium cursor-pointer'>Sign In</button>
                <button className='px-4 py-2 text-sm font-medium text-white bg-linear-to-r from-pink-500 via-orange-500 to-indigo-600 rounded-full cursor-pointer'>Sign Up</button>
            </div>
           </div>
        </div>
        
        
    )
}