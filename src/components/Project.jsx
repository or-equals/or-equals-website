const Project = ({ name, desc, videoLink }) => {

    // Space for logic. (if any)

    return (
        <div className='project'>
            <div className='project-text'>
                <h3 className='project-title'>{name}</h3>
                <div className='project-desc'>{desc}</div>
            </div>
            <iframe
                className='project-video'
                height='340' src={videoLink}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
            >
            </iframe>
        </div>
    );
};

export default Project;