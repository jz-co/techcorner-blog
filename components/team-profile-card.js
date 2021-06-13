import { HStack, Image, Text, Heading, Box } from '@chakra-ui/react';

export default function TeamProfileCard({
    imgSrc,
    name,
    message,
    ...props
}) {
    return (

        <Box color="#353535"
            borderRadius="16px"
            boxShadow="0px 0px 12px rgba(0, 0, 0, 0.16)"
            width="320px"
            height="400px"
            textAlign="left"
            mt="20px"
            mb="20px"
            p="40px"
        >
            <Image src={imgSrc} alt='avatar' boxSize="80px"/>
            <Heading size='md' fontSize="25px" mt={4} mb={2} textAlign='left'>
                {name}
            </Heading>
            <Text>
                {message}
            </Text>
            <Text color="gray.500" mt="20px" mb="5px">
                Connect with me via
            </Text>
            <HStack>
                <Image src="/assets/linkedin-icon.png" alt='linkedin' boxSize="25px"/>
                <Image src="/assets/facebook-icon.png" alt='facebook' boxSize="25px"/>
            </HStack>
        </Box>
    );
}
