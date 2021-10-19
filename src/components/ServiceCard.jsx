import { Fade } from 'react-reveal';

const ServiceCard = ({ title, highlight, desc }) => {

    // Space for logic. (if any)

    var titleClass;

    if (highlight === true) {
        titleClass = 'service-title service-highlight'
    } else {
        titleClass = 'service-title'
    };

    return (
        <div className='service'>
            <Fade duration={400} distance='20px' bottom>
                <h3 className={titleClass}>{title}</h3>
            </Fade>
            <Fade duration={600} distance='20px' bottom>
                <p className='service-desc'>{desc}</p>
            </Fade>
        </div>
    );
};

export default ServiceCard;