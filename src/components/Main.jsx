import Image from 'next/image';
import { Fade } from 'react-reveal';

import Button from './Button';

const Main = () => {

    // Space for logic. (if any)

    return (
        <main className='main' id='main'>
            <div className='main-text'>
                <Fade duration={200} distance='20px' bottom>
                    <h1 className='main-headline'>Award-Winning Business Software Development</h1>
                </Fade>

                <Fade duration={400} distance='20px' bottom>
                    <p className='main-desc'>We are Elixir software development consultants who specialize in delivering massive cost reductions to business owners by eliminating time-intensive processes.</p>
                </Fade>

                <Fade duration={600} distance='20px' bottom>
                    <Button
                        to="#contact"
                        theme="dark"
                        text="Get in touch"
                    />
                </Fade>
            </div>
            <Fade duration={800} distance='20px' bottom>
                <div className='main-img'>
                    <Image
                        src='/patient_pilot_award-min.webp'
                        alt='Patient Pilot Award'
                        height={355}
                        width={510}
                        objectFit='cover'
                    />
                </div>
            </Fade>
        </main>
    );
};

export default Main;