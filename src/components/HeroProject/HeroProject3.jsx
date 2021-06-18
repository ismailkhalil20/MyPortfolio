import React from 'react'
import HangmanGame from '../../assets/HangmanGame.jpg'

export default function HeroProject3() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={HangmanGame} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-400">Hangman Game
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed text-white">A fun game to play where you have to guess the letters of the word before you run out of chances.</p>
                    <div className="flex justify-center">
                        <a href="https://grass-team-hangman-reactjs.netlify.app/" className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">Live</a>
                        <a href="https://github.com/Dhuha9/hangman_react_js" className="ml-4 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded text-lg">Github</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
