import Head from 'next/head';

import Container from "../../../components/container";


export default function NotesPost({ note }) {
    return (
        <Container>
            <Head>
                <title>{note.title} - Tech Corner</title>
                <meta name='description' content={`CS notes on ${note.title.toLowerCase()}`} />
            </Head>
            { note.title }
        </Container>
    );

}

export async function getStaticPaths() {
    // TODO: Call Strapi API to get all notes topics
    const subjects = ['algorithms', 'data-structures', 'operating-systems'];
    const notes = {
        'algorithms': [
            { title: 'Big Oh Notation', slug: 'big-oh-notation' },
            { title: 'Time Complexity', slug: 'time-complexity' },
            { title: 'Space Complexity', slug: 'space-complexity' },
        ],
        'data-structures': [
            { title: 'Big Oh Notation', slug: 'big-oh-notation' },
            { title: 'Time Complexity', slug: 'time-complexity' },
            { title: 'Space Complexity', slug: 'space-complexity' },
        ],
        "operating-systems": [
            { title: 'Big Oh Notation', slug: 'big-oh-notation' },
            { title: 'Time Complexity', slug: 'time-complexity' },
            { title: 'Space Complexity', slug: 'space-complexity' },
        ],
    };

    const paths = subjects.reduce((accumulator, subject) => {
        let slugs = notes[subject].map(note => note.slug);
        let params = slugs.map(slug => ({ params: { subject: subject, slug: slug } }));
        return accumulator.concat(params)
    }, []);

    return {
        paths,
        fallback: false,
    };
}

// For more info on static generation of paths
// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation

export async function getStaticProps({ params }) {

    const notes = [
        { title: 'Big Oh Notation', slug: 'big-oh-notation' },
        { title: 'Time Complexity', slug: 'time-complexity' },
        { title: 'Space Complexity', slug: 'space-complexity' },
    ];

    // params contains the `subject` and `slug` of the curr page
    // TODO: call Strapi API to get detailed info about the subject
    //       and all the notes in that subject

    const note = notes.filter((note) => note.slug === params.slug)[0];


    return {
        props: {
            note
        },
    };
}
