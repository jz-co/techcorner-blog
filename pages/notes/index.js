import { Text, Heading, Box, Flex } from '@chakra-ui/react'

import Container from '../../components/container'
import { SingleTopicCard } from '../../components/single-topic'
import MainLayout from '../../components/layout'
import CategorySideNav from '../../components/category-sidenav';
import Seo from '../../components/seo';

import { fetchStrapi } from '../../lib/api';

export default function Notes({ notes, allSubjects }) {
  const seo = {
    metaTitle: 'Computer Science Notes',
  }
  return (
    <Container bg="#F5FBFF">
      <Seo seo={seo} />
      <MainLayout>
        <Flex mt={12} w='100%' flexWrap={["wrap", "wrap", "nowrap"]}>
          <CategorySideNav title='Subjects' categories={allSubjects} pathPrefix={`/notes`} mb={8} mr={24} />
          <Box maxWidth='800px'>
            <Heading as='h1' mb='1.5rem' color='#042E4E'>
              Computer Science Notes
            </Heading>
            <Text mb='2.5rem' color='gray.500'>
              Here you will find quick reference notes for some of the major computer science
              topics, as well as links to more in-depth resources if you want to learn more.{' '}
            </Text>
            <Flex flexWrap="wrap" width="100%">
              {
                notes.map(({ slug, title, topic }) => {
                  return (
                    <SingleTopicCard key={slug} topic={title} category={topic.name} to={`/notes/${topic.slug}/${slug}`}
                      mr="2rem" mb={"1.5rem"} />
                  )
                })
              }
            </Flex>
          </Box>
        </Flex>
      </MainLayout>
    </Container>
  )
}

export async function getStaticProps() {
  const notes = await fetchStrapi("get.notes");
  const allSubjects = await fetchStrapi("get.notes-topics");

  return {
    props: {
      notes,
      allSubjects
    },
  };
}