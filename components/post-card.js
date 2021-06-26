import { Box, Image, Text } from '@chakra-ui/react';
import PostTag from './post-tag';
import Link from 'next/link';

export default function PostCard({
    thumbnail,
    category,
    title,
    description,
    published_at,
    slug,
    ...props
}) {
    return (
        <Box width="300px" height="fit-content" borderWidth="1px" bg="white">
            <Link href={`/blog/posts/${slug}`} passHref>
                <Box as="a" height="160px" overflow="hidden">
                    <Image src={thumbnail.src} alt={thumbnail.alt} />
                </Box>
            </Link>

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <PostTag tag={category.name} slug={category.slug} color={"blue.400"} />
                </Box>
                <Link href={`/blog/posts/${slug}`} passHref>
                    <Box as="a" height="96px">
                        <Box
                            maxHeight="75px"
                            overflow="hidden"
                            mt="1"
                            mb="1"
                            fontWeight="semibold"
                            fontSize="16"
                            lineHeight="tight"
                        >
                            <Text as="h4" noOfLines={2}>{title}</Text>
                        </Box>

                        <Box fontSize="13">
                            <Text noOfLines={2}>{description}</Text>
                        </Box>
                    </Box>
                </Link>

                <Box d="flex" mt="2" alignItems="center" color="#959595" fontSize="12">
                    Published {published_at}
                </Box>
            </Box>
        </Box>
    )
}