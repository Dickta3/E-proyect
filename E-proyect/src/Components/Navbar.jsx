import { Link } from "react-router-dom"



export const Navbar = () =>{

    return(
        <nav className=" bg-trans drop-shadow-md">
            <div className="max-w-screen-xl mx-auto min-h-14 flex items-center">
                <Link to="/" className="flex space-x-2 rtl:space-x-reverse">
                    <img src="./public/Maleta.png" className="h-7" alt="" loading="lazy" />
                    <span className="self-center text-base font-semibold whitespace-nowrap dark:text-white"> Mi Portafolio</span>
                </Link>
                
            </div>
        </nav>
    )   
}