import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';

import Section from '../components/Section';

config({ ssrFadeout: true });

const Services = () => {

    // Space for logic. (if any)

    return (
        <Section
            id="services"
            theme="dark"
            title={<>Instead of spending money on software, lets build <span className='underline-dark'>software that makes you money.</span></>}
            desc="From rescuing a project, to augmenting your team, or making your business more efficient, we've got you covered."
        >
            <div className="services-container">
                <div className='service'>
                    <Fade bottom distance='20px' duration={400}>
                        <h3 className='service-title service-highlight'>Project Rescue</h3>
                    </Fade>
                    <Fade bottom distance='20px' duration={800}>
                        <p className='service-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat vitae nobis asperiores voluptate aperiam incidunt, autem dolor possimus accusamus.</p>
                    </Fade>
                </div>
                <div className='service'>
                    <Fade bottom distance='20px' duration={400}>
                        <h3 className='service-title'>Custom Software</h3>
                    </Fade>
                    <Fade bottom distance='20px' duration={800}>
                        <p className='service-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat vitae nobis asperiores voluptate aperiam incidunt, autem dolor possimus accusamus.</p>
                    </Fade>
                </div>
                <div className='service'>
                    <Fade bottom distance='20px' duration={400}>
                        <h3 className='service-title'>Performance Consulting</h3>
                    </Fade>
                    <Fade bottom distance='20px' duration={800}>
                        <p className='service-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat vitae nobis asperiores voluptate aperiam incidunt, autem dolor possimus accusamus.</p>
                    </Fade>
                </div>
            </div>
        </Section>
    );
};

export default Services;