import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    var SliderText = [
        "парковка",
        "страховка",
        "бензин",
        "обслуживание"
    ]
    
    var SliderText1 = [
        "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        "Полная страховка страховка автомобиля",
        "Полный бак на любой заправке города за наш счёт",
        "Автомобиль проходит еженедельное ТО"
    ]

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index+1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index+1}.jpg`}
                        />
                    
                    <button className="b"> Подробнее</button>
                    </div>
                    
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 4}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index+1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>

            <div className="text-cont">
            {
                SliderText[slideIndex-1].toString()
            }    
            </div>

            <div className="text1">
            {
                SliderText1[slideIndex-1].toString()
            }    
            </div>

            
        </div>
    )
}
