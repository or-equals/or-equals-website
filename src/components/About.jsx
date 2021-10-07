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
                    <h3 className='about-title'>Who We Are</h3>
                    <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, repellendus consequuntur! Autem, ducimus nesciunt adipisci officiis quos exercitationem, qui facilis deserunt ipsum autem dignissimos recusandae aliquam quaerat ullam odit consectetur alias!</p>
                </div>
                <div className='about'>
                    <h3 className='about-title'>Our Promise</h3>
                    <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, repellendus consequuntur! Autem, ducimus nesciunt adipisci officiis quos exercitationem, qui facilis deserunt ipsum autem dignissimos recusandae aliquam quaerat ullam odit consectetur alias!</p>
                </div>
            </div>
        </Section>
    );
};

export default About;