import Link from 'next/link'
import { Button, Text, Box, LinkBox, LinkOverlay } from "@chakra-ui/react"

function SingleTopicButton({ topic, to, ...props }) {
    return (
        <Link href={to}>
            <Button
                bg="white"
                borderRadius="12px"
                boxShadow="0px 0px 12px rgba(3, 45, 69, 0.2)"
                border="1px solid #98A8B3"
                textAlign="center"
                width="240px"
                height="50px"
                color="#031628"
                px="24px"
                _hover={{ boxShadow: '0px 1px 12px rgba(1, 73, 114, 0.4)', color: "#031628" }}
                {...props}>
                <Text isTruncated>
                    {topic}
                </Text>
            </Button>
        </Link>
    )
}

function SingleTopicCard({ topic, category, to = "/", ...props }) {

    return (
        <Box>
            <LinkBox
                as="button"
                bg="white"
                borderRadius="12px"
                border="1px solid #042E4E"
                boxShadow="0px 0px 12px rgba(3, 45, 69, 0.2)"
                width="220px"
                textAlign="left"
                color="#031628"
                py="28px"
                px="26px"
                _hover={{ boxShadow: '0px 0px 12px rgba(1, 73, 114, 0.4)' }}
                {...props}>
                <Text
                    isTruncated
                    fontWeight="medium">
                    <Link href={to}>
                        <LinkOverlay>{topic}</LinkOverlay>
                    </Link>
                </Text>
                <Text
                    fontSize="sm"
                    color="#778995"
                    isTruncated
                    fontWeight="normal">
                    {category}
                </Text>
            </LinkBox>
        </Box>
    )

}

export { SingleTopicButton, SingleTopicCard }