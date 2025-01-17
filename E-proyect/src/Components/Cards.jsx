import { Link } from "react-router-dom";

export const Cards = () =>{
    return(
        
        
            <div className="grid grid-cols-3 place-items-center h-[450px] mt-[220px] " >
                
                <div className="flex flex-col items-center bg-neutro rounded-md h-[450px] w-96 shadow-2xl transition ease-in-out delay-150 hover:translate-y-2 gap-4">
                    <Link to = "/" ><img src="./public/portaweb.jpg" className="h-60 min-w-80 bg-neutro shadow-lg rounded-sm "></img></Link>
                    <h1 className="p-3 font-black text-lg rounded-3xl bg-green-300"><Link to="/"> Mi Portafolio </Link></h1>
                    <p className="pl-8 pr-7 text-sm text-justify">Este es mi proyecto de portafolio, desarrollado desde cero con tecnologías modernas como Vite.js, React, y Tailwind CSS. Implementé un diseño modular con componentes reutilizables y utilicé hooks para la gestión eficiente del estado. ¡Estas aqui! </p>
                </div>
                
                <div className="  flex items-center justify-center text-2xl font-bold   bg-trans rounded-md h-[450px] w-96 shadow-2xl transition ease-in-out delay-150 hover:translate-y-2  "><h1 className="p-4 rounded-3xl bg-green-300 shadow-md ">Waiting</h1></div>
                <div className=" flex items-center justify-center text-2xl font-bold    bg-trans rounded-md h-[450px] w-96 shadow-2xl transition ease-in-out delay-150 hover:translate-y-2  "> <h1 className="p-4 rounded-3xl bg-green-300 shadow-md">Waiting</h1></div>
            </div>
        
        

    );
};