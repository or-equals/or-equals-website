import { Fade } from 'react-reveal';

const SectionHeader = ({ theme, title, desc }) => {

    // Space for logic. (if any)

    return (
        <div className='section-header'>
            <Fade duration={400} distance='20px' bottom>
                <h2 className={`section-title_${theme}`}>{title}</h2>
            </Fade>
            {desc ?
                <Fade duration={600} distance='20px' bottom>
                    <div className='section-desc__container'>
                        <svg className={`section-svg_${theme}`} width='20' height='16' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M19 8H1M12 1L19 8L12 1ZM19 8L12 15L19 8Z' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                        <p className={`section-desc_${theme}`}>{desc}</p>
                    </div>
                </Fade>

                : null
            }
        </div>
    );
};

export default SectionHeader;