import { HStack, Text, Heading, Box, Stack } from '@chakra-ui/react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import Container from '../components/container';
import { SingleTopicButton, SingleTopicCard } from '../components/single-topic';
import NoteSectionContainer from '../components/note-section-container';
import AddResourcesCard from '../components/resources-card';

import HeroPostCard from '../components/hero-post-card';
import DownloadCard from '../components/download-card';
import ThumbnailImage from '../components/thumbnail';
import BodyImage from '../components/body-image';
import ArticleLayout from '../components/article-layout';
import MainLayout from '../components/layout';

import { notesComponents, NoteMarkdown } from '../components/markdown';


// FAKE DATA
const articleMeta = {
	title: 'How to write a tech resume',
	description:
		'Kickstart your tech job hunt with a great resume. This guide is suited for those just getting started on their tech career journey.',
	author: {
		name: 'Jessie Lam'
	},
	published_at: 'June 30, 2021',
	category: {
		name: 'Career',
		slug: 'career',
	}
};

const thumbnailMeta = {
	url: '/images/coffee.jpg',
	alternativeText: 'coffee on a book',
};

const texContent = `
\$\$Fib_n = \\frac {\\phi^n}{\\sqrt(5)}\$\$`

const markdownContent = `
# Hello World

## Hello World 2
\n
> I am a blockquote. Blah blah blah, there's so much to say
\n
![Coffee](/images/coffee.jpg)
Hi, I'm just some text... What is *Lorem Ipsum*? **Lorem Ipsum** is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type

This is where something new starts...

\`\`\`
<h1>Here's some code</h1>
\`\`\`	

Here is some \`inline-code\`.

Here is a list:
* 	What is *Lorem Ipsum*? **Lorem Ipsum** is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type
* 	N
* 	D

1. Do this
2. Then that
3. And finally...
`

const addResources = [
	{
		title: 'Google Home',
		source: 'Google',
		link: 'https://google.com',
		icon: '/favicon.ico',
	},
	{
		title: 'Google Home 2',
		source: 'Google',
		link: 'https://google.com',
		icon: '/favicon.ico',
	},
];


export default function Home() {
	return (
		<Container>
			<Head>
				<title>Examples- Tech Corner</title>
				<meta name='description' content='Example page' />
			</Head>
			<MainLayout pt="64px">
				<HStack spacing={8} mb={8} wrap='wrap'>
					<SingleTopicButton topic='Breadth First Search Super Uber long' to='/' />
					<SingleTopicButton topic='Breadth First Search' to='/' />
				</HStack>
				<HStack spacing={8} mb={8} wrap='wrap'>
					<SingleTopicCard topic='Big O Notation' category='Algorithms' to='/notes/' />
					<SingleTopicCard topic='Time Complexity' category='Algorithms' />
					<SingleTopicCard topic='Space Complexity with more' category='Algorithms' />
				</HStack>
				<NoteSectionContainer>
					<Heading fontSize='lg' fontWeight='semibold' color='#353535'>
						What is Big Oh Notation?
					</Heading>
					<Text fontSize='sm' color='#686868'>
						Hello world...
					</Text>
				</NoteSectionContainer>
				<AddResourcesCard srcs={addResources} w='300px' mt={8} />
				<HeroPostCard
					mb={8}
					mt={8}
					title='How to craft your tech resume for your dream job'
					caption='Kickstart your tech job hunt with a great resume. This guide is suited for those just getting started.'
					category={{ name: 'career', slug: 'career' }}
					published_at='June 30, 2021'
					link='/'
					thumbnail={thumbnailMeta}
				/>
				<DownloadCard img='/images/coffee.jpg' />

				<Box m={8} maxWidth='760px'>
					<Heading mb={8}>Here is an article with an example of a thumbnail...</Heading>
					<p>
						Kielbasa bacon boudin swine cow tri-tip shankle. Ham hock flank landjaeger porchetta, strip steak t-bone short
						loin beef chuck tri-tip kielbasa bresaola prosciutto hamburger bacon. Cow t-bone bresaola, swine ham bacon
						shankle ground round. Turkey pancetta sirloin, beef spare ribs boudin biltong pork frankfurter meatloaf jerky
						meatball bacon porchetta jowl.
					</p>
					<ThumbnailImage my={10} src='/images/coffee.jpg' alt='coffee' />
					<p>
						Kielbasa bacon boudin swine cow tri-tip shankle. Ham hock flank landjaeger porchetta, strip steak t-bone short
						loin beef chuck tri-tip kielbasa bresaola prosciutto hamburger bacon. Cow t-bone bresaola, swine ham bacon
						shankle ground round. Turkey pancetta sirloin, beef spare ribs boudin biltong pork frankfurter meatloaf jerky
						meatball bacon porchetta jowl.
					</p>
					<BodyImage my={10} src='/images/coffee.jpg' alt='coffee' caption='This is some lovely coffee!' />
				</Box>
				Here's an example using the Article Layout:
				<ArticleLayout {...articleMeta} thumbnail={thumbnailMeta}>
					<p>
						Kielbasa bacon boudin swine cow tri-tip shankle. Ham hock flank landjaeger porchetta, strip steak t-bone short
						loin beef chuck tri-tip kielbasa bresaola prosciutto hamburger bacon. Cow t-bone bresaola, swine ham bacon
						shankle ground round. Turkey pancetta sirloin, beef spare ribs boudin biltong pork frankfurter meatloaf jerky
						meatball bacon porchetta jowl.
					</p>
					<BodyImage my={10} src='/images/coffee.jpg' alt='coffee' caption='This is some lovely coffee!' />
				</ArticleLayout>
				<Stack spacing={8} maxWidth="600px">
					<Heading>Rendering Markdown: </Heading>
					<ReactMarkdown components={notesComponents}>{markdownContent}</ReactMarkdown>
					<NoteMarkdown>
						{`The lift coefficient ($C_L Fib_n = \\frac {\\phi^n}{\\sqrt(5)}$) is a dimensionless coefficient.\n\nHello 
						${texContent}`}
					</NoteMarkdown>
				</Stack>
			</MainLayout>
		</Container>
	);
}
