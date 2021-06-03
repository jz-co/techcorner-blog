import Link from 'next/Link'
import { Button, Text, Box } from "@chakra-ui/react"

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
                color="#686868"
                px="24px"
                { ...props }>
                <Text isTruncated>
                    { topic }
                </Text>
            </Button>
        </Link>
    )
}

function SingleTopicCard({ topic, category, to, ...props}) {

    return (
        <Box
            as="button"
            bg="white"
            borderRadius="16px"
            boxShadow="0px 0px 12px rgba(0, 0, 0, 0.16)"
            width="220px"
            textAlign="left"
            color="#353535"
            p="28px"
            { ...props }>
            <Text 
             isTruncated
             fontWeight="bold">
                { topic }
            </Text>
            <Text 
             fontSize="sm"
             color="#959595"
             isTruncated
             fontWeight="normal">
                {category}
            </Text>
        </Box>
    )

}

export { SingleTopicButton, SingleTopicCard }