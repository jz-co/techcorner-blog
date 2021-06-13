import Link from 'next/link'
import { Button, Text, Box, LinkBox, LinkOverlay } from "@chakra-ui/react"

function SingleTopicButton({ topic, to, ...props }) {
    return (
        <Link href={to}>
            <Button
                bg="white"
                borderRadius="16px"
                boxShadow="0px 0px 12px rgba(0, 0, 0, 0.16)"
                textAlign="center"
                width="240px"
                height="50px"
                color="#656565"
                px="24px"
                _hover={{ boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.25)', color: "#353535" }}
                { ...props }>
                <Text isTruncated>
                    { topic }
                </Text>
            </Button>
        </Link>
    )
}

function SingleTopicCard({ topic, category, to="/", ...props}) {

    return (
        <LinkBox
            as="button"
            bg="white"
            borderRadius="16px"
            boxShadow="0px 0px 12px rgba(0, 0, 0, 0.16)"
            width="220px"
            textAlign="left"
            color="#353535"
            p="28px"
            _hover={{ boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.25)' }}
            { ...props }>
            <Text 
            isTruncated
            fontWeight="bold">
                <Link href={to}>
                    <LinkOverlay>{topic}</LinkOverlay>
                </Link>
            </Text>
            <Text 
            fontSize="sm"
            color="#959595"
            isTruncated
            fontWeight="normal">
                {category}
            </Text>
        </LinkBox>
    )

}

export { SingleTopicButton, SingleTopicCard }