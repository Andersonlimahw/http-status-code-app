import { InstagramLogo, GithubLogo } from "@phosphor-icons/react";
export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-zinc-900 text-white-100 p-2 mb-0 bottom-0">
            <div className="container mx-auto py-6 flex justify-between items-center max-w-7xl">
                <p>🍋 Anderson Lima | {year}</p>
                <div className="flex items-center">
                    <a href="https://www.instagram.com/anderson.lima.dev/" target="_blank" className="text-gray-100 hover:text-gray-300 mx-3">
                        <InstagramLogo size={32} />
                    </a>
                    <a href="https://github.com/Andersonlimahw" target="_blank" className="text-gray-100 hover:text-gray-300 mx-3">
                        <GithubLogo size={32} /> 
                    </a>
                   
                </div>
            </div>
        </footer>

    )
}