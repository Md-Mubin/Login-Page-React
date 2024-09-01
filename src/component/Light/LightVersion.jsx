// ================== All Imports
import React               from 'react'
import FormFunction        from '../Form/FormFunction'
import { Link }            from 'react-router-dom'
import { FaRegLightbulb }  from 'react-icons/fa'

const LightVersion = () => {
    return (
        <>
            <section className=' w-full h-screen bg-white'>

                {/* ================== Navbar Start ================== */}
                <nav className=' container py-9 flex justify-between relative'>

                    {/* ------ Logo Part ------ */}
                    <logo className='w-[100px]'>
                        <img src="/src/component/images/Light_logo.png" alt="Logo_image" />
                    </logo>

                    {/* ------ Sign_in Part ------ */}
                    <div className='flex gap-10'>

                        {/* ------ Sign_in Button ------ */}
                        <button className='text-black font-Roboto font-medium text-xl relative group/signIn'>Sign In
                            <span className='w-full h-[2px] absolute bg-black left-0 bottom-0 scale-0 group-hover/signIn:scale-125 transition duration-200'></span>
                        </button>

                        {/* ------ Register Button ------ */}
                        <button className='text-white font-Roboto font-medium text-base px-8 py-[10px] bg-black rounded-3xl hover:text-purple-500 transition duration-200 active:scale-95'>Register</button>
                    </div>

                    {/* ------ Dark/Light Theme Button ------ */}
                    <Link to="/" className='text-black text-[25px] absolute bottom-0 right-0'><FaRegLightbulb/></Link>
                </nav>

                {/* ================== Banner Start ================== */}
                <main className='container bottom-0 left-0 mt-[88px] flex justify-between'>

                    {/* ------ Login Page Image ------ */}
                    <img src="/src/component/images/Login Image.png" alt="loginPage_image" className='w-[600px] ' />

                    {/* ============= Form Part ============= */}
                    <ul className='w-[380px]'>

                        {/* ------- Header ------- */}
                        <h1 className='text-4xl font-Roboto font-semibold text-black flex flex-col text-center'>Hello!
                            <span>Welcome Back</span>
                        </h1>

                        {/* ============= Main Form Part ============= */}
                        <FormFunction/>

                        <ul className='mt-12 flex flex-col items-center '>
                            <li className='w-[200px] text-black text-center text-lg font-Roboto font-normal bg-white z-[10]'>Or Continue With</li>
                            <li className='w-full h-[1px] bg-black mt-[-15px]'></li>
                        </ul>

                        {/* --------- Social Links --------- */}
                        <ul className='mt-10 flex justify-between '>
                            <button className='px-8 py-3 bg-white border-2 border-slate-300 rounded-xl hover:scale-110 transition duration-200'><img src="/src/component/images/google.png"   alt="google_image" /></button>
                            <button className='px-8 py-3 bg-white border-2 border-slate-300 rounded-xl hover:scale-110 transition duration-200'><img src="/src/component/images/facebook.png" alt="facebook_image" /></button>
                            <button className='px-8 py-3 bg-white border-2 border-slate-300 rounded-xl hover:scale-110 transition duration-200'><img src="/src/component/images/apple.png"    alt="apple_image" /></button>
                        </ul>

                        {/* ============== If Doesn't Have Account ============== */}
                        <ul className='mt-[52px]'>
                            <p className='font-Roboto font-light text-xl text-black'>Don't Have An Account ?
                                <a href='#' className='font-black hover:text-purple-400 ml-2 transition duration-200'>Create Account!</a>
                            </p>
                        </ul>
                    </ul>
                </main>
            </section>
        </>
    )
}

export default LightVersion