import { HStack, Image, Text, Heading, Box, Link } from '@chakra-ui/react';

export default function TeamProfileCard({
    imgSrc,
    name,
    message,
    social,
    ...props
}) {
    if (social) {
        return (

            <Box color="#031628"
                bg="white"
                borderRadius="16px"
                boxShadow="0px 0px 12px rgba(0, 0, 0, 0.16)"
                textAlign="left"
                mt="20px"
                mb="20px"
                p={["1.5rem", "40px"]}
                {...props}
            >
                <Image src={imgSrc} alt='avatar' boxSize="120px" borderRadius="full" />
                <Heading size='md' fontSize="25px" mt={4} mb={4} textAlign='left' fontWeight="semibold">
                    {name}
                </Heading>
                <Text>
                    {message}
                </Text>
             
                <Text color="gray.500" mt="2rem" mb="0.5rem">
                    Connect with me via
                </Text>
                
                <HStack mb={2} ml={1} spacing={2}>
                    {social.map(socialEntry => {
                        if (socialEntry.platform == "facebook") {
                            return (
                                <Link href={socialEntry.link} _hover={{ textDecoration: "none" }}>
                                    <Image boxSize="35" src="icons/facebook.svg"/>
                                </Link>
                            )
                        } else if (socialEntry.platform == "email") {
                            return (
                                <Link href={"mailto:" + socialEntry.link} _hover={{ textDecoration: "none" }}>
                                    <Image boxSize="35" src="icons/email.svg"></Image>
                                </Link> 
                            )
                        } else if (socialEntry.platform == "linkedin") {
                            return (
                                <Link href={socialEntry.link} _hover={{ textDecoration: "none" }}>

                                    <Image boxSize="35" src="icons/linkedin.svg"></Image>
                                </Link>
                            )
                        } else if (socialEntry.platform == "instagram") {
                            return (
                                <Link href={socialEntry.link} _hover={{ textDecoration: "none" }}>
                                    <Image boxSize="35" src="icons/instagram.svg"></Image>
                                </Link>
                            )
                        } 
                    })}
            </HStack>
            </Box>
        );
    } else {
        return (

            <Box color="#031628"
                bg="white"
                borderRadius="16px"
                boxShadow="0px 0px 12px rgba(0, 0, 0, 0.16)"
                textAlign="left"
                mt="20px"
                mb="20px"
                p={["1.5rem", "40px"]}
                {...props}
            >
                <Image src={imgSrc} alt='avatar' boxSize="120px" borderRadius="full" />
                <Heading size='md' fontSize="25px" mt={4} mb={4} textAlign='left' fontWeight="semibold">
                    {name}
                </Heading>
                <Text>
                    {message}
                </Text>
            
            </Box>
        );
    }

}