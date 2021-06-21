import React from 'react'
import TwitterLogo from '../../assets/Twitter.svg'
import LinkedinLogo from '../../assets/linkedin.svg'
import GithubLogo from '../../assets/github.svg'

export default function Contact() {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-400">Contact</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-white">If you want to know more about me or you have a question, please feel free to send me a message.</p>
                </div>

                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="name" className="leading-7 text-sm text-indigo-300">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="email" className="leading-7 text-sm text-indigo-300">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="message" className="leading-7 text-sm text-indigo-300">Message</label>
                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg">Send</button>
                        </div>

                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <p className="leading-normal my-5 text-white">You can find me on.
                            </p>
                            <span className="inline-flex space-x-4">
                                <a href="https://twitter.com/IsmailKhalil_" className="w-6 h-6">
                                    <img src={TwitterLogo} alt="Twitter logo" />
                                </a>
                                <a href="https://www.linkedin.com/in/ismailkhalil20/" className="w-6 h-6">
                                    <img src={LinkedinLogo} alt="Twitter logo" />
                                </a>
                                <a href="https://github.com/ismailkhalil20" className="w-6 h-6">
                                    <img src={GithubLogo} alt="Twitter logo" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
