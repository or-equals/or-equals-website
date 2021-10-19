import { Fade } from 'react-reveal';

const Project = ({ name, desc, videoLink }) => {

    // Space for logic. (if any)

    return (
        <div className='project'>
            <div className='project-text'>
                <Fade duration={200} distance='20px' bottom>
                    <h3 className='project-title'>{name}</h3>
                </Fade>
                <Fade duration={400} distance='20px' bottom>
                    <div className='project-desc'>{desc}</div>
                </Fade>
            </div>
            <Fade duration={200} distance='20px' bottom>
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