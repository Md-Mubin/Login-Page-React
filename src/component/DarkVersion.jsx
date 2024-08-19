import React               from 'react'
import { FaRegLightbulb }  from 'react-icons/fa'
import { Link }            from 'react-router-dom'
import FormFunction        from './FormFunction'

const DarkVersion = () => {
    return (
        <>
            <section className=' w-full h-screen bg-[#1E1E1E]'>

                {/* ================== Navbar Start ================== */}
                <nav className=' container py-9 flex justify-between relative'>

                    {/* ------ Logo Part ------ */}
                    <header className='w-[100px] bg-[#1E1E1E]'>
                        <img src="../public/Logo.png" alt="Logo_image" />
                    </header>

                    {/* ------ Sign_in Part ------ */}
                    <div className='flex gap-10'>

                        {/* ------ Sign_in Button ------ */}
                        <button className='text-white font-Roboto font-medium text-xl relative group/signIn'>Sign In
                            <span className='w-full h-[2px] absolute bg-white left-0 bottom-0 scale-0 group-hover/signIn:scale-125 transition duration-200'></span>
                        </button>

                        {/* ------ Register Button ------ */}
                        <button className='text-black font-Roboto font-medium text-base px-8 py-[10px] bg-white rounded-3xl hover:text-purple-500 transition duration-200 active:scale-95'>Register</button>
                    </div>

                    {/* ------ Dark/Light Theme Button ------ */}
                    <Link to="/light_version" className='text-white text-[25px] absolute bottom-0 right-0'><FaRegLightbulb /> </Link>
                </nav>

                {/* ================== Banner Start ================== */}
                <main className='container bottom-0 left-0 mt-[88px] flex justify-between'>

                    {/* ------ Login Page Image ------ */}
                    <img src="../public/Login Image.png" alt="loginPage_image" className='w-[600px] ' />

                    {/* ============= Form Part ============= */}
                    <ul className='w-[380px]'>

                        {/* ------- Header ------- */}
                        <h1 className='text-4xl font-Roboto font-semibold text-white flex flex-col text-center'>Hello!
                            <span>Welcome Back</span>
                        </h1>

                        {/* ============= Main Form Part ============= */}
                        <FormFunction />

                        <ul className='mt-12 flex flex-col items-center '>
                            <li className='w-[200px] text-white text-center text-lg font-Roboto font-normal bg-[#1E1E1E] z-[10]'>Or Continue With</li>
                            <li className='w-full h-[1px] bg-white mt-[-15px]'></li>
                        </ul>

                        {/* --------- Social Links --------- */}
                        <ul className='mt-10 flex justify-between '>
                            <button className='px-8 py-3 border-2 bg-white rounded-xl hover:scale-110 transition duration-200'><img src='../public/google.png' alt="google_image" /></button>
                            <button className='px-8 py-3 border-2 bg-white rounded-xl hover:scale-110 transition duration-200'><img src='../public/facebook.png' alt="facebook_image" /></button>
                            <button className='px-8 py-3 border-2 bg-white rounded-xl hover:scale-110 transition duration-200'><img src='../public/apple.png' alt="apple_image" /></button>
                        </ul>

                        {/* ============== If Doesn't Have Account ============== */}
                        <ul className='mt-[52px]'>
                            <p className='font-Roboto font-light text-xl text-white'>Don't Have An Account ?
                                <a href='#' className='font-black hover:text-purple-400 ml-2 transition duration-200'>Create Account!</a>
                            </p>
                        </ul>
                    </ul>
                </main>
            </section>
        </>
    )
}

export default DarkVersion