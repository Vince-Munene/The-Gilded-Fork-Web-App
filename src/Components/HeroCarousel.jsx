import React, {useState} from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";


export default function Carousel({slides}){

    const [current, setCurrent] = useState(0);

    const prevSlide = ()=>{
        setCurrent(current=> current===0 ? slides.length-1 : current-1);
    }

    const nextSlide = ()=>{
        setCurrent(current=> current=== slides.length - 1 ? 0: current + 1);
    }


    return(
        <div className='w-full h-screen overflow-hidden relative'>
            <div className='flex transition ease-out duration-400' style={{
                transform: `translateX(-${current * 100}%)`
            }}>
            {slides.map((s)=>{
            return <img src={s}/>
        })}
            </div>
            <div className='absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl'>
                <button onClick={prevSlide}>
                    <FaArrowCircleLeft/>
                </button>
                <button onClick={nextSlide}>
                    <FaArrowCircleRight/>
                </button>
            </div>
        </div>
    )
}