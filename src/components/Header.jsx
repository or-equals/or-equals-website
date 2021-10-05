import { useState, useEffect } from 'react';
import { openPopupWidget } from 'react-calendly';
import config from 'react-reveal/globals';
import Fade from 'react-reveal/Fade';

config({ ssrFadeout: true });

import Link from 'next/link';

const Header = () => {

    const [theme, setTheme] = useState('light');
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        if (typeof window != 'undefined') {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 620) setTheme('dark');
                else setTheme('light');
            });
        };
    });

    const openCalendly = () => {
        openPopupWidget({
            url: 'https://calendly.com/or-equals/30-minute-discovery-call',
        })
    };

    const scrollTop = () => {
        scrollTo(0, 0);
        setTheme('light')
    };

    const scrollTopAndCloseMenu = () => {
        scrollTo(0, 0);
        setMenu(false);
    };

    const scrollToId = () => setTheme('dark');
    const toggleMenu = () => menu ? setMenu(false) : setMenu(true)
    const closeMenu = () => setMenu(false);

    return (
        <header className={`header_${theme}`}>
            <div className={`header-container_${theme}`}>
                <Link href="/">
                    <svg onClick={scrollTopAndCloseMenu} className={`header-logo_${theme}`} width="56" height="38" viewBox="0 0 56 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M30.3715 0.00822441C30.1591 0.0259247 29.472 0.592518 28.4458 1.56076C28.1604 1.83004 27.8488 2.13038 27.5139 2.45861C24.9554 4.9659 21.0362 9.10097 17.0552 13.4522C17.0495 13.4585 17.0437 13.4648 17.0379 13.4711C13.1464 17.725 9.19755 22.1834 6.40421 25.528C4.74504 27.519 3.33411 29.3859 2.26237 30.9771C2.26016 30.9804 2.25796 30.9836 2.25576 30.9869C1.56439 32.014 1.01463 32.9258 0.630969 33.6817C0.220343 34.4907 0 35.121 0 35.5225C0 38.2815 0.896541 38.3508 3.26188 35.5225C3.36107 35.4039 3.46285 35.2802 3.56724 35.1514C4.0378 34.5708 4.56169 33.8863 5.14277 33.0966C5.87972 32.0882 7.37637 30.2425 9.30426 27.95L9.30688 27.9469C12.2017 24.5047 16.0682 20.056 19.7948 15.9217C24.0882 11.0916 27.8251 6.53979 29.7228 3.86948C30.0775 3.37041 30.368 2.93706 30.5858 2.5799C30.7081 2.3794 30.8075 2.20291 30.8825 2.05228C30.9931 1.8303 31.0507 1.66448 31.0507 1.56076C31.0507 0.68746 30.7596 -0.0888091 30.3715 0.00822441ZM16.1918 33.7406C15.7008 34.9342 15.7152 35.824 16.0105 36.7839C16.3734 38.0177 16.8991 38.0573 18.6431 36.0096C18.6568 35.9936 18.6705 35.9775 18.6842 35.9612C18.912 35.6925 19.1603 35.3887 19.4313 35.0481C19.8509 34.5208 20.3251 33.905 20.8622 33.1937C22.0501 31.6098 24.0963 29.0919 26.4343 26.3352C26.4363 26.3328 26.4384 26.3304 26.4404 26.328C28.6845 23.6823 31.1967 20.8173 33.4765 18.3476C38.1342 13.3018 42.9858 7.7709 44.3443 6.0243C44.63 5.657 44.8942 5.27254 45.1315 4.88626C46.0229 3.43564 46.5353 1.95931 46.382 1.26966C46.3329 0.991624 45.9806 1.06644 45.3734 1.44764C45.3376 1.47011 45.301 1.49365 45.2634 1.51823C44.7023 1.88563 43.9457 2.48857 43.0266 3.29529C42.7071 3.57572 42.3679 3.88079 42.0105 4.20915C39.1673 6.82139 35.1689 10.9079 30.7136 15.7972C28.4245 18.3093 26.0148 21.0335 23.5791 23.8785C20.9083 26.9825 19.0697 29.2138 17.8539 30.9221C17.8515 30.9254 17.8491 30.9287 17.8467 30.9321C17.0416 32.0642 16.5104 32.9663 16.1918 33.7406ZM39.6824 22.5585C39.4914 22.6694 39.3295 22.7859 39.2015 22.9081C37.552 24.5577 37.552 24.6547 39.3956 24.9458C39.898 25.0176 40.5214 25.0405 41.2207 25.0234C41.2517 25.0227 41.2829 25.0218 41.3143 25.0209C41.4976 25.0155 41.686 25.0075 41.8785 24.9969C44.0061 24.8802 46.6448 24.4556 48.7249 23.9311C50.5983 23.4587 52.0185 22.9054 52.204 22.423C52.2183 22.3802 52.2271 22.3385 52.2308 22.298C52.2938 21.604 50.8385 21.2329 48.8671 21.1395C48.61 21.1274 48.3442 21.1199 48.0718 21.1171C48.0674 21.1171 48.063 21.117 48.0586 21.117C45.7291 21.0941 42.9238 21.4089 41.0295 21.999C40.5466 22.1495 40.1228 22.3178 39.7813 22.5031C39.7679 22.5103 39.7546 22.5177 39.7414 22.525C39.7214 22.5361 39.7018 22.5473 39.6824 22.5585ZM52.929 18.22C53.121 18.1897 53.3024 18.1594 53.4736 18.129C55.9701 17.6852 56.3092 17.2111 55.7942 16.3098C55.5954 16.0116 54.1741 15.7925 52.3035 15.6682C50.8584 15.5722 49.1453 15.5326 47.5205 15.5567C47.5142 15.5568 47.5078 15.5569 47.5015 15.557C46.0237 15.5794 44.6201 15.6545 43.5594 15.7877C42.8812 15.8728 42.3432 15.9817 42.0155 16.1158C41.354 16.3048 40.7845 17.1381 40.7552 17.9881C40.7545 18.0109 40.7541 18.0337 40.7541 18.0564C40.7541 18.8355 41.1612 19.1704 42.8897 19.1755C43.0087 19.1759 43.1339 19.1747 43.2657 19.1719C43.5796 19.1654 43.9307 19.1502 44.323 19.1269C45.2478 19.0719 46.4017 18.9717 47.8375 18.8327C50.0406 18.6068 51.7011 18.4137 52.929 18.22Z" fill="#010101" />
                    </svg>
                </Link>

                <nav className='nav'>
                    <Link href="/">
                        <a onClick={scrollTop} className={`nav-link_${theme}`}>Home</a>
                    </Link>
                    <Link href="#services">
                        <a className={`nav-link_${theme}`}>Services</a>
                    </Link>
                    <Link href="#work">
                        <a onClick={scrollToId} className={`nav-link_${theme}`}>Work</a>
                    </Link>
                    <Link href="#about">
                        <a onClick={scrollToId} className={`nav-link_${theme}`}>About</a>
                    </Link>
                    <Link href="#contact">
                        <a onClick={scrollToId} className={`nav-link_${theme}`}>Contact</a>
                    </Link>
                </nav>

                <button className='nav-toggle' onClick={toggleMenu}>
                    {
                        !menu
                            ? <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="36" height="3" rx="1.5" fill="#888888" />
                                <rect y="10" width="36" height="3" rx="1.5" fill="#888888" />
                            </svg>
                            : <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2.33203" width="36" height="3" rx="1.5" transform="rotate(45 2.33203 0)" fill="#888888" />
                                <rect y="25.4561" width="36" height="3" rx="1.5" transform="rotate(-45 0 25.4561)" fill="#888888" />
                            </svg>
                    }
                </button>

                <nav className={menu ? 'responsive-menu' : 'none'}>
                    <div className='responsive-nav'>
                        <Link href='/'>
                            <a onClick={scrollTopAndCloseMenu} className='responsive-nav__link'>
                                <Fade bottom distance='20px' duration={400}>
                                    Home
                                </Fade>
                            </a>
                        </Link>
                        <Link href='#services'>
                            <a onClick={closeMenu} className='responsive-nav__link'>
                                <Fade bottom distance='20px' duration={500}>
                                    Services
                                </Fade>
                            </a>
                        </Link>
                        <Link href='#work'>
                            <a onClick={closeMenu} className='responsive-nav__link'>
                                <Fade bottom distance='20px' duration={600}>
                                    Work
                                </Fade>
                            </a>
                        </Link>
                        <Link href='#about'>
                            <a onClick={closeMenu} className='responsive-nav__link'>
                                <Fade bottom distance='20px' duration={700}>
                                    About
                                </Fade>
                            </a>
                        </Link>
                        <Link href='#contact'>
                            <a onClick={closeMenu} className='responsive-nav__link'>
                                <Fade bottom distance='20px' duration={800}>
                                    Contact
                                </Fade>
                            </a>
                        </Link>
                    </div>

                    <button
                        className='button_dark'
                        onClick={openCalendly}
                    >
                        Schedule an appointment
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;