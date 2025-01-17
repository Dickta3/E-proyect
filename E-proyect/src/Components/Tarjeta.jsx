import { Tooltip } from '../Components/hooks/Tooltip.jsx';
import {Telephone} from '../Components/icons/Telephone.jsx'
import { Github } from '../Components/icons/Github.jsx';
import { Linkedin } from '../Components/icons/Linkedin.jsx';
import { Localitation} from '../Components/icons/Localitation.jsx';
import { IconWork } from '../Components/icons/iconWork.jsx';
import { Link } from 'react-router-dom';

export const Tarjeta = () => {
    return (


            <section className="h-[450px] w-[500px] bg-neutro drop-shadow-2xl rounded-md p-2 transition ease-in-out delay-150 hover:translate-y-2">
                <div className=" font-bold text-3xl p-4 ml-5">Justin Ditta Peña</div>
                <hr className=''/> 
                <div className="flex p-2 ml-6  ">
                <IconWork></IconWork> Practicante de desarrollo de software</div>
                <div className="flex p-2 ml-6 "> 
                <Localitation></Localitation> Galapa - Colombia </div>
                <hr/> 
                <div className="bg-neutro drop-shadow-md p-4 ml-4 mr-4 mt-2 text-justify">Desarrollador web principiante, con habilidades para crear interfaces de usuario atractivas, funcionales junto a la gestión de datos y versiones de proyectos. Ademas enfocado en escribir código estructurado y en aprender continuamente. Con capacidad para colaborar en equipo, optimizar la experiencia del usuario y contribuir al desarrollo de soluciones innovadoras y eficientes.</div>
                <div className='flex place-content-center p-4 mt-4 gap-8'>

                    <Tooltip content="Github">
                        <Link to = "https://github.com/Dickta3?tab=repositories">
                            <Github></Github>
                        </Link>
                    </Tooltip>

                    <Tooltip content="Linkedin">
                        <Link to="https://www.linkedin.com/in/justin-ditta-pe%C3%B1a-852a93210/" > 
                        <Linkedin></Linkedin>
                        </Link>
                        
                    </Tooltip>
                    <Tooltip content="3007897644">
                        <Telephone></Telephone>
                    </Tooltip>
                    
                </div>
            </section>
    );
};