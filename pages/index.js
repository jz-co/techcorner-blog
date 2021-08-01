import NextLink from 'next/link';
import { Box, Flex, Heading, Link, Text, Image, } from '@chakra-ui/react';
import { motion } from "framer-motion";

import Container from '../components/container';
import { SingleTopicCard } from '../components/single-topic';
import PostCard from '../components/post-card';
import Seo from "../components/seo";
import { fetchStrapi } from '../lib/api';

export default function Home({ recentNotes, recentPosts, hero }) {
	const seo = {
		metaTitle: "Home",
		metaDescription: "The home pages of tech corner"
	}
	return (
		<Container>
			<Seo seo={seo} />
			<Flex
				justifyContent='center'
				bg='white'
				w="100%"
				pt="54px"
				pb={["54px", "80px"]}>
				<Flex width="100%" height="fit-content" px={['1.5rem', '4rem']} maxWidth="1180px" flexDirection={["column", "row"]}>

					<Flex flexBasis="50%" px={2} flexDirection="column" justifyContent="center">
						<motion.div initial="displaced" animate="normal" transition={{ duration: 1, delay: .2 }} variants={{
							displaced: {
								translateY: 28,
								opacity: 0
							},
							normal: {
								translateY: 0,
								opacity: 1,
							}
						}}>
							<Heading as="h1" mb={[2, 4]} color="#353535" fontSize={["3xl", "4xl"]} lineHeight="130%">
								{hero.heroTitle}
							</Heading>
						</motion.div>
						<motion.div initial="displaced" animate="normal" transition={{ duration: .8, delay: .8 }} variants={{
							displaced: {
								translateY: 28,
								opacity: 0
							},
							normal: {
								translateY: 0,
								opacity: 1,
							}
						}}>
							<Text fontSize="md" mb={[8, 2]} color="gray.500">
								{hero.heroDescription}
							</Text>
						</motion.div>
					</Flex>
					<Flex flexBasis="50%" flexDirection="column" justifyContent="center">
						<Image objectFit="contain" src="/assets/hero.svg" alt="hero" />
					</Flex>
				</Flex>
			</Flex>
			<Flex justifyContent='center' w="100%" bg='#F5F5F5' py={16} color="#353535" mb="6rem">
				<Flex width="100%" px={['2rem', '4rem']} maxWidth="1120px" flexDirection="column" justifyContent="flex-start">
					<Box as="section" mb={[18, 28]}>
						<Heading fontSize="2xl" mb={4}>
							Recently Added Notes
						</Heading>
						<Text fontSize="md">
							Check out our notes on Computer Science topics
						</Text>
						<Flex flexWrap="wrap" width="100%" py={10}>
							{
								recentNotes.map(({ slug, title, topic }) => {
									return (
										< SingleTopicCard key={slug} topic={title}
											category={topic.name} to={`/notes/${topic.slug}/${slug}`} mr="2rem" mb={["1.5rem", 0]} />
									)
								})
							}
						</Flex>
						<Flex justifyContent={["flex-start"]} pl={2}>
							<Text color="gray.400" fontWeight="medium" _hover={{
								color: "gray.600",
								fontWeight: 'semibold',
								textDecoration: 'underline'

							}}>
								<Link as={NextLink} href="/notes">
									<a>See all notes</a>
								</Link>
							</Text>
						</Flex>
					</Box>
					<Box>
						<Heading fontSize="2xl" mb={4}>
							Latest Blog Posts
						</Heading>
						<Text fontSize="md">
							Everything from career to humor, check out our awesome blog!
						</Text>
						<Flex flexDirection="row" justifyContent="space-between" flexFlow="wrap">
							{
								recentPosts.map((post) => (<PostCard key={post.title} {...post} mr="2rem" mb={["1.5rem", 0]} />))
							}
						</Flex>
						<Flex justifyContent={["flex-start"]} pl={2}>
							<Text color="gray.400" fontWeight="medium" _hover={{
								color: "gray.600",
								fontWeight: 'semibold',
								textDecoration: 'underline'

							}}>
								<Link as={NextLink} href="/blog">
									<a>See all posts</a>
								</Link>
							</Text>
						</Flex>
					</Box>

				</Flex>
			</Flex>
		</Container>
	);
}

export async function getStaticProps({ params }) {

	try {
		const [homepage, recentNotes, articles] = await Promise.all([
			fetchStrapi("get.homepage"),
			fetchStrapi('get.recent-notes'),
			fetchStrapi('get.recent-articles')
		])

		return {
			props: {
				recentNotes,
				recentPosts: articles,
				hero: homepage.hero,
			},
		};

	} catch (error) {
		console.log(error);
	}
	// // Call Strapi to get homepage data (for hero section)
	// const { hero } = await fetchStrapi("get.homepage");

	// // Call Strapi API to get 4 most recently added notes
	// const recentNotes = await fetchStrapi('get.recent-notes');

	// // Call Strapi API to get 3 most recently added blog posts/articles
	// const articles = await fetchStrapi('get.recent-articles');
}
