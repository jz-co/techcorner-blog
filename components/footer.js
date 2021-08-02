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
                                    <svg width='64' height='53' viewBox='0 0 296 260' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M251.601 103.354L95.7601 40.6034L33.0091 196.444' stroke='#63C1F6' stroke-width='13' />
                                        <circle cx='32.8828' cy='202.883' r='25' transform='rotate(-23.4451 32.8828 202.883)' fill='#5FC5F0' />
                                        <circle cx='92.8828' cy='33.8615' r='25' transform='rotate(-23.4451 92.8828 33.8615)' fill='#6DB6EB' />
                                        <circle cx='262.883' cy='115.904' r='25' transform='rotate(-23.4451 262.883 115.904)' fill='#63D3F7' />
                                        <circle cx='50.3062' cy='150.306' r='20' transform='rotate(-23.4451 50.3062 150.306)' fill='#63D3F7' />
                                        <circle cx='72.018' cy='95.018' r='17.5' transform='rotate(-23.4451 72.018 95.018)' fill='#63D3F7' />
                                        <circle cx='181.018' cy='74.018' r='17.5' transform='rotate(-23.4451 181.018 74.018)' fill='#63D3F7' />
                                        <line x1='46.53' y1='151.653' x2='178.53' y2='76.6527' stroke='#63D3F6' stroke-width='10' />
                                        <line x1='60.4816' y1='95.0232' x2='246.482' y2='113.023' stroke='#63D3F6' stroke-width='10' />
                                    </svg>
                                    <Heading size="md" paddingTop="0.5rem">TECH CORNER</Heading>
                                    <Text fontSize="xs" mt="5px"> &copy; Tech Corner {new Date().getFullYear()}</Text>
                                
                                </Box>
                            </Link>
                            <Box color="#FAFAFA" width="290px" padding="20px">
                                <Text color="#90E4FF" fontSize="1.1rem" pt="0.25rem" fontWeight="600" mt="0.8rem" mb="0.6rem"> Contact Us </Text>
                                <HStack paddingBottom="0.3rem">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.955078 10C0.955078 4.47715 5.36879 0 10.8134 0C16.258 0 20.6717 4.47715 20.6717 10C20.6717 15.5228 16.258 20 10.8134 20C5.36879 20 0.955078 15.5228 0.955078 10ZM10.8139 4.66667C9.38593 4.66667 9.20673 4.673 8.64589 4.69889C8.08615 4.72489 7.70409 4.81478 7.36978 4.94667C7.02397 5.08289 6.73063 5.26512 6.43838 5.56168C6.14591 5.85812 5.96627 6.15568 5.83154 6.50635C5.70119 6.84558 5.61246 7.23325 5.58727 7.80081C5.56219 8.36971 5.55561 8.5516 5.55561 10.0001C5.55561 11.4485 5.56197 11.6297 5.58738 12.1986C5.61312 12.7664 5.70174 13.154 5.83165 13.4931C5.96605 13.8439 6.14569 14.1414 6.43805 14.4379C6.73019 14.7345 7.02353 14.9172 7.36912 15.0534C7.70365 15.1853 8.08583 15.2752 8.64545 15.3012C9.20629 15.3271 9.38538 15.3334 10.8132 15.3334C12.2412 15.3334 12.4199 15.3271 12.9807 15.3012C13.5405 15.2752 13.923 15.1853 14.2575 15.0534C14.6032 14.9172 14.8961 14.7345 15.1883 14.4379C15.4807 14.1414 15.6604 13.8439 15.7951 13.4932C15.9243 13.154 16.0131 12.7663 16.0394 12.1987C16.0646 11.6299 16.0711 11.4485 16.0711 10.0001C16.0711 8.5516 16.0646 8.36982 16.0394 7.80092C16.0131 7.23314 15.9243 6.84558 15.7951 6.50646C15.6604 6.15568 15.4807 5.85812 15.1883 5.56168C14.8958 5.26501 14.6033 5.08278 14.2572 4.94667C13.922 4.81478 13.5397 4.72489 12.98 4.69889C12.4191 4.673 12.2406 4.66667 10.8122 4.66667H10.8139Z" fill="#FAFAFA"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3422 5.62779C10.4822 5.62757 10.6384 5.62779 10.8139 5.62779C12.2177 5.62779 12.3841 5.6329 12.9385 5.65845C13.4511 5.68223 13.7293 5.76912 13.9147 5.84212C14.16 5.93879 14.335 6.05435 14.5189 6.24102C14.7029 6.42768 14.8168 6.60546 14.9123 6.85436C14.9843 7.04214 15.0701 7.32436 15.0934 7.84437C15.1186 8.40659 15.1241 8.57549 15.1241 9.99883C15.1241 11.4222 15.1186 11.5911 15.0934 12.1533C15.07 12.6733 14.9843 12.9555 14.9123 13.1433C14.817 13.3922 14.7029 13.5694 14.5189 13.756C14.3348 13.9427 14.1601 14.0582 13.9147 14.1549C13.7295 14.2282 13.4511 14.3149 12.9385 14.3387C12.3842 14.3642 12.2177 14.3698 10.8139 14.3698C9.40992 14.3698 9.24353 14.3642 8.68927 14.3387C8.17663 14.3147 7.89841 14.2278 7.71296 14.1548C7.4676 14.0581 7.29234 13.9425 7.10831 13.7559C6.92429 13.5692 6.81037 13.3919 6.71485 13.1429C6.64289 12.9551 6.55712 12.6729 6.53379 12.1529C6.50859 11.5906 6.50355 11.4217 6.50355 9.9975C6.50355 8.57326 6.50859 8.40526 6.53379 7.84303C6.55723 7.32303 6.64289 7.0408 6.71485 6.8528C6.81015 6.60391 6.92429 6.42613 7.10831 6.23946C7.29234 6.05279 7.4676 5.93724 7.71296 5.84035C7.8983 5.76701 8.17663 5.68034 8.68927 5.65645C9.1743 5.63423 9.36227 5.62757 10.3422 5.62645V5.62779ZM13.6204 6.51335C13.2721 6.51335 12.9895 6.79969 12.9895 7.15314C12.9895 7.50647 13.2721 7.79314 13.6204 7.79314C13.9688 7.79314 14.2514 7.50647 14.2514 7.15314C14.2514 6.7998 13.9688 6.51335 13.6204 6.51335ZM10.8139 7.26114C9.32273 7.26114 8.11376 8.48748 8.11376 10.0001C8.11376 11.5126 9.32273 12.7384 10.8139 12.7384C12.305 12.7384 13.5135 11.5126 13.5135 10.0001C13.5135 8.48748 12.305 7.26114 10.8139 7.26114Z" fill="#FAFAFA"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8139 8.22226C11.7817 8.22226 12.5665 9.01816 12.5665 10.0001C12.5665 10.9818 11.7817 11.7779 10.8139 11.7779C9.84588 11.7779 9.06126 10.9818 9.06126 10.0001C9.06126 9.01816 9.84588 8.22226 10.8139 8.22226Z" fill="#FAFAFA"/>
                                    </svg>
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
                                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.85547 0L14.3507 7.5H1.36028L7.85547 0Z" fill="#FAFAFA"/>
                                    <rect x="5.35547" y="5" width="5" height="14" fill="#FAFAFA"/>
                                    </svg>
                                    
                                </HStack>
                            </Button>
                        </Link>
                    </Box>

                </Box>
            </Flex>
        </Flex>
    );
}