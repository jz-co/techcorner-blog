import Head from 'next/head';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Container from '../../components/container';
import MainLayout from '../../components/layout';
import { fetchStrapi } from '../../lib/api';
import HeroPostCard from '../../components/hero-post-card';
import PostCard from '../../components/post-card';
import CategorySideNav from '../../components/category-sidenav';
import { useMediaQuery } from "@chakra-ui/react"
import ReactPaginate from "react-paginate";
import paginationStyles from '../../styles/pagination.module.css'
import { useState } from "react";

export default function Blog({ articles, allArticleCategories }) {
  const [isSmallerThan660] = useMediaQuery("(max-width: 660px)")
  const [pageNumber, setPageNumber] = useState(0);

  const articlesPerPage = 9;
  const pagesVisited = pageNumber * articlesPerPage;

  const pageCount = Math.ceil(articles.length / articlesPerPage);
  const realPageCount = Math.ceil((articles.length - 1) / articlesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const renderArticles = () => {
    if (pageNumber == 0) {
      return (
        <Box>
          {isSmallerThan660 ? "" : <HeroPostCard {...articles[pagesVisited]}></HeroPostCard>}
          <Flex flexDirection="row" justifyContent="space-between" flexFlow="wrap">
            {isSmallerThan660 ?
              articles.slice(0, 10).map((post) => {
                return (

                  <PostCard key={post.id} {...post} />
                )
              }) :
              articles.slice(1, 10).map((post) => {
                return (
                  <PostCard key={post.id} {...post} />
                )
              })
            }
          </Flex>
        </Box>
      )
    } else {
      return (
        <Flex flexDirection="row" justifyContent="space-between" flexFlow="wrap">
          {articles.slice(pagesVisited + 1, pagesVisited + articlesPerPage + 1).map((post) => {
            return (
              <PostCard key={post.id} {...post} />
            )
          })}
        </Flex>
      )
    }
  }

  return (
    <Container bg="#F5FBFF">
      <Head>
        <title>Blog - Tech Corner</title>
        <meta name="description" content="Generated by create next app" />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <MainLayout>
        <Flex mt={12} w='100%' flexWrap={["wrap", "wrap", "nowrap"]} >
          <CategorySideNav title='Topics' categories={allArticleCategories} pathPrefix={`/blog/topic`} allPrefix={`/blog`} mb={8} mr={16} />
          <Box maxWidth='800px'>
            <Heading as='h1' fontSize="3xl" mb='1.5rem' color='#042E4E'>
              Latest Posts
            </Heading>
            {renderArticles()}
            <Flex justifyContent="center" marginTop="60px">
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={realPageCount}
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
  )
}

export async function getStaticProps() {
  const articles = await fetchStrapi("get.articles");
  const allArticleCategories = await fetchStrapi("get.article-categories");

  return {
    props: {
      articles,
      allArticleCategories
    },
  };
}
