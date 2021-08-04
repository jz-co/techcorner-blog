import Head from 'next/head';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import Seo from '../../../components/seo';
import Container from '../../../components/container';
import { SingleTopicButton } from '../../../components/single-topic';
import CategorySideNav from '../../../components/category-sidenav';
import MainLayout from '../../../components/layout';
import { fetchStrapi } from '../../../lib/api';

export default function NotesSubject({ allSubjects, subject, notes }) {
	return (
		<Container bg="#F5FBFF" >
			<Seo seo={subject.seo} />
			<MainLayout>
				<Flex mt={12} w='100%' flexWrap={["wrap", "wrap", "nowrap"]} >
					<CategorySideNav title='Subjects' currCategory={subject} categories={allSubjects} pathPrefix={`/notes`} mb={8} mr={24} />
					<Box maxWidth='800px'>
						<Heading as='h1' mb='1.5rem' color='#042E4E' fontSize="3xl">
							{subject.name}
						</Heading>
						<Text mb='2.5rem' color='#778995'>
							Here you will find quick reference notes for some of the major computer science algorithms and related
							topics. We also have links to more in-depth resources if you want to learn more.{' '}
						</Text>
						<Flex flexWrap="wrap" width="100%" >
							{notes.map((note) => (
								<SingleTopicButton key={note.slug} topic={note.title} to={`/notes/${subject.slug}/${note.slug}`}
									mr="2rem" mb={"1.5rem"} />
							))}
						</Flex>
					</Box>
				</Flex>
			</MainLayout>
		</Container>
	);
}

export async function getStaticPaths() {

	// Call Strapi API to get all notes topics
	const subjects = await fetchStrapi('get.notes-topics');

	const paths = subjects.map((subject) => ({
		params: { subject: subject.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

// For more info on static generation of paths
// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation

export async function getStaticProps({ params }) {

	// params contains the `subject` of the curr page
	// Call Strapi API to get detailed info about all subjects, the curr subject
	// and all the notes in that subject

	const allSubjects = await fetchStrapi('get.notes-topics');

	const { name, slug, notes } = allSubjects.filter((subject) => subject.slug === params.subject)[0];

	return {
		props: {
			allSubjects,
			subject: { name, slug },
			notes,
		},
	};
}
