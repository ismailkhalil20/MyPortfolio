import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import GithubIcon from '../../assets/github.svg'
import LinkedinIcon from '../../assets/linkedin.svg'

export default function Header() {
    const [Open, setOpen] = useState('hidden')

    const Click = () => {
        if( Open === 'flex') {
            setOpen('hidden')
        } else {
            setOpen('flex')
        }
    }
    return (
        <div>
            <div className="h-24 mx-10 lg:max-w-4xl lg:m-auto xl:max-w-5xl flex items-center justify-between">
                <img src={Logo} alt="logo" className="w-52" />
                <div className="hidden sm:flex text-white gap-7">
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <div className="hidden sm:flex flex-end gap-3">
                    <a href="https://github.com/ismailkhalil20"><img src={GithubIcon} alt="github" className="w-8" /></a>
                    <a href="https://www.linkedin.com/in/ismailkhalil20/"><img src={LinkedinIcon} alt="github" className="w-8" /></a>
                </div>
                <img onClick={() => Click()} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAMUlEQVRIie3SoREAIADDwJT9dy6KCUAAl1dVVQF9L2u07dHjJADj5KnuZEXaZ0V6wATQzQwKQvoBVgAAAABJRU5ErkJggg==" alt="hamburger" className="sm:hidden" />
            </div>
            
            <div className={`sm:hidden ${Open} flex-col text-white`}>
                <a href="#" className="px-3 py-2 rounded-md text-base font-medium">Projects</a>
                <a href="#" className="px-3 py-2 rounded-md text-base font-medium">About</a>
                <a href="#" className="px-3 py-2 rounded-md text-base font-medium">Contact</a>
                <div className="flex flex-end gap-5 px-3 py-5">
                    <a href="https://github.com/ismailkhalil20"><img src={GithubIcon} alt="github" className="w-8" /></a>
                    <a href="https://www.linkedin.com/in/ismailkhalil20/"><img src={LinkedinIcon} alt="github" className="w-8" /></a>
                </div>
            </div>
        </div>
    )
}
