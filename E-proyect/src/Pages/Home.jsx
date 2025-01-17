import { Navbar } from '../Components/Navbar.jsx'
import { Tarjeta } from '../Components/Tarjeta.jsx'
import {Article_Image } from '../Components/Article_image.jsx'
import { Cards } from '../Components/Cards.jsx'
import { Footer } from '../Components/Footer.jsx'


export const Homepage = () => {
    return (
        <>
        <Navbar></Navbar>
        <section className='flex justify-center gap-[200px] mt-20'>
            <Tarjeta></Tarjeta>       
            <Article_Image></Article_Image>
        </section>
        <Cards></Cards>
        <Footer></Footer>            
        </>

    )
}