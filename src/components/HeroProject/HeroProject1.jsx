import React from 'react'
import Dilmun from '../../assets/Dilmun.png'

export default function HeroProject1() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={Dilmun} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-400">Dilmun
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed text-white">Online platfrom for connecting people who want to donate items or sell used products, users can create account and fill their information and post any product they want to doante or sell.</p>
                    <div className="flex justify-center">
                        <a href="https://dilmun.netlify.app/#/" className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">Live</a>
                        <a href='https://github.com/ReCoded-Org/capstone-iraq-rct-dilmun' className="ml-4 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-lg">Github</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
