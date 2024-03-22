"use client"
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '@/assests/banner1.jpg';
import img2 from '@/assests/banner2.jpg';
import img3 from '@/assests/banner3.jpg';
import img4 from '@/assests/banner4.jpg';

const Banner = () => {
    return (
        <div className="relative">
            <Carousel
                infiniteLoop
                autoPlay
                showThumbs={false}
                showArrows={false}
                stopOnHover
                showStatus={false}
                useKeyboardArrows
            >
                <div className="relative">
                    <Image src={img1} className='object-cover h-[100vh]' alt="Imag2" height={500} width={500}/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <h1 className='lg:text-2xl md:text-2xl text-sm text-white text-center'>Adventures Await in Bangladesh</h1>
                        <h2 className="lg:text-5xl md:text-3xl text-xl  text-white text-center">Dive into a World of Wonder with LET&apos;S GO</h2>
                    </div>
                </div>
                <div className="relative">
                    <Image src={img2} className='object-cover h-[100vh]' alt="Imag2" height={500} width={500}/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <h1 className='lg:text-2xl md:text-2xl text-sm text-white text-center'>Adventures Await in Bangladesh</h1>
                        <h2 className="lg:text-5xl md:text-3xl text-xl  text-white text-center">Dive into a World of Wonder with LET&apos;S GO</h2>
                    </div>
                </div>
                <div className="relative">
                    <Image src={img3} className='object-cover h-[100vh]' alt="Imag2" height={500} width={500}/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <h1 className='lg:text-2xl md:text-2xl text-sm text-white text-center'>Adventures Await in Bangladesh</h1>
                        <h2 className="lg:text-5xl md:text-3xl text-xl  text-white text-center">Dive into a World of Wonder with LET&apos;S GO</h2>
                    </div>
                </div>
                <div className="relative">
                    <Image src={img4} className='object-cover h-[100vh]' alt="Imag2" height={500} width={500}/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <h1 className='lg:text-2xl md:text-2xl text-sm text-white text-center'>Adventures Await in Bangladesh</h1>
                        <h2 className="lg:text-5xl md:text-3xl text-xl  text-white text-center">Dive into a World of Wonder with LET&apos;S GO</h2>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
