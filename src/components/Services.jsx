import Section from '../components/Section';
import ServiceCard from './ServiceCard';

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
                <ServiceCard
                    title='Project Rescue'
                    highlight={true}
                    desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat vitae nobis asperiores voluptate aperiam incidunt, autem dolor possimus accusamus.'
                />
                <ServiceCard
                    title='Custom Software'
                    highlight={false}
                    desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat vitae nobis asperiores voluptate aperiam incidunt, autem dolor possimus accusamus.'
                />
                <ServiceCard
                    title='Performance Consulting'
                    highlight={false}
                    desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat vitae nobis asperiores voluptate aperiam incidunt, autem dolor possimus accusamus.'
                />
            </div>
        </Section>
    );
};

export default Services;