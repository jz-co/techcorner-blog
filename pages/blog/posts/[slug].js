import Head from 'next/head';

import { Box, Image } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

import Container from "../../../components/container";
import { articlesComponents } from '../../../components/article-markdown';
import { fetchStrapi } from '../../../lib/api';
import ChecklistSection from '../../../components/checklist-section';
import ArticleLayout from '../../../components/article-layout';

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
                    console.log(section)
                    if (section.__component == "components.section") {
                        return (
                            <ReactMarkdown key={section.id} components={articlesComponents}>
                                {section.content}
                                
                            </ReactMarkdown>
                        )
                    } if (section.__component == "components.media-image") {
                        return <Image w='100%' maxW='1000px' objectFit='cover' src={section.images[0].url}/>
                    } if (section.__component == "components.checklist") {
                        return <Box mt="20px"><ChecklistSection title={section.name} items={section.items}></ChecklistSection></Box>
                    }
                    // if (section.name && section.items) {
                    //     return (
                    //         <Box>
                    //             <ReactMarkdown components={articlesComponents}>
                    //                 {section.name}
                    //             </ReactMarkdown> 

                                    
                    //             {section.items.map((item) => {
                    //                 return <Box key={item.id} pb="10px"> <ReactMarkdown>{item.text}</ReactMarkdown> </Box>
                    //             })}
                    //         </Box>

                    //     ) 
                    // } if (section.name) {
                    //     return  ( <ReactMarkdown components={articlesComponents}>
                    //                 {section.name}
                    //             </ReactMarkdown> )
                    // } if (section.items) {
                    //     {section.items.map((item) => {
                    //         return <Box key={item.id} pb="10px"> <ReactMarkdown>{item.text}</ReactMarkdown> </Box>
                    //     })}
                    // } 

                })}
            </ArticleLayout>

        </Container>
    );
}


export async function getStaticPaths() {

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
