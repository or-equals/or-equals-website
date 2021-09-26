import SectionHeader from './SectionHeader';

const Section = ({ id, theme, children, title, desc }) => {

    // Space for logic. (if any)

    return (
        <section className={`section_${theme}`} id={id}>
            <SectionHeader 
                theme={theme}
                title={title}
                desc={desc}
            />
            {children}
        </section>
    );
};

export default Section;