import React from 'react'
import Photo from '../../assets/IsmailKhalil.jpg'

export default function Hero() {
    return (
        <div className="flex flex-wrap justify-around items-center gap-2 my-32">
            <div className="w-10/12 sm:w-8/12 md:w-4/12">
                <img src={Photo} alt="Ismail Khalil" className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
            </div>
            <div className="max-w-sm lg:max-w-lg my-10">
                <h1 className="text-4xl text-orange-400 font-mono">Hey, I am Ismail, a Frontend Developer</h1>
                <p className="my-5 text-lg">I am a developer, I am passionate about building software and learning new technologies, I am best at forntend now but learning about the backend.</p>
                <button type="button" className="w-32 h-12 text-lg bg-yellow-500 hover:bg-yellow-400">Contact</button>
            </div>
        </div>
    )
}
