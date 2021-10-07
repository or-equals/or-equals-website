import { useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import Fade from 'react-reveal/Fade';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Image from 'next/image';

import TestimonyCard from './TestimonyCard';

const Testimonies = ({ items }) => {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        draggable: false,
        speed: 20,
        loop: true,
        slidesToScroll: 1,
        align: 'start'
    });

    const scrollPrevTestimony = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNextTestimony = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    return (
        <section className='testimonials-section'>
            <div className='testimonials-container'>
                <div className='testimonials-header'>
                    <Fade bottom distance='20px' duration={200}>
                        <h2 className='testimonials-title'>Take a look at <span className='underline-container'>what our clients say</span> about our services.</h2>
                    </Fade>
                    <div className='testimonials-control'>
                        <button className='prev-button' onClick={scrollPrevTestimony}>
                            <span>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8H19M8 1L1 8L8 1ZM1 8L8 15L1 8Z" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                        <button className='next-button' onClick={scrollNextTestimony}>
                            <span>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 8H1M12 1L19 8L12 1ZM19 8L12 15L19 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='embla' ref={emblaRef}>
                    <div className='embla__container'>
                        {items.map(testimony => (
                            <div className='embla__slide' id='testimony-slide'>
                                <TestimonyCard
                                    testimony={documentToReactComponents(testimony.fields.testimony)}
                                    name={testimony.fields.name}
                                    designation={testimony.fields.designation}
                                    profileImage={testimony.fields.profileImage ? `https://${testimony.fields.profileImage.fields.file.url.slice(2)}` : null}
                                    twitter={testimony.fields.twitterLink ? testimony.fields.twitterLink : null}
                                    linkedin={testimony.fields.linkedInLink ? testimony.fields.linkedInLink : null}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonies;