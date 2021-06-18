import React from 'react'
import WeatherApp from '../../assets/WeatherApp.png'

export default function HeroProject2() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-400">Weather application
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed text-white">An online website for checking the weather condition for a specific location you are searching for, you can also see the weather forecast for the next few days.</p>
                    <div className="flex justify-center">  
                        <a href="https://github.com/ismailkhalil20/weather_app_js" className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded text-lg">Github</a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-16">
                    <img className="object-cover object-center rounded" alt="hero" src={WeatherApp} />
                </div>
            </div>
        </section>
    )
}
