import Head from 'next/head';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import HeroPostCard from '../../../components/hero-post-card';

import Container from '../../../components/container';
import { SingleTopicButton } from '../../../components/single-topic';
import CategorySideNav from '../../../components/category-sidenav';
import MainLayout from '../../../components/layout';
import { fetchStrapi } from '../../../lib/api';
import PostCard from '../../../components/post-card';

export default function BlogTopic({allArticleCategories, category, articles}) {
    return (
		<Container currPage='blog posts'>
			<Head>
				<title>{category.name} - Tech Corner</title>
				<meta name='description' content={`Find all CS notes on the topic of ${category.name.toLowerCase()}`} />
			</Head>
			<MainLayout>
				<Flex mt={12} w='100%' flexWrap="wrap" >
					<CategorySideNav title='Topics' currCategory={category} categories={allArticleCategories} pathPrefix={`/blog/topic`} mb={8} mr={24} minWidth="200px" />
					<Box maxWidth='800px'>
						<Heading as='h1' mb='1.5rem' color='#353535'>
							{category.name[0].toUpperCase().concat(category.name.slice(1))}
						</Heading>

						<Flex gridColumnGap="2rem" gridRowGap="1.5rem" flexWrap="wrap" width="100%">
							<HeroPostCard {...articles[0]} category={category}></HeroPostCard>
							<Flex flex="0 1 auto" flexDirection="row" flexWrap="wrap" margin="0 -.8rem">
															{
								articles.slice(1, articles.length).map(( article ) => {
									return (
									
										<PostCard key={articles.id} {...article} category={ category }/>
								)
								})
								}
							</Flex>

                        </Flex>
					</Box>
				</Flex>
			</MainLayout>
		</Container>
	);
}


export async function getStaticPaths() {

	const allArticleCategories = await fetchStrapi('get.article-categories');

	const paths = allArticleCategories.map((category) => ({
		params: { slug: category.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}


export async function getStaticProps({ params }) {



	const allArticleCategories = await fetchStrapi('get.article-categories');

	const { name, slug, articles } = allArticleCategories.filter((category) => category.slug === params.slug)[0];
	return {
		props: {
			allArticleCategories,
			category: { name, slug },
			articles,
		},
	};
}
