import { Box, Image, Text } from '@chakra-ui/react';
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
    const [isSmallerThan855] = useMediaQuery("(max-width: 1000px)")

    const flexBasis = isSmallerThan660 ? "100%" : (isSmallerThan855 ? "45%" : "30%");
    // if (isSmallerThan660) {
    return (
        <Box flexBasis={flexBasis} height={["fit-content"]}
            boxShadow="-2px 2px 1px rgba(0, 0, 0, 0.1)"
            border="1px solid #042E4E"
            bg="white" mb="20px" mt="20px">
            <Link href={`/blog/posts/${slug}`} passHref>
                <Box as="a">
                    <Image height={["46%", "136px"]} width="100%" src={thumbnail.url} alt={thumbnail.alt} objectFit="cover" />
                </Box>
            </Link>

            <Box p={5}>
                <Box d="flex" alignItems="baseline">
                    <PostTag tag={category.name} slug={category.slug} colorIndex={0} />
                </Box>
                <Box mt={3} color="#042E4E" minHeight="78px">
                    <Link href={`/blog/posts/${slug}`} passHref>
                        <Box
                            as="a"
                            fontWeight="semibold"
                            fontSize="lg"
                            lineHeight="120%"
                            color="#031628"
                        >
                            <Text as="h4" noOfLines={2}>{title}</Text>
                        </Box>
                    </Link>

                    <Box fontSize="sm" mt={2} lineHeight="136%">
                        <Text noOfLines={2}>{description}</Text>
                    </Box>
                </Box>

                <Text pt={2} color="#98A8B2" fontSize="xs">
                    Published {published_at.slice(0, 10)}
                </Text>
            </Box>
        </Box>
    )

    // } else if (isSmallerThan855) {
    //     return (
    //         <Box flexBasis="45%" height="340px" borderWidth="1px" bg="white" mb="20px" mt="20px">
    //             <Link href={`/blog/posts/${slug}`} passHref>
    //                 <Box as="a">
    //                     <Image height="150px" width="330px" src={thumbnail.url} alt={thumbnail.alt} objectFit="cover" />
    //                 </Box>
    //             </Link>

    //             <Box p="6">
    //                 <Box d="flex" alignItems="baseline">
    //                     <PostTag tag={category.name} slug={category.slug} color={"blue.400"} />
    //                 </Box>
    //                 <Box height="90px" mt="2">
    //                     <Link href={`/blog/posts/${slug}`} passHref>
    //                         <Box
    //                             as="a"
    //                             overflow="hidden"
    //                             mt="2"
    //                             mb="1"
    //                             fontWeight="semibold"
    //                             fontSize="16"
    //                             lineHeight="tight"
    //                         >
    //                             <Text as="h4" noOfLines={2}>{title}</Text>
    //                         </Box>
    //                     </Link>

    //                     <Box fontSize="13" mt="1">
    //                         <Text noOfLines={2}>{description}</Text>
    //                     </Box>
    //                 </Box>

    //                 <Box d="flex" mt="2" alignItems="center" color="#959595" fontSize="12">
    //                     Published {published_at.slice(0, 10)}
    //                 </Box>
    //             </Box>
    //         </Box>
    //     )
    // }
    // return (
    //     <Box flexBasis="30%" height="345px" borderWidth="1px" bg="white" mb="20px" mt="20px">
    //         <Link href={`/blog/posts/${slug}`} passHref>
    //             <Box as="a">
    //                 <Image height="150px" width="300px" src={thumbnail.url} alt={thumbnail.alt} objectFit="cover" />
    //             </Box>


    //         </Link>

    //         <Box p="6">
    //             <Box d="flex" alignItems="baseline">
    //                 <PostTag tag={category.name} slug={category.slug} color={"blue.400"} />
    //             </Box>
    //             <Box height="90px" mt="2">
    //                 <Link href={`/blog/posts/${slug}`} passHref>
    //                     <Box
    //                         as="a"
    //                         overflow="hidden"
    //                         mt="2"
    //                         mb="1"
    //                         fontWeight="semibold"
    //                         fontSize="16"
    //                         lineHeight="tight"
    //                     >
    //                         <Text as="h4" noOfLines={2}>{title}</Text>
    //                     </Box>
    //                 </Link>

    //                 <Box fontSize="13" mt="1">
    //                     <Text noOfLines={2}>{description}</Text>
    //                 </Box>
    //             </Box>

    //             <Box d="flex" mt="2" alignItems="center" color="#959595" fontSize="12">
    //                 Published {published_at.slice(0, 10)}
    //             </Box>
    //         </Box>
    //     </Box>

    // )
}