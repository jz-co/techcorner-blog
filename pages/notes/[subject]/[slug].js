import { Flex, Heading, Text, Stack, Button, Box } from '@chakra-ui/react';
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { darken } from '@chakra-ui/theme-tools';

import { motion } from 'framer-motion'

import Seo from '../../../components/seo';
import Container from "../../../components/container";
import MainLayout from '../../../components/layout';
import NoteSection from '../../../components/notes-section';
import AddResourcesCard from '../../../components/resources-card';
import { fetchStrapi } from '../../../lib/api';
import TableOfContents from '../../../components/table-of-contents';
import React from "react";

export default function NotesPost({ note, sections }) {
    const [currentUrl, setCurrentUrl] = React.useState("");
    React.useEffect(() => {
        setCurrentUrl(window.location.href);
    });
    const twitterShairngUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=Check%20out%20this%20article%20by%20@techcorner0101`
    const linkedinSharingUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`
    const fbSharingUrl = "https://www.facebook.com/sharer/sharer.php?u=" + currentUrl;

    return (
        <Container bg="#F5F5F5">
            <Seo seo={note.seo} />
            <Flex
                justifyContent='center'
                bg='white'
                w="100%"
                pt="100px"
                pb="64px">
                <Flex width="100%" px={['2.5rem', '4rem']} maxWidth="1120px" flexDirection="column" alignItems="flex-start">
                    <motion.div initial="displaced" animate="normal" transition={{ duration: .4 }} variants={{
                        displaced: {
                            translateY: 16,
                            opacity: 0.4
                        },
                        normal: {
                            translateY: 0,
                            opacity: 1,
                        }
                    }}>
                        <Heading as="h1" mb={2} color="#042E4E" fontSize="4xl">{note.title}</Heading>
                        <Text color="#98A8B2" fontWeight="semibold" fontSize="2xl">{note.topic.name}</Text>
                    </motion.div>
                </Flex>
            </Flex>

            <MainLayout w="100%">
                {note.body.length === 0 && <Text>Nothing to see here...</Text>}
                <Box width="100%">
                    <Flex mt="3rem" ml="3rem">
                        <Box mr="3">
                            <Button backgroundColor="#1DA1F2" color="white" height="28px" fontSize="13.5px" fontWeight="bold" pl="8px" pr="8px" leftIcon={<FaTwitter />} _hover={{ bg: darken("#1DA1F2", 5) }} onClick={() => window.open(twitterShairngUrl)} borderRadius="3.5">
                                Tweet
                            </Button>
                        </Box>
                        <Box mr="3">
                            <Button backgroundColor="#0A66C2" color="white" height="28px" fontSize="13.5px" fontWeight="bold" pl="8px" pr="8px" leftIcon={<FaLinkedin />} _hover={{ bg: darken("#0A66C2", 5) }} onClick={() => window.open(linkedinSharingUrl)} borderRadius="3.5">
                                Share
                            </Button>
                        </Box>
                        <Box>
                            <Button backgroundColor="#1877F2" color="white" height="28px" fontSize="13.5px" fontWeight="bold" pl="8px" pr="8px" leftIcon={<FaFacebook />} _hover={{ bg: darken("#1877F2", 5) }} onClick={() => window.open(fbSharingUrl)} borderRadius="3.5">
                                Share
                            </Button>
                        </Box>
                    </Flex>
                </Box>
                <Flex w="100%" px={['1.5rem', '2rem']} justifyContent="space-between" wrap={["wrap", "wrap", "nowrap"]} mt={["3rem", "3rem", "2rem"]}>
                    <TableOfContents
                        sections={sections}
                        mb={12}
                        display={["block", "block", "none"]} />

                    <Stack spacing={12} maxWidth="700px" mb={12} color="gray.700" flexBasis={["100%", "100%", "80%"]}>
                        {note.body.map((section) => {
                            return (
                                <NoteSection key={section.id}
                                    component={section.__component}
                                    content={section.content}
                                    id={section.sectionId} />
                            )
                        })}
                    </Stack>
                    <div>
                        <Box
                            ml={[0, 0, 8]}
                            flexBasis={["100%", "100%", "20%"]}
                            position="-webkit-sticky"
                            position="sticky"
                            top="20px"
                            mb={12}
                        >
                            <TableOfContents
                                sections={sections}
                                mb={6}
                                display={["none", "none", "block"]} />

                            {note.resources.length > 0 && (
                                <AddResourcesCard srcs={[...note.resources]}
                                    maxWidth={["none", "none", "300px"]}
                                    h="fit-content"
                                />)
                            }

                        </Box>
                    </div>
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
    // call Strapi API to get detailed info about the note

    // Use API to (query) find the note that corresponds to params.slug

    const response = await fetchStrapi("get.note-by-slug", params.slug);
    const note = response[0];

    const sections = note.body.map((section) => {
        return {
            heading: section.sectionHeading,
            id: section.sectionId
        }
    })

    return {
        props: {
            note,
            sections
        },
    };
}
