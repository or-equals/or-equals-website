import { useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

import Head from 'next/head';
import Link from 'next/link';

import Main from '../components/Main';
import Services from '../components/Services';
import Work from '../components/Work';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {

    const [emblaRef2, emblaApi2] = useEmblaCarousel({
        draggable: false,
        speed: 20,
        loop: true,
        slidesToScroll: 1,
        align: 'start'
    })

    const scrollPrevTestimony = useCallback(() => {
        if (emblaApi2) emblaApi2.scrollPrev()
    }, [emblaApi2])

    const scrollNextTestimony = useCallback(() => {
        if (emblaApi2) emblaApi2.scrollNext()
    }, [emblaApi2])

    return (
        <>
            <Head>
                <title>Or Equals - Award Winning Business Software Development</title>
                <meta name="description" content="We are Elixir software development consultants who specialize in delivering massive cost reductions to business owners by eliminating time-intensive processes." />

                {/* OGP Tags */}
                <meta property="og:title" content="Or Equals - Award Winning Business Software Development" />
                <meta property="og:description" content="We are Elixir software development consultants who specialize in delivering massive cost reductions to business owners by eliminating time-intensive processes." />
                <meta property="og:image" content="https://media.discordapp.net/attachments/886520063073595422/892489087339102318/thumbnail.png?width=969&height=509" />

                {/* Twitter Cards */}
                <meta name="twitter:title" content="Or Equals - Award Winning Business Software Development"></meta>
                <meta name="twitter:description" content="We are Elixir software development consultants who specialize in delivering massive cost reductions to business owners by eliminating time-intensive processes."></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
            </Head>

            <Header />
            <Main />
            <Services />
            <Work />
            <About />

            <section className='testimonials-section'>
                <div className='testimonials-container'>
                    <div className='testimonials-header'>
                        <Fade bottom distance='20px' duration={400}>
                            <h2 className='testimonials-title'>Look at what our clients say about our services.</h2>
                        </Fade>
                        <div className='testimonials-control'>
                            <button className='prev-button' onClick={scrollPrevTestimony}>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8H19M8 1L1 8L8 1ZM1 8L8 15L1 8Z" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className='next-button' onClick={scrollNextTestimony}>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 8H1M12 1L19 8L12 1ZM19 8L12 15L19 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='embla' ref={emblaRef2}>
                        <div className='embla__container'>
                            <div className='embla__slide' id='testimony-slide'>
                                <Testimony
                                    text='Slide 1'
                                    name='John Doe'
                                    designation='CTO, ZenDesk'
                                />
                            </div>
                            <div className='embla__slide' id='testimony-slide'>
                                <Testimony
                                    text='Slide 2'
                                    name='John Doe'
                                    designation='CTO, ZenDesk'
                                />
                            </div>
                            <div className='embla__slide' id='testimony-slide'>
                                <Testimony
                                    text='Slide 3'
                                    name='John Doe'
                                    designation='CTO, ZenDesk'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

const Testimony = ({ text, name, designation }) => {
    return (
        <div className='testimony'>
            <svg width="41" height="33" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.1 32.65C11.8667 32.65 14.1 31.8333 15.8 30.2C17.5 28.5333 18.35 26.3833 18.35 23.75C18.35 21.5833 17.7333 19.75 16.5 18.25C15.2667 16.75 13.5833 15.7333 11.45 15.2C11.65 13.9 12.0667 12.4667 12.7 10.9C13.3667 9.33333 14.1167 7.86667 14.95 6.5C15.8167 5.1 16.65 4.03333 17.45 3.3L13.5 0C9.3 3.43333 6 7.18333 3.6 11.25C1.2 15.3167 0 19.1833 0 22.85C0 25.8833 0.816667 28.2833 2.45 30.05C4.11667 31.7833 6.33333 32.65 9.1 32.65Z" fill="black" />
                <path d="M31.4496 32.65C34.2163 32.65 36.4496 31.8333 38.1496 30.2C39.8496 28.5333 40.6996 26.3833 40.6996 23.75C40.6996 21.5833 40.0829 19.75 38.8496 18.25C37.6163 16.75 35.9329 15.7333 33.7996 15.2C33.9996 13.9 34.4163 12.4667 35.0496 10.9C35.7163 9.33333 36.4663 7.86667 37.2996 6.5C38.1663 5.1 38.9996 4.03333 39.7996 3.3L35.8496 0C31.6496 3.43333 28.3496 7.18333 25.9496 11.25C23.5496 15.3167 22.3496 19.1833 22.3496 22.85C22.3496 25.8833 23.1663 28.2833 24.7996 30.05C26.4663 31.7833 28.6829 32.65 31.4496 32.65Z" fill="#FFCC00" />
            </svg>
            <p className='testimony-text'>{text}</p>
            <div className='testimony-footer'>
                <div className='user-info'>
                    <div className='user-avatar'>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50" fill="#FFCC00" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M50 45C52.3869 45 54.6761 44.0518 56.364 42.364C58.0518 40.6761 59 38.3869 59 36C59 33.6131 58.0518 31.3239 56.364 29.636C54.6761 27.9482 52.3869 27 50 27C47.6131 27 45.3239 27.9482 43.636 29.636C41.9482 31.3239 41 33.6131 41 36C41 38.3869 41.9482 40.6761 43.636 42.364C45.3239 44.0518 47.6131 45 50 45V45ZM29 72C29 69.2422 29.5432 66.5115 30.5985 63.9636C31.6539 61.4158 33.2007 59.1008 35.1508 57.1508C37.1008 55.2007 39.4158 53.6539 41.9636 52.5985C44.5115 51.5432 47.2422 51 50 51C52.7578 51 55.4885 51.5432 58.0364 52.5985C60.5842 53.6539 62.8992 55.2007 64.8492 57.1508C66.7993 59.1008 68.3461 61.4158 69.4015 63.9636C70.4568 66.5115 71 69.2422 71 72H29Z" fill="#111111" />
                        </svg>
                    </div>
                    <div className='user-details'>
                        <h6 className='user-name'>{name}</h6>
                        <p className='user-designation'>{designation}</p>
                    </div>
                </div>
                <div className='user-socials'>
                    <Link href='https://linkedin.com'>
                        <a target='_blank'>
                            <svg svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.7143 0H2.27857C1.02143 0 0 1.03571 0 2.30714V29.6929C0 30.9643 1.02143 32 2.27857 32H29.7143C30.9714 32 32 30.9643 32 29.6929V2.30714C32 1.03571 30.9714 0 29.7143 0ZM9.67143 27.4286H4.92857V12.1571H9.67857V27.4286H9.67143ZM7.3 10.0714C5.77857 10.0714 4.55 8.83571 4.55 7.32143C4.55 5.80714 5.77857 4.57143 7.3 4.57143C8.81429 4.57143 10.05 5.80714 10.05 7.32143C10.05 8.84286 8.82143 10.0714 7.3 10.0714ZM27.45 27.4286H22.7071V20C22.7071 18.2286 22.6714 15.95 20.2429 15.95C17.7714 15.95 17.3929 17.8786 17.3929 19.8714V27.4286H12.65V12.1571H17.2V14.2429H17.2643C17.9 13.0429 19.45 11.7786 21.7571 11.7786C26.5571 11.7786 27.45 14.9429 27.45 19.0571V27.4286Z" fill="#A4A4B1" />
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;