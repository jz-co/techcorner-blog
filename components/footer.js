import { Text, Flex, Box, Heading, HStack, Link, Button} from '@chakra-ui/react';

export default function Footer() {
    return (
        <Flex flexDirection="column">
            <Box flex="1">
                <Box as="footer" backgroundColor="#4E4E4E" fontWeight="550">
                    <Flex flexWrap="wrap" justifyContent="center">
                        <Box color="#FAFAFA" width="350px" padding="30px" >
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
                            <Heading size="md" paddingTop="0.5rem">Tech Corner</Heading>
                            <Text color="#90E4FF" fontSize="1.1rem" pt="0.25rem" fontWeight="600" mt="0.8rem" mb="0.6rem"> About Us </Text>
                            <Text> Here is where we talk about why we started this blog </Text>
                            <Text color="#90E4FF" fontSize="1.1rem" pt="0.25rem" fontWeight="600" mt="0.8rem" mb="0.6rem"> Contact Us </Text>
                            <HStack paddingBottom="0.3rem">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.955078 10C0.955078 4.47715 5.36879 0 10.8134 0C16.258 0 20.6717 4.47715 20.6717 10C20.6717 15.5228 16.258 20 10.8134 20C5.36879 20 0.955078 15.5228 0.955078 10ZM10.8139 4.66667C9.38593 4.66667 9.20673 4.673 8.64589 4.69889C8.08615 4.72489 7.70409 4.81478 7.36978 4.94667C7.02397 5.08289 6.73063 5.26512 6.43838 5.56168C6.14591 5.85812 5.96627 6.15568 5.83154 6.50635C5.70119 6.84558 5.61246 7.23325 5.58727 7.80081C5.56219 8.36971 5.55561 8.5516 5.55561 10.0001C5.55561 11.4485 5.56197 11.6297 5.58738 12.1986C5.61312 12.7664 5.70174 13.154 5.83165 13.4931C5.96605 13.8439 6.14569 14.1414 6.43805 14.4379C6.73019 14.7345 7.02353 14.9172 7.36912 15.0534C7.70365 15.1853 8.08583 15.2752 8.64545 15.3012C9.20629 15.3271 9.38538 15.3334 10.8132 15.3334C12.2412 15.3334 12.4199 15.3271 12.9807 15.3012C13.5405 15.2752 13.923 15.1853 14.2575 15.0534C14.6032 14.9172 14.8961 14.7345 15.1883 14.4379C15.4807 14.1414 15.6604 13.8439 15.7951 13.4932C15.9243 13.154 16.0131 12.7663 16.0394 12.1987C16.0646 11.6299 16.0711 11.4485 16.0711 10.0001C16.0711 8.5516 16.0646 8.36982 16.0394 7.80092C16.0131 7.23314 15.9243 6.84558 15.7951 6.50646C15.6604 6.15568 15.4807 5.85812 15.1883 5.56168C14.8958 5.26501 14.6033 5.08278 14.2572 4.94667C13.922 4.81478 13.5397 4.72489 12.98 4.69889C12.4191 4.673 12.2406 4.66667 10.8122 4.66667H10.8139Z" fill="#FAFAFA"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3422 5.62779C10.4822 5.62757 10.6384 5.62779 10.8139 5.62779C12.2177 5.62779 12.3841 5.6329 12.9385 5.65845C13.4511 5.68223 13.7293 5.76912 13.9147 5.84212C14.16 5.93879 14.335 6.05435 14.5189 6.24102C14.7029 6.42768 14.8168 6.60546 14.9123 6.85436C14.9843 7.04214 15.0701 7.32436 15.0934 7.84437C15.1186 8.40659 15.1241 8.57549 15.1241 9.99883C15.1241 11.4222 15.1186 11.5911 15.0934 12.1533C15.07 12.6733 14.9843 12.9555 14.9123 13.1433C14.817 13.3922 14.7029 13.5694 14.5189 13.756C14.3348 13.9427 14.1601 14.0582 13.9147 14.1549C13.7295 14.2282 13.4511 14.3149 12.9385 14.3387C12.3842 14.3642 12.2177 14.3698 10.8139 14.3698C9.40992 14.3698 9.24353 14.3642 8.68927 14.3387C8.17663 14.3147 7.89841 14.2278 7.71296 14.1548C7.4676 14.0581 7.29234 13.9425 7.10831 13.7559C6.92429 13.5692 6.81037 13.3919 6.71485 13.1429C6.64289 12.9551 6.55712 12.6729 6.53379 12.1529C6.50859 11.5906 6.50355 11.4217 6.50355 9.9975C6.50355 8.57326 6.50859 8.40526 6.53379 7.84303C6.55723 7.32303 6.64289 7.0408 6.71485 6.8528C6.81015 6.60391 6.92429 6.42613 7.10831 6.23946C7.29234 6.05279 7.4676 5.93724 7.71296 5.84035C7.8983 5.76701 8.17663 5.68034 8.68927 5.65645C9.1743 5.63423 9.36227 5.62757 10.3422 5.62645V5.62779ZM13.6204 6.51335C13.2721 6.51335 12.9895 6.79969 12.9895 7.15314C12.9895 7.50647 13.2721 7.79314 13.6204 7.79314C13.9688 7.79314 14.2514 7.50647 14.2514 7.15314C14.2514 6.7998 13.9688 6.51335 13.6204 6.51335ZM10.8139 7.26114C9.32273 7.26114 8.11376 8.48748 8.11376 10.0001C8.11376 11.5126 9.32273 12.7384 10.8139 12.7384C12.305 12.7384 13.5135 11.5126 13.5135 10.0001C13.5135 8.48748 12.305 7.26114 10.8139 7.26114Z" fill="#FAFAFA"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8139 8.22226C11.7817 8.22226 12.5665 9.01816 12.5665 10.0001C12.5665 10.9818 11.7817 11.7779 10.8139 11.7779C9.84588 11.7779 9.06126 10.9818 9.06126 10.0001C9.06126 9.01816 9.84588 8.22226 10.8139 8.22226Z" fill="#FAFAFA"/>
                                </svg>
                                <Link href="#"><Text> @techcorner </Text></Link>
                            </HStack>
                            <HStack>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.41371 0 9.85829 0C15.3029 0 19.7166 4.47715 19.7166 10C19.7166 15.5228 15.3029 20 9.85829 20C4.41371 20 0 15.5228 0 10ZM11.5018 9.79757H11.5013V13H15.159C15.4841 13 15.7733 12.8023 15.7733 12.3308V8C15.7733 8 12.3236 10.3916 12.4455 10.3138C12.4455 10.3138 12.3232 10.3916 12.2218 10.3138L11.5018 9.79757ZM11.5013 6.66667V9.12139L12.2904 9.66154C12.3112 9.66814 12.3563 9.66861 12.3771 9.66154L15.7733 7.17241C15.7733 6.87782 15.5205 6.66667 15.3779 6.66667H11.5013ZM4.27193 5.35211V14.5352L11.1727 16V4L4.27193 5.35211Z" fill="#FAFAFA"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.88968 11.4961C8.59806 11.8846 8.21785 12.0793 7.7486 12.0793C7.29136 12.0793 6.91916 11.8909 6.63111 11.5146C6.3435 11.1378 6.19925 10.6474 6.19925 10.0426C6.19925 9.40394 6.34528 8.88744 6.63779 8.49307C6.93029 8.0987 7.31763 7.9013 7.7998 7.9013C8.25525 7.9013 8.62389 8.08969 8.90481 8.46738C9.18619 8.84507 9.32688 9.34265 9.32688 9.96056C9.32732 10.5956 9.18129 11.1076 8.88968 11.4961ZM7.73933 8.66667C7.48278 8.66667 7.27837 8.78926 7.12743 9.03399C6.9765 9.27872 6.9008 9.60272 6.9008 10.006C6.9008 10.4153 6.9765 10.7388 7.12743 10.9766C7.27837 11.2149 7.47644 11.3333 7.7212 11.3333C7.97366 11.3333 8.174 11.2177 8.32176 10.9863C8.46952 10.7549 8.54385 10.4337 8.54385 10.023C8.54385 9.59488 8.47224 9.26167 8.32856 9.02339C8.18488 8.78557 7.98862 8.66667 7.73933 8.66667Z" fill="#FAFAFA"/>
                                </svg>
                                <Link href="#"><Text>techcorner@tech.com</Text></Link>
                            </HStack>
                        </Box>
                        <Box color="#FAFAFA" width="350px" padding="30px" paddingTop="60px">
                            <Text color="#90E4FF" fontSize="1.1rem" pt="0.25rem" fontWeight="600" mt="0.8rem" mb="0.6rem"> Information </Text>
                            <Box pb="0.5rem">
                                <Link href="#">Tutorial Articles</Link>
                            </Box>
                            <Box pb="0.5rem">
                                <Link href="#">Blog</Link>
                            </Box>
                            <Box  pb="0.5rem">
                                <Link href="#">Resources</Link>
                            </Box>
                        </Box>
                        <Box color="#FAFAFA" width="350px" padding="30px" paddingTop="60px">
                            <Text color="#90E4FF" fontSize="1.1rem" pt="0.25rem" fontWeight="600" mt="0.8rem" mb="0.6rem"> Latest Content </Text>
                            <Box pb="0.5rem">
                                <Link href="#">Resume Blog Post Title</Link>
                            </Box>
                            <Box  pb="0.5rem">
                                <Link href="#">Big O notation</Link>
                            </Box>
                        </Box>
                        <Box color="#FAFAFA" width="350px" padding="30px" paddingTop="60px">
                            <Text color="#90E4FF" fontSize="1.1rem" pt="0.25rem" fontWeight="600" mt="0.8rem" mb="0.6rem"> Contribute </Text>
                            <Text pb="8px">Make suggestions by opening a pull request and make the content better for others</Text>
                            <HStack>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7875 0C6.62165 0 0 6.8854 0 15.3796C0 22.1749 4.23706 27.9399 10.1126 29.9736C10.8516 30.1159 11.1229 29.6399 11.1229 29.2337C11.1229 28.867 11.1092 27.6554 11.1029 26.3703C6.98896 27.3007 6.12088 24.5557 6.12088 24.5557C5.44821 22.778 4.479 22.3053 4.479 22.3053C3.13733 21.3507 4.58013 21.3703 4.58013 21.3703C6.06505 21.4786 6.84693 22.9552 6.84693 22.9552C8.16583 25.3065 10.3063 24.6267 11.1501 24.2337C11.2828 23.24 11.6661 22.561 12.089 22.1772C8.80446 21.7883 5.35173 20.4695 5.35173 14.5764C5.35173 12.8972 5.92939 11.5252 6.87534 10.4482C6.7218 10.0605 6.21565 8.49653 7.01859 6.37806C7.01859 6.37806 8.26035 5.96471 11.0862 7.95456C12.2658 7.61379 13.5308 7.4429 14.7875 7.43704C16.0442 7.4429 17.3102 7.61379 18.4919 7.95456C21.3144 5.96471 22.5544 6.37806 22.5544 6.37806C23.3593 8.49653 22.8529 10.0605 22.6994 10.4482C23.6475 11.5252 24.2213 12.8972 24.2213 14.5764C24.2213 20.4835 20.7619 21.7842 17.4691 22.1649C17.9995 22.6422 18.4721 23.5782 18.4721 25.0131C18.4721 27.0707 18.455 28.7269 18.455 29.2337C18.455 29.643 18.7211 30.1226 19.4707 29.9715C25.343 27.9356 29.5747 22.1726 29.5747 15.3796C29.5747 6.8854 22.954 0 14.7875 0Z" fill="#FAFAFA"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.60077 22.0819C5.5682 22.1586 5.45262 22.1812 5.34732 22.1288C5.24007 22.0786 5.17983 21.9744 5.2146 21.8978C5.24643 21.8191 5.36226 21.7974 5.46927 21.8496C5.57677 21.9001 5.63799 22.0053 5.60077 22.0819Z" fill="#FAFAFA"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.19973 22.7767C6.12921 22.8447 5.99134 22.8131 5.8978 22.7056C5.80107 22.5984 5.78295 22.455 5.85446 22.386C5.92719 22.318 6.06089 22.3498 6.15786 22.4571C6.25458 22.5656 6.27344 22.7079 6.19973 22.7767Z" fill="#FAFAFA"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.78278 23.6625C6.69217 23.7279 6.54402 23.6666 6.45244 23.5298C6.36184 23.393 6.36184 23.229 6.4544 23.1633C6.54623 23.0976 6.69217 23.1567 6.78498 23.2924C6.87534 23.4312 6.87534 23.5955 6.78278 23.6625Z" fill="#FAFAFA"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.58156 24.5182C7.5005 24.6112 7.32787 24.5862 7.20151 24.4594C7.07222 24.3354 7.03622 24.1594 7.11752 24.0664C7.19955 23.9732 7.37317 23.9994 7.5005 24.1252C7.62882 24.249 7.668 24.4263 7.58156 24.5182Z" fill="#FAFAFA"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68349 25.0151C8.64774 25.1356 8.48147 25.1903 8.31398 25.1391C8.14673 25.0864 8.03727 24.9453 8.07106 24.8236C8.10583 24.7024 8.27284 24.6453 8.44156 24.7001C8.60856 24.7525 8.71826 24.8926 8.68349 25.0151Z" fill="#FAFAFA"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.89366 25.1073C9.89782 25.2341 9.7558 25.3393 9.57998 25.3414C9.40318 25.3457 9.26017 25.2431 9.25821 25.1183C9.25821 24.9902 9.39706 24.886 9.57386 24.8829C9.74967 24.8794 9.89366 24.9812 9.89366 25.1073Z" fill="#FAFAFA"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0198 24.9079C11.0409 25.0317 10.9187 25.1588 10.7441 25.1924C10.5725 25.2252 10.4135 25.1488 10.3917 25.0261C10.3704 24.8992 10.4948 24.7721 10.6662 24.7393C10.8411 24.7077 10.9976 24.7821 11.0198 24.9079Z" fill="#FAFAFA"/>
                                </svg>
                                <Link href="#"><Text>techcorner@tech.com</Text></Link>
                            </HStack>
                        </Box>
                    </Flex>

                    <Box textAlign="center" paddingBottom="70px">   
                        <Text color="#FAFAFA" padding="20px">
                            &copy; {new Date().getFullYear()} Tech Corner. All rights reserved.
                        </Text>
                    </Box>
                    <Box textAlign="center" position="relative">   
                        <Button borderRadius="8px"  marginBottom="30px" color="#FAFAFA" backgroundColor="#4E4E4E" border="1px solid #FAFAFA" _hover={{ bg: "#4E4E4E" }} position="absolute" right="20" bottom="0">
                            <Flex flexWrap="wrap" justifyContent="center" >
                                <Text pr="5px">BACK TO TOP</Text>
                                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.85547 0L14.3507 7.5H1.36028L7.85547 0Z" fill="#FAFAFA"/>
                                <rect x="5.35547" y="5" width="5" height="14" fill="#FAFAFA"/>
                                </svg>
                            </Flex>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
}