import { useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';

import Section from '../components/Section';

config({ ssrFadeout: true });

const Work = () => {

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
            title={<>Our customers streamline their tedious processes with bespoke software.</>}
            desc="Here are a few projects that we've done over the years."
        >
            <div className='embla' ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <Project
                            name="ZenCase"
                            desc="We worked with ZenCase for 2 years to turn a back-office full-stack Rails application into a separate EmberJS frontend that communicates with a Rails API. We think that they have a very powerful piece of software with the potential to disrupt the legal space."
                            summary="After the software build, TJ's law firm was able to double billable time across his entire team."
                            videoLink="https://www.youtube.com/embed/jC8niM6jgyY"
                        />
                    </div>
                    <div className="embla__slide">
                        <Project
                            name="ZenCase"
                            desc="We worked with ZenCase for 2 years to turn a back-office full-stack Rails application into a separate EmberJS frontend that communicates with a Rails API. We think that they have a very powerful piece of software with the potential to disrupt the legal space."
                            summary="After the software build, TJ's law firm was able to double billable time across his entire team."
                            videoLink="https://www.youtube.com/embed/jC8niM6jgyY"
                        />
                    </div>
                </div>
            </div>
            <div className='projects-control'>
                <button className='prev-button' onClick={scrollPrev}>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8H19M8 1L1 8L8 1ZM1 8L8 15L1 8Z" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className='next-button' onClick={scrollNext}>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 8H1M12 1L19 8L12 1ZM19 8L12 15L19 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </Section>
    );
};

export default Work;

const Project = ({ name, desc, summary, videoLink }) => {
    return (
        <div className='project'>
            <div className='project-text'>
            <Fade bottom distance='20px' duration={400}>
                <h3 className='project-title'>{name}</h3>
            </Fade>
                <Fade bottom distance='20px' duration={800}>
                    <p className='project-desc'>{desc}</p>
                </Fade>
                <Fade bottom distance='20px' duration={1000}>
                    <p className='project-desc'>{summary}</p>
                </Fade>
            </div>
            <iframe className='project-video' height='340' src={videoLink} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
        </div>
    );
};