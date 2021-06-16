import Head from 'next/head';
import { Box, Flex, Grid, GridItem, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react';

import Container from '../../../components/container';
import { SingleTopicButton } from '../../../components/single-topic';
import CategorySideNav from '../../../components/category-sidenav';

export default function NotesSubject({ allSubjects, subject, notes }) {
	return (
		<Container currPage='cs notes'>
			<Head>
				<title>{subject.name} - Tech Corner</title>
				<meta name='description' content={`Find all CS notes on the topic of ${subject.name.toLowerCase()}`} />
			</Head>
			<Flex mt={12} w='100%' flexWrap="wrap" >
				<CategorySideNav title='Subjects' currCategory={subject} categories={allSubjects} pathPrefix={`/notes`} mb={8} mr={24} minWidth="200px" />
				<Box maxWidth='800px'>
					<Heading as='h1' mb='1.5rem' color='#353535'>
						{subject.name}
					</Heading>
					<Text mb='2.5rem' color='gray.500'>
						Here you will find quick reference notes for some of the major computer science algorithms and related
						topics. We also have links to more in-depth resources if you want to learn more.{' '}
					</Text>
					<SimpleGrid columns={3} spacing={6} minChildWidth='240px'>
						{notes.map((note) => (
							<SingleTopicButton key={note.slug} topic={note.title} to={`/notes/${subject.slug}/${note.slug}`} />
						))}
					</SimpleGrid>
				</Box>
			</Flex>
		</Container>
	);
}

export async function getStaticPaths() {
	// TODO: Call Strapi API to get all notes topics
	const subjects = ['algorithms', 'data-structures', 'operating-systems'];

	const paths = subjects.map((subject) => ({
		params: { subject: subject },
	}));

	return {
		paths,
		fallback: false,
	};
}

// For more info on static generation of paths
// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation

export async function getStaticProps({ params }) {
	const mockData = {
		algorithms: 'Algorithms',
		'data-structures': 'Data Structures',
		'operating-systems': 'Operating Systems'
	};
	// params contains the `subject` of the curr page
	// TODO: call Strapi API to get detailed info about the subject
	//       and all the notes in that subject
	const allSubjects = [
		{
			slug: 'algorithms',
			name: 'Algorithms'
		},
		{
			slug: 'data-structures',
			name: 'Data Structures'
		},
		{
			slug: 'operating-systems',
			name: 'Operating Systems'
		}
	]

	const subject = {
		slug: params.subject,
		name: mockData[params.subject],
	};

	const notes = [
		{ title: 'Big Oh Notation', slug: 'big-oh-notation' },
		{ title: 'Time Complexity', slug: 'time-complexity' },
		{ title: 'Space Complexity', slug: 'space-complexity' },
	];

	return {
		props: {
			allSubjects,
			subject,
			notes,
		},
	};
}
