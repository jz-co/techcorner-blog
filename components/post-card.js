import { Button, Box, Image, Text } from '@chakra-ui/react';

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
        <Box width="300px" height="360px" borderWidth="1px">
            <Box height="160px" overflow="hidden">
                <Image src={imgSrc} alt={imgAlt} />
            </Box>

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Button
                        fontSize="13"
                        mb="1"
                        size="sm"
                        border="2px"
                        borderColor="#353535"
                        _hover={{
                            background: "#353535",
                            color: "white",
                        }}
                    >
                        {tag.toUpperCase()}
                    </Button>
                </Box>

                <Box
                    maxHeight="75px"
                    overflow="hidden"
                    mt="1"
                    mb="1"
                    fontWeight="semibold"
                    fontSize="16"
                    as="h4"
                    lineHeight="tight"
                >
                    <Text noOfLines={2}>{title}</Text>
                </Box>

                <Box fontSize="13">
                    <Text noOfLines={2}>{description}</Text>
                </Box>

                <Box d="flex" mt="2" alignItems="center" color="#959595" fontSize="12">
                    Published {publishDate}
                </Box>
            </Box>
        </Box>
    )
}