import React from 'react';
import imageOne from '../../images/carosel/image-1.png';
import imageTwo from '../../images/carosel/image-2.png';
import imageThree from '../../images/carosel/image-3.png';

const HomeSlider = () => {
    return (
        <div>
            <div class="carousel md:h-screen h-80 w-full">
                <div id="slide1" class="carousel-item relative w-full bg-cover bg-center" style={{
                    background: `url(${imageOne})`
                }}>
                    <div className='flex justify-center items-center m-auto '>
                        
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full bg-cover bg-center">
                    <img src={imageTwo} class="w-full" alt='imageTwo' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={imageThree} class="w-full" alt='imageThree' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;