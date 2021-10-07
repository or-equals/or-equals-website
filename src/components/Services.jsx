import Section from '../components/Section';

const Services = () => {

    // Space for logic. (if any)

    return (
        <Section
            id="services"
            theme="dark"
            title={<>Instead of spending money on software, lets build software that makes you money.</>}
            desc="From rescuing a project, to augmenting your team, or making your business more efficient, we've got you covered."
        >
            <div className="services-container">
                <div className='service'>
                    <h3 className='service-title service-highlight'>Project Rescue</h3>
                    <p className='service-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat vitae nobis asperiores voluptate aperiam incidunt, autem dolor possimus accusamus.</p>
                </div>
                <div className='service'>
                    <h3 className='service-title'>Custom Software</h3>
                    <p className='service-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat vitae nobis asperiores voluptate aperiam incidunt, autem dolor possimus accusamus.</p>
                </div>
                <div className='service'>
                    <h3 className='service-title'>Performance Consulting</h3>
                    <p className='service-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat vitae nobis asperiores voluptate aperiam incidunt, autem dolor possimus accusamus.</p>
                </div>
            </div>
        </Section>
    );
};

export default Services;