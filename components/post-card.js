import { Box, Image, Text } from '@chakra-ui/react';
import PostTag from './post-tag';

export default function PostCard({
    imgSrc,
    imgAlt,
    tag,
    title,
    description,
    publishDate,
    ...props
}) {
    return (
        <Box width="300px" height="fit-content" borderWidth="1px" bg="white">
            <Box height="160px" overflow="hidden">
                <Image src={imgSrc} alt={imgAlt} />
            </Box>

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <PostTag tag={tag} color={"blue.400"} />
                </Box>

                <Box height="96px">
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

                <Box d="flex" mt="2" alignItems="center" color="#959595" fontSize="12">
                    Published {publishDate}
                </Box>
            </Box>
        </Box>
    )
}