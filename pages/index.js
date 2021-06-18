import { HStack, Text, Heading, Box } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

import Container from '../components/container';
import { SingleTopicButton, SingleTopicCard } from '../components/single-topic';
import NoteSectionContainer from '../components/note-section-container';
import AddResourcesCard from '../components/add-resources';
import HeroPostCard from '../components/hero-post-card';
import DownloadCard from '../components/download-card';
import CategorySideNav from '../components/category-sidenav';
import ThumbnailImage from '../components/thumbnail';
import BodyImage from '../components/body-image';
import ArticleLayout from '../components/article-layout';
import MainLayout from '../components/layout';

// FAKE DATA
const articleMeta = {
	title: 'How to write a tech resume',
	caption:
		'Kickstart your tech job hunt with a great resume. This guide is suited for those just getting started on their tech career journey.',
	author: 'Jessie Lam',
	publishedDate: 'June 30, 2021',
	category: 'Career',
};

const thumbnailMeta = {
	src: '/images/coffee.jpg',
	alt: 'coffee on a book',
};

export default function Home() {
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
				<title>Home - Tech Corner</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<MainLayout>
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
					tag='career'
					publishedDate='June 30, 2021'
					link='/'
					image='/images/coffee.jpg'
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
				<ArticleLayout meta={articleMeta} thumbnail={thumbnailMeta}>
					<p>
						Kielbasa bacon boudin swine cow tri-tip shankle. Ham hock flank landjaeger porchetta, strip steak t-bone short
						loin beef chuck tri-tip kielbasa bresaola prosciutto hamburger bacon. Cow t-bone bresaola, swine ham bacon
						shankle ground round. Turkey pancetta sirloin, beef spare ribs boudin biltong pork frankfurter meatloaf jerky
						meatball bacon porchetta jowl.
					</p>
					<BodyImage my={10} src='/images/coffee.jpg' alt='coffee' caption='This is some lovely coffee!' />
				</ArticleLayout>
			</MainLayout>
		</Container>
	);
}
