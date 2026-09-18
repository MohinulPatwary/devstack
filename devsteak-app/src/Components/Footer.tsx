import logoText from '../assets/logo-text.png';

export default function Footer(){
    return (
        <div className='border-t border-t-gray-200 py-8 px-4'>
            <div className = "flex justify-between container mx-auto">
                <div className="">
                    <img src={logoText} alt="Logo" />
                    <p className='text-slate-500 mt-4'>Curated tools, technologies, and resources for developers building <br></br>modern software.</p>
                    <div className='flex gap-4 mt-4 mb-4 font-bold'>
                        <h1>Github</h1>
                        <h1>Twitter</h1>
                        <h1>LinkedIn</h1>
                    </div>
                </div>
                <div> 
                    <h1 className='font-bold'>PRODUCT</h1>
                    <ul  className='text-slate-500'> 
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold'>COMPANY</h1>
                    <ul className='text-slate-500'>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold'>LEGAL</h1>
                    <ul className='text-slate-500'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between items-center container mx-auto border-t border-t-gray-200 mt-8 pt-4'>
                <h1 className='text-slate-500'>© 2026 Dev Stack. All rights reserved.</h1>
                <ul className='flex gap-4 text-slate-500'>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
                
            </div>
        </div>
    )
}