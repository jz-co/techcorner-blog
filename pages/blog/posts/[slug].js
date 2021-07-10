import Head from 'next/head';

import { Flex, Heading, Text, Stack, Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

import Container from "../../../components/container";
import MainLayout from '../../../components/layout';
import NoteSectionContainer from '../../../components/note-section-container';
import AddResourcesCard from '../../../components/resources-card';
import { notesComponents } from '../../../components/markdown';
import { fetchStrapi } from '../../../lib/api';
import ArticleLayout from '../../../components/article-layout';
import { resolveMotionValue } from 'framer-motion';

const vercelResource = {
    title: 'Next.js Documentation',
    source: 'Vercel',
    link: 'https://nextjs.org/docs/getting-started',
    icon: {
        url: '/favicon.ico',
        alternativeText: 'vercel icon'
    }
}


export default function BlogPost({ article }) {
    return (
        <Container>
            <Head>
                <title>{article.title} - Tech Corner</title>
                <meta name='description' content={`Blog article on ${article.title.toLowerCase()}`} />
            </Head>
            <ArticleLayout {...article}>
                {article.content.map((section) => {
                    if (section.content) {
                        return (
                            <ReactMarkdown key={section.id} components={notesComponents}>
                                {section.content}
                                
                            </ReactMarkdown>
                        )
                    } if (section.name && section.items) {
                        return (
                            <Box>
                                <ReactMarkdown components={notesComponents}>
                                    {section.name}
                                </ReactMarkdown> 

                                    
                                {section.items.map((item) => {
                                    return <Box key={item.id} pb="10px"> <ReactMarkdown>{item.text}</ReactMarkdown> </Box>
                                })}
                            </Box>

                        ) 
                    } if (section.name) {
                        return  ( <ReactMarkdown components={notesComponents}>
                                    {section.name}
                                </ReactMarkdown> )
                    } if (section.items) {
                        {section.items.map((item) => {
                            return <Box key={item.id} pb="10px"> <ReactMarkdown>{item.text}</ReactMarkdown> </Box>
                        })}
                    }

                })}
            </ArticleLayout>

        </Container>
    );
}


export async function getStaticPaths() {

    // Call Strapi API to get all notes topics, and all notes associated with each topic
    const articleCategories = await fetchStrapi('get.article-categories');

    const paths = articleCategories.reduce((accumulator, category) => {
        let slugs = category.articles.map(article => article.slug);
        let params = slugs.map(slug => ({ params: { category: category.slug, slug: slug } }));
        return accumulator.concat(params);
    }, []);

    return {
        paths,
        fallback: false,
    };
}


export async function getStaticProps({ params }) {


    const response = await fetchStrapi("get.article-by-slug", params.slug);
    const article = response[0];

    return {
        props: {
            article
        },
    };
}
