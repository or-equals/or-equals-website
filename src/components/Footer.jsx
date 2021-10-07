import { openPopupWidget } from 'react-calendly';

import Link from 'next/link';

const Footer = () => {

    const scrollTop = () => {
        scrollTo(0, 0);
    };

    const openCalendly = () => {
        openPopupWidget({
            url: 'https://calendly.com/or-equals/30-minute-discovery-call',
        })
    };

    return (
        <footer className='footer' id='contact'>
            <div className='footer-container'>
                <div className='footer-main'>
                    <h2 className='footer-title'><span className='underline-dark'>Ready to elevate</span> your business? Schedule an appointment with us today.</h2>
                    <button
                        className='button_yellow'
                        onClick={openCalendly}
                    >
                        Schedule an appointment
                    </button>
                    <div className='footer-links'>
                        <nav className='footer-list'>
                            <h6 className='footer-list__title'>Links</h6>
                            <Link href="/">
                                <a className='footer-list__link' onClick={scrollTop}>
                                    Home
                                </a>
                            </Link>
                            <Link href="#services">
                                <a className='footer-list__link'>
                                    Services
                                </a>
                            </Link>
                            <Link href="#work">
                                <a className='footer-list__link'>
                                    Work
                                </a>
                            </Link>
                            <Link href="#about">
                                <a className='footer-list__link'>
                                    About
                                </a>
                            </Link>
                            <Link href="#contact">
                                <a className='footer-list__link'>
                                    Contact
                                </a>
                            </Link>
                        </nav>
                        <nav className='footer-list'>
                            <h6 className='footer-list__title'>Socials</h6>
                            <Link href="https://twitter.com/joshuaplicque">
                                <a className='footer-list__link' target='_blank' rel='noreferrer'>
                                    Twitter
                                </a>
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCFQRl_6qzOpPGVtrFw7a_Jw">
                                <a className='footer-list__link' target='_blank' rel='noreferrer'>
                                    YouTube
                                </a>
                            </Link>
                            <Link href="https://www.linkedin.com/company/or-equals">
                                <a className='footer-list__link' target='_blank' rel='noreferrer'>
                                    LinkedIn
                                </a>
                            </Link>
                        </nav>
                        <div>
                            <div className='footer-list'>
                                <h6 className='footer-list__title'>Email</h6>
                                <Link href="mailto:hello@orequals.com">
                                    <a className='footer-list__link'>
                                        hello@orequals.com
                                    </a>
                                </Link>
                            </div>
                            <div className='footer-list'>
                                <h6 className='footer-list__title'>Phone</h6>
                                <a className='footer-list__link'>
                                    +1 999-8888-777
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-icons'>
                    <Link href="https://twitter.com/joshuaplicque">
                        <a target='_blank' rel='noreferrer'>
                            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.3755 3.78587C37.9272 4.42854 36.3716 4.86301 34.7361 5.05829C36.4053 4.05873 37.6841 2.47477 38.2879 0.589604C36.7022 1.53138 34.9669 2.1944 33.1572 2.54984C31.6845 0.980066 29.5844 0 27.2611 0C22.8015 0 19.1847 3.6153 19.1847 8.07752C19.1847 8.70977 19.2559 9.32658 19.3928 9.91879C12.6795 9.5814 6.72763 6.36564 2.74377 1.47927C2.04813 2.67266 1.64995 4.06019 1.64995 5.54061C1.64995 8.34266 3.07616 10.8149 5.24325 12.2631C3.96037 12.2234 2.70564 11.8771 1.58395 11.2532V11.3553C1.58395 15.2693 4.36786 18.533 8.06334 19.2752C7.38449 19.4612 6.67206 19.5584 5.93503 19.5584C5.41393 19.5584 4.90836 19.5091 4.41447 19.4162C5.44239 22.6242 8.42555 24.9594 11.9592 25.0254C9.19469 27.1925 5.71128 28.4843 1.92792 28.4843C1.27628 28.4843 0.632247 28.4454 0 28.3692C3.57526 30.6617 7.8203 32 12.3821 32C27.2391 32 35.3644 19.6916 35.3644 9.01765C35.3644 8.66723 35.3567 8.31941 35.3398 7.97284C36.9229 6.82779 38.2895 5.41 39.3755 3.78587Z" fill="#FFCC00" />
                            </svg>
                        </a>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCFQRl_6qzOpPGVtrFw7a_Jw">
                        <a target='_blank' rel='noreferrer'>
                            <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44.5602 5.00692C44.0368 3.03608 42.4946 1.48392 40.5365 0.957167C36.9873 0 22.7556 0 22.7556 0C22.7556 0 8.52392 0 4.97467 0.957167C3.01658 1.484 1.47442 3.03608 0.951 5.00692C0 8.57917 0 16.0323 0 16.0323C0 16.0323 0 23.4855 0.951 27.0578C1.47442 29.0286 3.01658 30.5161 4.97467 31.0428C8.52392 32 22.7556 32 22.7556 32C22.7556 32 36.9873 32 40.5365 31.0428C42.4946 30.5161 44.0368 29.0286 44.5602 27.0578C45.5112 23.4855 45.5112 16.0323 45.5112 16.0323C45.5112 16.0323 45.5112 8.57917 44.5602 5.00692ZM18.101 22.7993V9.26542L29.9959 16.0325L18.101 22.7993Z" fill="#FFCC00" />
                            </svg>
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/company/or-equals">
                        <a target='_blank' rel='noreferrer'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.7143 0H2.27857C1.02143 0 0 1.03571 0 2.30714V29.6929C0 30.9643 1.02143 32 2.27857 32H29.7143C30.9714 32 32 30.9643 32 29.6929V2.30714C32 1.03571 30.9714 0 29.7143 0ZM9.67143 27.4286H4.92857V12.1571H9.67857V27.4286H9.67143ZM7.3 10.0714C5.77857 10.0714 4.55 8.83571 4.55 7.32143C4.55 5.80714 5.77857 4.57143 7.3 4.57143C8.81429 4.57143 10.05 5.80714 10.05 7.32143C10.05 8.84286 8.82143 10.0714 7.3 10.0714ZM27.45 27.4286H22.7071V20C22.7071 18.2286 22.6714 15.95 20.2429 15.95C17.7714 15.95 17.3929 17.8786 17.3929 19.8714V27.4286H12.65V12.1571H17.2V14.2429H17.2643C17.9 13.0429 19.45 11.7786 21.7571 11.7786C26.5571 11.7786 27.45 14.9429 27.45 19.0571V27.4286Z" fill="#FFCC00" />
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;