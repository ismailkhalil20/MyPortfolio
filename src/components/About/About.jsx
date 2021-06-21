import React from 'react'
import ReactLogo from '../../logo.svg'
import ReduxLogo from '../../assets/redux.svg'
import TailwindLogo from '../../assets/Tailwind.SVG'
import FirebaseLogo from '../../assets/Firebase.svg'
import HTMLLogo from '../../assets/HTML5.SVG'
import CSSLogo from '../../assets/CSS3.svg'

export default function About() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="w-full mb-20">
                    <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-yellow-400 mb-12">About</h1>
                    <p className=" w-full leading-relaxed text-white text-lg">My name is Ismail Khalil and I am a Frontend developer from iraq, I started learning to code in May 2020 and since then I haven't stopped, at the beginning of 2021 I was accepted in a React Bootcamp where I learned not just technical skill but soft skills like teamwork, communication and agile methodology.</p>
                    <br />
                    <p className=" w-full leading-relaxed text-white text-lg">here are some of the technical skills I can work on</p>
                </div>

                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div class="w-32 h-32 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                            <img src={ReactLogo} alt="React logo" />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-xl title-font font-medium mb-3">React</h2>
                            <p class="leading-relaxed text-indigo-200">Create reusable user interfaces from scratch.</p>
                        </div>
                    </div>

                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div class="w-32 h-32 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                           <img src={ReduxLogo} alt="Redux Logo" />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-xl title-font font-medium mb-3">Redux</h2>
                            <p class="leading-relaxed text-indigo-200">Manage the state of the application by centralizing it to get access to the same data across the application.</p>
                        </div>
                    </div>

                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div class="w-32 h-32 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                            <img src={TailwindLogo} alt="Tailwind Logo" />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-xl title-font font-medium mb-3">Tailwind</h2>
                            <p class="leading-relaxed text-indigo-200">style the web pages with Tailwind which is a utility-first CSS Framework packed with classes.</p>
                        </div>
                    </div>

                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div class="w-32 h-32 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                            <img src={FirebaseLogo} alt="Firebase logo" />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-xl title-font font-medium mb-3">Firebase</h2>
                            <p class="leading-relaxed text-indigo-200">Send and retrieve data from firebase.</p>
                        </div>
                    </div>

                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div class="w-32 h-32 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                        <img src={HTMLLogo} alt="HTML Logo" />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-xl title-font font-medium mb-3">HTML 5</h2>
                            <p class="leading-relaxed text-indigo-200">create web pages using HTML5 tags.</p>
                        </div>
                    </div>

                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div class="w-32 h-32 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                            <img src={CSSLogo} alt="CSS Logo" />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white text-xl title-font font-medium mb-3">CSS 3</h2>
                            <p class="leading-relaxed text-indigo-200">use CSS properties to style the HTML elements of the web page.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
