import Image from "next/image";
import Logo from '../../../public/images/logo.svg';
import { useState } from "react";
import Hamburger from '../../../public/images/icons/hamburger.svg';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <main className="">
            {/* Main Header */}
            <div className="container pt-16 flex items-center justify-between max-lg:p-4">
                <Image src={Logo} alt={'Image'} className="w-auto" />

                {/* Desktop Menu */}
                <ul className={`flex items-center gap-6 ${menuOpen ? 'block' : 'hidden'} md:flex lg:items-center`}>
                    <li><a href="#">Docs</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Demo</a></li>
                    <li><a href="#">LeaderBoards</a></li>
                </ul>

                {/* Hamburger Menu for mobile */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <Image src={Hamburger} alt="Hamburger Menu" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="lg:hidden bg-[#212121] w-full h-full z-10 fixed left-0 top-0 p-6">
                    {/* Close Button */}
                    <button onClick={toggleMenu} className="absolute right-6 top-6 focus:outline-none">
                        X
                    </button>
                    <ul className='flex flex-col items-center gap-6 mt-12'>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Demo</a></li>
                        <li><a href="#">LeaderBoards</a></li>
                    </ul>
                </div>
            )}
        </main>
    );
}
