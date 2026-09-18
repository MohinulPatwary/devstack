import logoText from '../assets/logo-text.png'
export default function Navbar(){
    return (
        <div className='flex justify-between items-center h-20.25 w-auto  p-8 border-gray-100 shadow-sm '>
            <img src={logoText} alt="" />
            <ul className='flex justify-evenly gap-8 font-medium'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='flex items-center gap-4'>
                <button className='px-4 py-2 text-sm font-medium'>Sign In</button>
                <button className='px-4 py-2 text-sm font-medium text-white bg-linear-to-r from-pink-500 via-orange-500 to-indigo-600 rounded-full'>Sign Up</button>
            </div>
        </div>
        
        
    )
}