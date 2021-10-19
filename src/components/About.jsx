import { Fade } from 'react-reveal';

import Section from '../components/Section';

const About = () => {

    // Space for logic. (if any)

    return (
        <Section
            id="about"
            theme="light"
            title={<>A software development shop obsessed with delivering <span className='underline-container'>real-world business value.</span></>}
            desc={null}
        >
            <div className='about-container'>
                <div className='about'>
                    <Fade duration={400} distance='20px' bottom>
                        <h3 className='about-title'>Who We Are</h3>
                    </Fade>
                    <Fade duration={600} distance='20px' bottom>
                        <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, repellendus consequuntur! Autem, ducimus nesciunt adipisci officiis quos exercitationem, qui facilis deserunt ipsum autem dignissimos recusandae aliquam quaerat ullam odit consectetur alias!</p>
                    </Fade>
                </div>
                <div className='about'>
                    <Fade duration={400} distance='20px' bottom>
                        <h3 className='about-title'>Who We Are</h3>
                    </Fade>
                    <Fade duration={600} distance='20px' bottom>
                        <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, repellendus consequuntur! Autem, ducimus nesciunt adipisci officiis quos exercitationem, qui facilis deserunt ipsum autem dignissimos recusandae aliquam quaerat ullam odit consectetur alias!</p>
                    </Fade>
                </div>
            </div>
        </Section>
    );
};

export default About;