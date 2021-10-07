import Head from 'next/head';

const MetaHead = () => {

    return (
        <Head>
            <title>Or Equals - Award Winning Business Software Development</title>
            <meta name="description" content="We are Elixir software development consultants who specialize in delivering massive cost reductions to business owners by eliminating time-intensive processes." />

            {/* OGP Tags */}
            <meta property="og:title" content="Or Equals - Award Winning Business Software Development" />
            <meta property="og:description" content="We are Elixir software development consultants who specialize in delivering massive cost reductions to business owners by eliminating time-intensive processes." />
            <meta property="og:image" content="https://media.discordapp.net/attachments/886520063073595422/892489087339102318/thumbnail.png?width=969&height=509" />

            {/* Twitter Cards */}
            <meta name="twitter:title" content="Or Equals - Award Winning Business Software Development"></meta>
            <meta name="twitter:description" content="We are Elixir software development consultants who specialize in delivering massive cost reductions to business owners by eliminating time-intensive processes."></meta>
            <meta name="twitter:card" content="summary_large_image"></meta>
        </Head>
    );
};

export default MetaHead;