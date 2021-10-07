import { useEffect, useRef, useState } from 'react';
import config from 'react-reveal/globals';
import { createClient } from 'contentful';

config({ ssrFadeout: true });

import MetaHead from '../components/MetaHead';
import Main from '../components/Main';
import Services from '../components/Services';
import Work from '../components/Work';
import About from '../components/About';
import Testimonies from '../components/Testimonies';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = ({ projects, testimonies }) => {

    // Get height of <Main /> and send it to header.
    const [height, setHeight] = useState();
    const mainRef = useRef();

    useEffect(() => {
        setHeight(mainRef.current.clientHeight);
        console.log(height);
    });

    return (
        <>
            <MetaHead />
            <Header mainHeight={height} />
            <div ref={mainRef}>
                <Main />
            </div>
            <Services />
            <Work items={projects} />
            <About />
            <Testimonies items={testimonies} />
            <Footer />
        </>
    );
};

export default Home;


// Get data from CMS
export async function getStaticProps() {

    const contentfulClient = createClient({
        space: process.env.NEXT_CONFIG_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_CONFIG_CONTENTFUL_ACCESS_TOKEN,
    });

    const projects = await contentfulClient.getEntries({
        content_type: 'projects'
    });

    const testimonies = await contentfulClient.getEntries({
        content_type: 'testimonial'
    });

    return {
        props: {
            projects: projects.items,
            testimonies: testimonies.items
        }
    };
};