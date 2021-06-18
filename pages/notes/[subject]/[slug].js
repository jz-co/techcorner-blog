import Head from 'next/head';
import { Flex, Heading, Text, Grid, Stack } from '@chakra-ui/react'

import Container from "../../../components/container";
import MainLayout from '../../../components/layout';
import NoteSectionContainer from '../../../components/note-section-container';
import AddResourcesCard from '../../../components/add-resources';

export default function NotesPost({ note }) {
    const addResources = [
        {
            title: 'Google Home',
            name: 'Google',
            link: 'https://google.com',
            icon: '/favicon.ico',
        },
        {
            title: 'Google Home 2',
            name: 'Google',
            link: 'https://google.com',
            icon: '/favicon.ico',
        },
    ];

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
                pb="80px">
                <Flex width="100%" px='4rem' maxWidth="1120px" flexDirection="column" alignItems="flex-start">
                    <Heading as="h1" mb={2} color="#353535" fontSize="4xl">{note.title}</Heading>
                    <Text color="gray.300" fontWeight="bold" fontSize="2xl">Algorithms</Text>
                </Flex>
            </Flex>
            <MainLayout pt={12} w="100%">
                <Flex w="100%" px='2rem' maxWidth="1120px" justifyContent="space-between" wrap="wrap">

                    <Stack spacing={12} maxWidth="700px" mb={12} >
                        <NoteSectionContainer >

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu. Nibh mauris cursus mattis molestie a. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris augue neque gravida in fermentum. Gravida cum sociis natoque penatibus. Mi sit amet mauris commodo quis imperdiet massa. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pharetra pharetra massa massa ultricies mi quis. Nisl condimentum id venenatis a condimentum vitae. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Dui ut ornare lectus sit amet est. Turpis egestas sed tempus urna et pharetra pharetra massa. Purus sit amet luctus venenatis. Morbi non arcu risus quis varius quam quisque id. Diam vel quam elementum pulvinar etiam. Nunc faucibus a pellentesque sit amet porttitor eget.
                        </NoteSectionContainer>
                        <NoteSectionContainer >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu. Nibh mauris cursus mattis molestie a. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris augue neque gravida in fermentum. Gravida cum sociis natoque penatibus. Mi sit amet mauris commodo quis imperdiet massa. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pharetra pharetra massa massa ultricies mi quis. Nisl condimentum id venenatis a condimentum vitae. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Dui ut ornare lectus sit amet est. Turpis egestas sed tempus urna et pharetra pharetra massa. Purus sit amet luctus venenatis. Morbi non arcu risus quis varius quam quisque id. Diam vel quam elementum pulvinar etiam. Nunc faucibus a pellentesque sit amet porttitor eget.
                        </NoteSectionContainer>
                    </Stack>
                    <AddResourcesCard srcs={addResources} w="300px" h="fit-content" ml={2} />

                </Flex>
            </MainLayout>
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
