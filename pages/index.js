import NextLink from 'next/link';
import { Box, Flex, Heading, Link, Text, Image, } from '@chakra-ui/react';
import { motion } from "framer-motion";

import Container from '../components/container';
import { SingleTopicCard } from '../components/single-topic';
import PostCard from '../components/post-card';
import Seo from "../components/seo";
import { fetchStrapi } from '../lib/api';

const SECTION_ONE = {
	title: "Recently added notes",
	description: "Check out our growing collection of notes on Computer Science topics",
	button: "See all notes"
}

const SECTION_TWO = {
	title: "Latest blog posts",
	description: "Where we unapologetically share our takeaways and experiences from our ongoing career journeys",
	button: "See all posts"
}

export default function Home({ recentNotes, recentPosts, hero, seo }) {
	return (
		<Container headerBg={["white", "#F5FBFF"]}>
			<Seo seo={seo} />
			<Flex
				justifyContent='center'
				bg='#F5FBFF'
				w="100%"
				pt="54px"
				pb={["54px", "80px"]}>
				<Flex
					width="100%"
					height="fit-content"
					px={['1.5rem', '4rem']}
					maxWidth="1180px"
					flexDirection={["column", "column", "row"]}>
					<Flex flexBasis="50%" pl={2} pr={[2, 2, 7]} flexDirection="column" justifyContent="center">
						<motion.div initial="displaced" animate="normal"
							transition={{ duration: 1, delay: .2 }} variants={{
								displaced: {
									translateY: 28,
									opacity: 0
								},
								normal: {
									translateY: 0,
									opacity: 1,
								}
							}}>
							<Heading as="h1" mb={[2, 4]} color="#042E4E"
								fontSize={["3xl", "4xl", "clamp(100%, 1rem + 2vw, 48px)"]} lineHeight="130%">
								{hero.heroTitle}
							</Heading>
						</motion.div>
						<motion.div initial="displaced" animate="normal"
							transition={{ duration: .8, delay: .8 }} variants={{
								displaced: {
									translateY: 28,
									opacity: 0
								},
								normal: {
									translateY: 0,
									opacity: 1,
								}
							}}>
							<Text fontSize={["md", "lg", "xl"]} mb={[8, 6, 2]} color="#031628">
								{hero.heroDescription}
							</Text>
						</motion.div>
					</Flex>
					<Flex flexBasis="50%" flexDirection="column" justifyContent="center">
						<Image objectFit="contain" src="/assets/hero.svg" alt="hero" />
					</Flex>
				</Flex>
			</Flex>
			<Flex justifyContent='center' w="100%" bg='white' py={16} color="#778995" mb="6rem">
				<Flex width="100%" maxWidth="1024px" flexDirection="column" justifyContent="flex-start"
					px={['2rem', '4rem']} >
					<Box as="section" mb="56px">
						<Heading bg="linear-gradient(180deg, rgba(255,255,255,0) 50%, #F5FBFF 50%)"
							fontSize={["2xl", "3xl"]}
							width="fit-content"
							pr={4}
							mb={4}
							color="#031628">
							{SECTION_ONE.title}
						</Heading>
						<Text fontSize="md" >
							{SECTION_ONE.description}
						</Text>
						<Flex flexWrap="wrap" width="100%" pt={10} pb={[0, 4, 8]}>
							{
								recentNotes.map(({ slug, title, topic }) => {
									return (
										< SingleTopicCard key={slug}
											topic={title}
											category={topic.name}
											to={`/notes/${topic.slug}/${slug}`}
											mr="2rem"
											mb={["1.5rem", "1.5rem", 0]}
										/>
									)
								})
							}
						</Flex>
						<Text ml={1} color="#042E4E" fontWeight="medium" _hover={{
							color: "#031628",
							fontWeight: 'semibold',
							textDecoration: 'underline'

						}}>
							<Link as={NextLink} href="/notes">
								<a>{SECTION_ONE.button}</a>
							</Link>
						</Text>
					</Box>
					<Box as="section">
						<Heading color="#031628" fontSize={["2xl", "3xl"]} mb={4}
							bg="linear-gradient(180deg, rgba(255,255,255,0) 50%, #F5FBFF 50%)"
							width="fit-content"
							pr={4}>
							{SECTION_TWO.title}
						</Heading>
						<Text fontSize="md">
							{SECTION_TWO.description}
						</Text>
						<Flex flexDirection="row" justifyContent="space-between" flexFlow="wrap">
							{
								recentPosts.map((post) => (
									<PostCard key={post.title} {...post} mr="2rem" mb={["1.5rem", 0]} />))
							}
						</Flex>
						<Flex justifyContent={["flex-start"]} pl={2}>
							<Text color="#042E4E" fontWeight="medium" _hover={{
								color: "#031628",
								fontWeight: 'semibold',
								textDecoration: 'underline'

							}}>
								<Link as={NextLink} href="/blog">
									<a>{SECTION_TWO.button}</a>
								</Link>
							</Text>
						</Flex>
					</Box>

				</Flex>
			</Flex>
		</Container>
	);
}

export async function getStaticProps() {

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
				...homepage,
			},
		};

	} catch (error) {
		console.log(error);
	}
}
