import React from 'react';
import Gallery from "react-photo-gallery";
import {useSlider} from "../../Providers/sliderProvider";
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup, ButtonPlay} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import style from './slider.module.css'

const SliderImg = () => {
    const {slider} = useSlider()
    return (
        <div>
            <div className={style.slider}>
                <CarouselProvider
                    naturalSlideWidth={50}
                    naturalSlideHeight={50}
                    totalSlides={slider.length}
                    interval={1000}
                    visibleSlides={1}
                    className={style.carousel}
                >

                    <Slider>
                        {
                            slider.map(({id, url})=>{
                                return (
                                    <Slide key={id} className={style.image} style={{'backgroundImage': `url(${url})`}}>
                                    </Slide>

                                )
                            })
                        }
                    </Slider>
                    <div className={style.dotGroup}>
                        <DotGroup className={style.dot}/>
                    </div>

                    <div className={style.buttons}>
                        <ButtonBack className={style.next}>Back</ButtonBack>
                        <ButtonNext className={style.next}>Next</ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
            <Gallery photos={slider}/>
        </div>
    );
};

export default SliderImg;