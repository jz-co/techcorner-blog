import Head from 'next/head';

import { Flex, Heading, Text, Stack } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

import Container from "../../../components/container";
import MainLayout from '../../../components/layout';
import NoteSectionContainer from '../../../components/note-section-container';
import AddResourcesCard from '../../../components/resources-card';
import { notesComponents } from '../../../components/markdown';
import { fetchStrapi } from '../../../lib/api';

const vercelResource = {
    title: 'Next.js Documentation',
    source: 'Vercel',
    link: 'https://nextjs.org/docs/getting-started',
    icon: '/favicon.ico'
}

export default function NotesPost({ note }) {

    return (
        <Container>
            <Head>
                <title>{note.title} - Tech Corner</title>
                <meta name='description' content={`CS notes on ${note.title.toLowerCase()}`} />
            </Head>
            <Flex
                justifyContent='center'
                bg='white'
                w="100%"
                pt="100px"
                pb="64px">
                <Flex width="100%" px='4rem' maxWidth="1120px" flexDirection="column" alignItems="flex-start">
                    <Heading as="h1" mb={2} color="#353535" fontSize="4xl">{note.title}</Heading>
                    <Text color="gray.300" fontWeight="bold" fontSize="2xl">{note.topic.name}</Text>
                </Flex>
            </Flex>
            <MainLayout pt="4rem" w="100%">
                {note.body.length === 0 && <Text>Nothing to see here...</Text>}
                <Flex w="100%" px='2rem' maxWidth="1120px" justifyContent="space-between" wrap="wrap">

                    <Stack spacing={12} maxWidth="700px" mb={12} color="gray.700">
                        {note.body.map((section) => {
                            return (<NoteSectionContainer key={section.id} spacing={6}>
                                <ReactMarkdown components={notesComponents}>
                                    {section.content}

                                </ReactMarkdown>
                            </NoteSectionContainer>)
                        })}
                    </Stack>
                    {note.resources.length > 0 && <AddResourcesCard srcs={[...note.resources, vercelResource]} w="300px" h="fit-content" ml={2} />}
                </Flex>
            </MainLayout>
        </Container>
    );

}

export async function getStaticPaths() {

    // Call Strapi API to get all notes topics, and all notes associated with each topic
    const subjects = await fetchStrapi('get.notes-topics');

    const paths = subjects.reduce((accumulator, subject) => {
        let slugs = subject.notes.map(note => note.slug);
        let params = slugs.map(slug => ({ params: { subject: subject.slug, slug: slug } }));
        return accumulator.concat(params);
    }, []);

    return {
        paths,
        fallback: false,
    };
}

// For more info on static generation of paths
// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation

export async function getStaticProps({ params }) {

    // params contains the `subject` and `slug` of the curr page
    // TODO: call Strapi API to get detailed info about the note

    // Use API to (query) find the note that corresponds to params.slug

    const response = await fetchStrapi("get.note-by-slug", params.slug);
    const note = response[0];

    return {
        props: {
            note
        },
    };
}
