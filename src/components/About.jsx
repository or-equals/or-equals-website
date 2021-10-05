import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';

import Section from '../components/Section';

config({ ssrFadeout: true });

const About = () => {

    // Space for logic. (if any)

    return (
        <Section
            id="about"
            theme="light"
            title={<>A software development shop obsessed with delivering <span className='underline'>real-world business value.</span></>}
            desc={null}
        >
            <div className='about-container'>
                <div className='about'>
                    <Fade bottom distance='20px' duration={400}>
                        <h3 className='about-title'>Who We Are</h3>
                    </Fade>
                    <Fade bottom distance='20px' duration={800}>
                        <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, repellendus consequuntur! Autem, ducimus nesciunt adipisci officiis quos exercitationem, qui facilis deserunt ipsum autem dignissimos recusandae aliquam quaerat ullam odit consectetur alias!</p>
                    </Fade>
                </div>
                <div className='about'>
                    <Fade bottom distance='20px' duration={400}>
                        <h3 className='about-title'>Our Promise</h3>
                    </Fade>
                    <Fade bottom distance='20px' duration={800}>
                        <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, repellendus consequuntur! Autem, ducimus nesciunt adipisci officiis quos exercitationem, qui facilis deserunt ipsum autem dignissimos recusandae aliquam quaerat ullam odit consectetur alias!</p>
                    </Fade>
                </div>
            </div>
        </Section>
    );
};

export default About;