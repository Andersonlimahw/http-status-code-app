import { InstagramLogo, GithubLogo } from "@phosphor-icons/react";
export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-100">
            <div className="container mx-auto py-6 flex justify-between items-center">
                <p>Anderson Lima</p>
                <div className="flex items-center">
                    <a href="#" className="text-gray-100 hover:text-gray-300 mx-3">
                        <InstagramLogo size={32} />
                    </a>
                    <a href="#" className="text-gray-100 hover:text-gray-300 mx-3">
                        <GithubLogo size={32} /> 
                    </a>
                   
                </div>
            </div>
        </footer>

    )
}