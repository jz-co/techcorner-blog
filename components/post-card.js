import { Box, Image, Text, Flex } from '@chakra-ui/react';
import PostTag from './post-tag';
import Link from 'next/link';
import { useMediaQuery } from "@chakra-ui/react"

export default function PostCard({
    thumbnail,
    category,
    title,
    description,
    published_at,
    slug,
    ...props
}) {
    const [isSmallerThan660] = useMediaQuery("(max-width: 660px)")
    const [isSmallerThan855] = useMediaQuery("(max-width: 855px)")
    if (isSmallerThan660) {
        return (
        <Box flexBasis="100%" height="330px" borderWidth="1px" bg="white" mb="20px" mt="20px">
                <Link href={`/blog/posts/${slug}`} passHref>
                    <Box as="a">
                        <Image height="160px" width="600px" src={thumbnail.url} alt={thumbnail.alt} objectFit="cover"/>
                    </Box>
                </Link>

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <PostTag tag={category.name} slug={category.slug} color={"blue.400"} />
                    </Box>
                    <Box height="65px" mt="2">
                        <Link href={`/blog/posts/${slug}`} passHref>
                            <Box
                                as="a" 
                                overflow="hidden"
                                mt="2"
                                mb="1"
                                fontWeight="semibold"
                                fontSize="16"
                                lineHeight="tight"
                            >
                                <Text as="h4" noOfLines={1}>{title}</Text>
                            </Box>
                        </Link>

                        <Box fontSize="13" mt="1">
                            <Text noOfLines={2}>{description}</Text>
                        </Box>
                    </Box>

                    <Box d="flex" mt="2" alignItems="center" color="#959595" fontSize="12">
                        Published {published_at.slice(0, 10)}
                    </Box>
                </Box>
            </Box>
        )

    } else if (isSmallerThan855) {
        return (
            <Box flexBasis="45%" height="340px" borderWidth="1px" bg="white" mb="20px" mt="20px">
                <Link href={`/blog/posts/${slug}`} passHref>
                    <Box as="a">
                        <Image height="150px" width="330px" src={thumbnail.url} alt={thumbnail.alt} objectFit="cover" />
                    </Box>
                </Link>

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <PostTag tag={category.name} slug={category.slug} color={"blue.400"} />
                    </Box>
                    <Box height="90px" mt="2">
                        <Link href={`/blog/posts/${slug}`} passHref>
                            <Box
                                as="a" 
                                overflow="hidden"
                                mt="2"
                                mb="1"
                                fontWeight="semibold"
                                fontSize="16"
                                lineHeight="tight"
                            >
                                <Text as="h4" noOfLines={2}>{title}</Text>
                            </Box>
                        </Link>

                        <Box fontSize="13" mt="1">
                            <Text noOfLines={2}>{description}</Text>
                        </Box>
                    </Box>

                    <Box d="flex" mt="2" alignItems="center" color="#959595" fontSize="12">
                        Published {published_at.slice(0, 10)}
                    </Box>
                </Box>
            </Box>
        )
    }
    return (
        <Box flexBasis="30%" height="340px" borderWidth="1px" bg="white" mb="20px" mt="20px">
            <Link href={`/blog/posts/${slug}`} passHref>
                <Box as="a">
                    <Image height="150px" width="300px" src={thumbnail.url} alt={thumbnail.alt} objectFit="cover" />
                </Box>
                    

                </Link>

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <PostTag tag={category.name} slug={category.slug} color={"blue.400"} />
                    </Box>
                    <Box height="65px" mt="2">
                        <Link href={`/blog/posts/${slug}`} passHref>
                            <Box
                                as="a" 
                                overflow="hidden"
                                mt="2"
                                mb="1"
                                fontWeight="semibold"
                                fontSize="16"
                                lineHeight="tight"
                            >
                                <Text as="h4" noOfLines={1}>{title}</Text>
                            </Box>
                        </Link>

                        <Box fontSize="13" mt="1">
                            <Text noOfLines={2}>{description}</Text>
                        </Box>
                    </Box>

                    <Box d="flex" mt="2" alignItems="center" color="#959595" fontSize="12">
                        Published {published_at.slice(0, 10)}
                    </Box>
                </Box>
            </Box>

    )
}