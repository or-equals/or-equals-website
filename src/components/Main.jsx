import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';

import Image from 'next/image';

import Button from './Button';

config({ ssrFadeout: true });

const Main = () => {

    // Space for logic. (if any)

    return (
        <main className='main' id='main'>
        <div className='main-text'>
            <Fade bottom distance='20px' duration={400}>
                <h1 className='main-headline'>Award-Winning Business Software Development</h1>
            </Fade>
            <Fade bottom distance='20px' duration={600}>
                <p className='main-desc'>We are Elixir software development consultants who specialize in delivering massive cost reductions to business owners by eliminating time-intensive processes.</p>
            </Fade>
            <Button
                to="#contact"
                theme="dark"
                text="Get in touch"
            />
        </div>
        <div className='main-img'>
            <Image
                src='/patient_pilot_award-min.png'
                alt='Patient Pilot Award'
                height={340}
                width={510}
                objectFit='cover'
            />
        </div>
        </main>
    );
};

export default Main;