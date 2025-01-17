export const Article_Image = () => {
    return (
        <>
        <div className=" transition ease-in-out delay-150 hover:translate-y-2">
            <img src="./public/man.png" alt="" className="h-[299px] w-[26rem]  rounded-3xl "   />
            <div className="p-2 flex flex-col items-center backdrop-opacity-10 bg-neutro rounded-md shadow-2xl " >
                <p className=" w-[400px] p-2 backdrop-opacity-10 text-sm text-justify"> Bienvenido a "Mi Portafolio" Aquí podrás explorar mi perfil profesional y descubrir información de interés, como mi experiencia, habilidades, capacidades, fortalezas y una recopilación de mis proyectos en el ámbito del desarrollo de software. " </p>
                <svg  width={24} height={24} className="h-[30px] w-[20px] mt-[10px] animate-bounce cursor-pointer" >
            <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0h24zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.105.074.014.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018zm.264-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.092.01-.009.004-.011.017-.43-.003-.012-.01-.01-.184-.092z" />
                <path
                fill="#09244B"
                d="M12.707 14.536a1 1 0 01-1.414 0l-2.829-2.829A1 1 0 019.172 10h5.656a1 1 0 01.708 1.707l-2.829 2.829z"
                />
            </g>
            </svg>
            </div>
        </div>
        </>
        
    )
}



