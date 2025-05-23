"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className="bg-white sticky top-0 z-50">
            <header className="max-w-[1200px] mx-auto flex justify-between items-center p-4">
                <h1>
                    <Link href="/" className="hover:text-gray-600 transition-colors text-2xl flex gap-2">
                        <Image src="/logo.png" alt="Day Dreamers Dave" width={50} height={50} />
                        <Image src="/logo-text.svg" alt="Day Dreamers Dave" width={60} height={50} />
                    </Link>
                </h1>
                <div className="hidden md:block">
                    <menu>
                        <ul className="flex gap-8">
                            <li>
                                <Link href="/#videos" className="nav-btn text-2xl">Videos</Link>
                            </li>
                            <li>
                                <Link href="/#contacto" className="nav-btn text-2xl">Contacto</Link>
                            </li>
                        </ul>
                    </menu>
                </div>
                <div className="md:hidden">
                    <button 
                        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                        onClick={() => {
                            const mobileMenu = document.getElementById('mobile-menu');
                            mobileMenu?.classList.toggle('open');
                        }}
                        aria-label="Toggle menu"
                    >
                        <span className="block w-8 h-0.5 bg-black transition-all duration-300"></span>
                        <span className="block w-8 h-0.5 bg-black transition-all duration-300"></span>
                        <span className="block w-8 h-0.5 bg-black transition-all duration-300"></span>
                    </button>
                    <div id="mobile-menu" className="mobile-menu fixed left-0 right-0 top-[86px] bg-white shadow-lg p-4">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link 
                                    href="/#videos" 
                                    className="nav-btn text-2xl block py-2"
                                    onClick={() => {
                                        const mobileMenu = document.getElementById('mobile-menu');
                                        mobileMenu?.classList.remove('open');
                                    }}
                                >Videos</Link>
                            </li>
                            <li>
                                <Link 
                                    href="/#contacto" 
                                    className="nav-btn text-2xl block py-2"
                                    onClick={() => {
                                        const mobileMenu = document.getElementById('mobile-menu');
                                        mobileMenu?.classList.remove('open');
                                    }}
                                >Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}
