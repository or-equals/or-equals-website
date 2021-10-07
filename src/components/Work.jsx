import { useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Section from '../components/Section';
import Project from '../components/Project';

const Work = ({ items }) => {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        draggable: false,
        speed: 20,
        loop: true
    })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <Section
            id="work"
            theme="light"
            title={<>Our customers <span className='underline-container'>streamline their tedious processes</span> with bespoke software.</>}
            desc="Here are a few projects that we've done over the years."
        >
            <div className='projects-wrapper'>
                <div className='embla' ref={emblaRef}>
                    <div className="embla__container">
                        {items.map(project => (
                            <div className="embla__slide" key={project.fields.title}>
                                <Project
                                    name={project.fields.title}
                                    desc={documentToReactComponents(project.fields.desc)}
                                    videoLink={project.fields.videoLink}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='projects-control'>
                    <button className='prev-button' onClick={scrollPrev}>
                        <span>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8H19M8 1L1 8L8 1ZM1 8L8 15L1 8Z" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                    <button className='next-button' onClick={scrollNext}>
                        <span>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 8H1M12 1L19 8L12 1ZM19 8L12 15L19 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default Work;
