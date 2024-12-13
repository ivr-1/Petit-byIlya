import React from 'react';
import Image from 'next/image';

import Button from '@/app/components/elements/button';

import './home-cta.css'


function CTA ({headerText, descriptionText, contentImg, imgAlt, bgColor, buttonText, buttonLink, handleClick} ) {
    return (
        <div className="cta" style={{background: bgColor}} >
            <div className='image-container'> <Image src={contentImg} alt={imgAlt}/></div>
            <div className='text-container'>
                <div> {headerText} </div>
                <div> {descriptionText}
                    <div className='cta-button'> 
                        <Button buttonText={buttonText} buttonLink={buttonLink} handleClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default CTA;

