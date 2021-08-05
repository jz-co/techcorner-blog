import Head from 'next/head';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import Container from '../../../components/container';
import CategorySideNav from '../../../components/category-sidenav';
import MainLayout from '../../../components/layout';
import { fetchStrapi } from '../../../lib/api';
import ReactPaginate from "react-paginate";
import { useState } from "react";
import PostCard from "../../../components/post-card.js";
import paginationStyles from '../../../styles/pagination.module.css'
import Seo from "../../../components/seo";
export default function BlogTopic({ allArticleCategories, category, articles }) {

	const byDate = (a, b) => {
		return -(new Date(a.published_at).valueOf() - new Date(b.published_at).valueOf());
	}

	const [pageNumber, setPageNumber] = useState(0);

	const articlesPerPage = 9;
	const pagesVisited = pageNumber * articlesPerPage;

	const pageCount = Math.ceil(articles.length / articlesPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	const displayArticles = articles.sort(byDate)
		.slice(pagesVisited, pagesVisited + articlesPerPage)
		.map((article) => {
			return (
				<PostCard key={articles.id} {...article} category={category} />
			);
		});

	return (
		<Container bg="#F5FBFF">
			<Seo seo={category.seo} />
			<MainLayout>
				<Flex mt={12} w='100%' flexWrap={["wrap", "wrap", "nowrap"]} >
					<CategorySideNav title='Topics' currCategory={category} categories={allArticleCategories} pathPrefix={`/blog/topic`} allPrefix={`/blog`} mb={8} mr={16} />
					<Box maxWidth='800px'>
						<Heading as='h1' mb='1.5rem' color='#042E4E' fontSize="3xl">
							{category.name[0].toUpperCase().concat(category.name.slice(1))}
						</Heading>
						<Flex flexDirection="row" justifyContent="space-between" flexFlow="wrap">
							{displayArticles}
						</Flex>

						<Flex justifyContent="center" marginTop="60px">
							<ReactPaginate
								previousLabel={"<"}
								nextLabel={">"}
								pageCount={pageCount}
								onPageChange={changePage}
								containerClassName={paginationStyles.paginationBttns}
								previousLinkClassName={paginationStyles.previousBttn}
								nextLinkClassName={paginationStyles.nextBttn}
								disabledClassName={paginationStyles.paginationDisabled}
								activeClassName={paginationStyles.paginationActive}
							/>
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
