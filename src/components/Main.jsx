import Image from 'next/image';

import Button from './Button';

const Main = () => {

    // Space for logic. (if any)

    return (
        <main className='main' id='main'>
            <div className='main-text'>
                <h1 className='main-headline'>Award-Winning Business Software Development</h1>
                <p className='main-desc'>We are Elixir software development consultants who specialize in delivering massive cost reductions to business owners by eliminating time-intensive processes.</p>
                <Button
                    to="#contact"
                    theme="dark"
                    text="Get in touch"
                />
            </div>
            <div className='main-img'>
                <Image
                    src='/patient_pilot_award-min.webp'
                    alt='Patient Pilot Award'
                    height={355}
                    width={510}
                    objectFit='cover'
                />
            </div>
        </main>
    );
};

export default Main;