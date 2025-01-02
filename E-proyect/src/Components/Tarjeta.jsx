import { Localitation } from '../Components/icons/Localitation.jsx';
import { IconWork } from '../Components/icons/iconWork.jsx';

export const Tarjeta = () => {
    return (
        <section className="absolute left-[120px] top-[70px] flex h-[100] w-[100]">

            <div className="h-[450px] w-[500px] bg-neutro drop-shadow-2xl rounded-md p-2 ">
                <div className=" font-bold text-2xl p-4 ml-5">Justin Ditta Peña</div>

                <hr />

                <div className="flex p-2 ml-6  ">
                <IconWork></IconWork> Practicante de desarrollo de software</div>

                <div className="flex p-2 ml-6 "> 
                <Localitation></Localitation> Galapa - Colombia </div>
                <hr/>
        
                <div className="p-4 ml-4 mr-4">Desarrollador web principiante, con habilidades para crear interfaces de usuario atractivas, funcionales, así como en la gestión de datos y versiones de proyectos. Enfocado en escribir código estructurado y en aprender continuamente. Con capacidad para colaborar en equipo, optimizar la experiencia del usuario y contribuir al desarrollo de soluciones innovadoras y eficientes.</div>
            </div>

        </section>
    )
}