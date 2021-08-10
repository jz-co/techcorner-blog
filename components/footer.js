import { Text, Flex, Box, Heading, HStack, Link, Button, Image} from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';

export default function Footer() {
    return (
        <Flex flexDirection="column" backgroundColor="#042E4E">
            <Flex justifyContent="center" marginTop="30px">
                <Box as="footer" fontWeight="550" width="83%">
                    <Flex justifyContent="center">
                        <Flex flexWrap="wrap" alignItems="flex-start">
                            <Link href="/" _hover={{ textDecoration: "none" }}>

                                <Box color="#FAFAFA" width="240px" padding="20px">
                                    <Image width='58' src="icons/footer-logo.svg"></Image>
                                    <Heading size="md" paddingTop="0.5rem">TECH CORNER</Heading>
                                    <Text fontSize="xs" mt="5px"> &copy; Tech Corner {new Date().getFullYear()}</Text>
                                
                                </Box>
                            </Link>
                            <Box color="#FAFAFA" width="290px" padding="20px">
                                <Text color="#90E4FF" fontSize="1.1rem" pt="0.25rem" fontWeight="600" mt="0.8rem" mb="0.6rem"> Contact Us </Text>
                                <HStack paddingBottom="0.3rem">
                                    <Image width='58' src="icons/footer/instagram-light.svg"></Image>
                                    <Link href="https://www.instagram.com/techcorner0101/"><Text> @techcorner0101 </Text></Link>
                                </HStack>
                                <HStack mt="5px">
                                    <Image src="images/email-light.png" width="21px" height="20px"></Image>
                                    <Link href="mailto:techcorner0101@gmail.com"><Text>techcorner0101@gmail.com</Text></Link>
                                </HStack>
                            </Box>
                            <Box color="#FAFAFA" width="150px" padding="20px">
                                <Text color="#90E4FF" fontSize="1.1rem" pt="0.25rem" fontWeight="600" mt="0.8rem" mb="0.6rem"> Pages </Text>
                                <Box pb="0.5rem">
                                    <Link href="/notes">Learn</Link>
                                </Box>
                                <Box pb="0.5rem">
                                    <Link href="/blog">Blog</Link>
                                </Box>
                                <Box  pb="0.5rem">
                                    <Link href="/about">About Us</Link>
                                </Box>
                            </Box>

                        </Flex>
                    </Flex>
                    <Box color="#FAFAFA" width="200px" padding="20px" mt="30px">
                        <Link href="#" _hover={{ textDecoration: "none" }}>

                            <Button borderRadius="8px" marginBottom="30px" color="white" backgroundColor="#042E4E" border="1px solid #FAFAFA" _hover={{ bg: whiten("#042E4E", 20) }} position="absolute" right={["10", "20"]} bottom="0">
                                <HStack spacing="0">
                                    <Text pr="5px">BACK TO TOP</Text>
                                    <Image width='58' src="icons/footer/back-to-top.svg"></Image>

                                    
                                </HStack>
                            </Button>
                        </Link>
                    </Box>

                </Box>
            </Flex>
        </Flex>
    );
}