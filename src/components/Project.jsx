import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';
config({ ssrFadeout: true });

const Project = ({ name, desc, videoLink }) => {

    // Space for logic. (if any)

    return (
        <div className='project'>
            <div className='project-text'>
                <Fade bottom distance='20px' duration={200}>
                    <h3 className='project-title'>{name}</h3>
                </Fade>
                <Fade bottom distance='20px' duration={300}>
                    <div className='project-desc'>{desc}</div>
                </Fade>
            </div>
            <Fade bottom distance='20px' duration={400}>
                <iframe
                    className='project-video'
                    height='340' src={videoLink}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                >
                </iframe>
            </Fade>
        </div>
    );
};

export default Project;