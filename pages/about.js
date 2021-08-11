import Container from "../components/container";
import { Box, Flex, Link, Text, HStack, Stack, Image, Heading } from '@chakra-ui/react';
import TeamProfileCard from "../components/team-profile-card";
import MainLayout from "../components/layout";
import Seo from "../components/seo";
import { fetchStrapi } from '../lib/api';

export default function About({ about, contact }) {
    return (
        <Container bg="#F5FBFF">
            <Seo seo={about.seo} />
            <MainLayout >
                <Box mx={[0, "0.5rem", "2rem"]} pt="1rem" maxWidth="840px">
                    <Heading as="h1" fontSize="4xl" fontWeight="bold" mt="30px" color="#042E4E">About</Heading>
                    <Text fontSize="md" mt="1.5rem" color="#031628">
                        {about.aboutLong}
                    </Text>

                    <Flex my="3rem" justifyContent="space-between" flexWrap="wrap">
                        {
                            about.authorBio.map((author) => (
                                <TeamProfileCard
                                    key={author.name}
                                    flexBasis={["100%", "100%", "48%"]}
                                    imgSrc={author.profileImage.url}
                                    name={author.name}
                                    message={author.bio}
                                    social={author.social}
                                />
                            ))
                            // Would have to change for lg screens if there 3+ authors
                        }
                    </Flex>

                    <Box height="1.5px" backgroundColor="#CCD9E1">
                    </Box>
                    <HStack spacing={4} mt="3rem">
                        <Heading as="h2" fontSize="4xl" fontWeight="bold" color="#042E4E">Contact</Heading>
                        <img src="/icons/write-to-us.svg" />
                    </HStack>
                    <Text fontSize="18px" mt="10px">{contact.description}</Text>
                    <Stack ml="1rem" spacing={3}>
                        <HStack mt="15px" spacing={2}>
                            <Image boxSize="35" src="icons/instagram.svg"></Image>
                            <Link href="https://www.instagram.com/techcorner0101/" fontSize="lg"> @techcorner0101 </Link>
                        </HStack>
                        <HStack ml="40px" mt="10px" spacing={2}>
                            <Image boxSize="35" src="icons/email.svg"></Image>

                            <Link href="mailto:techcorner0101@gmail.com" fontSize="lg"> techcorner0101@gmail.com </Link>
                        </HStack>
                    </Stack>

                    {/* <HStack spacing={3} mt="30px">
                            <Text fontSize="4xl" fontWeight="bold">Contribute</Text>
                            <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.86469 21.6138C4.78669 22.5358 5.18569 22.8118 5.81069 23.2498C6.42869 23.6828 10.1937 20.3828 11.4247 19.8808C12.6557 19.3788 24.2117 16.9318 23.7107 14.6978C23.2097 12.4638 19.7177 12.1338 17.0277 12.5898C14.3377 13.0458 9.18969 15.4118 7.68569 16.6888C6.18169 17.9648 4.86469 21.6138 4.86469 21.6138ZM13.4867 23.1108C13.4867 23.1108 9.92969 24.2658 9.92969 27.2658C9.92969 30.2658 10.7957 31.9578 11.2057 32.7788C11.6167 33.5988 12.8937 34.3948 14.6607 33.6298C16.7127 32.7408 14.1697 27.6258 20.6607 29.9738C23.6347 31.0488 26.7197 32.5018 29.7197 31.5018C32.5657 30.5528 33.6617 26.9728 33.6617 24.9728C33.6617 20.8788 30.6617 21.9728 29.6617 22.9728C28.6617 23.9728 20.6617 25.9728 19.6617 25.9728C18.6617 25.9728 13.4867 23.1108 13.4867 23.1108Z" fill="#EF9645"/>
                            <path d="M17.9738 28.1607C17.9738 28.1607 17.8538 26.8447 16.5988 26.6917C15.5678 26.5667 13.9428 26.9107 13.0988 28.5977C12.2548 30.2857 10.7548 30.0037 10.8178 31.4097C10.8798 32.8157 11.3178 33.9097 12.2238 34.1907C13.1308 34.4727 14.4118 33.9727 14.5678 32.4727C14.7238 30.9727 14.9118 29.5977 15.8798 29.0037C16.8498 28.4107 17.9738 28.1607 17.9738 28.1607Z" fill="#F9CA55"/>
                            <path d="M16.662 25.9727C16.662 25.9727 15.662 24.9727 13.662 24.9727C11.662 24.9727 6.99798 27.1057 8.41198 31.3477C9.41198 34.3477 12.256 32.9417 12.662 29.9727C13.069 26.9997 16.662 25.9727 16.662 25.9727Z" fill="#EF9645"/>
                            <path d="M15.6617 25.9727C15.6617 25.9727 14.6617 24.9727 12.6617 24.9727C10.6617 24.9727 7.77674 26.5027 7.66174 30.9727C7.56774 34.6287 11.6927 32.9727 11.6617 29.9727C11.6307 26.9727 15.6617 25.9727 15.6617 25.9727Z" fill="#F9CA55"/>
                            <path d="M3.66162 26.9728C3.66162 30.2698 4.11862 32.2588 6.08962 31.9198C9.35862 31.3578 8.11762 27.3058 10.9786 26.1658C13.0556 25.3388 16.0796 25.5358 18.9986 27.2688C20.9216 28.4108 19.6616 23.9728 17.6616 22.9728C15.6616 21.9728 9.66162 22.9728 8.66162 22.9728C7.66162 22.9728 3.66162 26.9728 3.66162 26.9728Z" fill="#EF9645"/>
                            <path d="M3.50376 27.1466C1.91276 29.8116 2.88076 32.5666 5.66176 31.9726C8.35276 31.3986 7.00476 27.9026 9.66176 25.9726C11.1508 24.8906 14.3598 24.5276 16.3598 25.5276C18.3598 26.5276 18.6618 23.9726 16.6618 22.9726C14.6618 21.9726 8.12176 22.9476 7.12376 23.0096C5.21476 23.1286 3.50376 27.1466 3.50376 27.1466Z" fill="#F9CA55"/>
                            <path d="M8.07961 29.0868C7.40061 29.8648 6.21961 29.9458 5.44061 29.2668L5.24461 29.0958C4.46561 28.4168 4.38561 27.2368 5.06461 26.4578L27.5876 0.640753C28.2666 -0.137247 29.4476 -0.218247 30.2266 0.460753L30.4216 0.631753C31.2006 1.31075 31.2806 2.49175 30.6026 3.26975L8.07961 29.0868Z" fill="#3B88C3"/>
                            <path d="M9.1518 27.8586C6.7918 30.5636 0.838797 35.8676 0.0847974 35.2106C-0.668203 34.5536 3.7778 27.9356 6.1378 25.2296C8.4978 22.5236 7.7988 24.6876 8.6308 25.4146C9.4628 26.1406 11.5118 25.1546 9.1518 27.8586Z" fill="#3B88C3"/>
                            <path d="M5.33398 24.9988C5.33398 25.9988 7.75498 26.9138 8.75498 25.9138C9.75498 24.9138 12.096 23.6858 15.174 24.9728C22.378 27.9828 19.662 23.9728 16.662 22.9728C13.662 21.9728 8.66198 22.9728 7.66198 22.9728C6.66198 22.9728 5.33398 24.9988 5.33398 24.9988Z" fill="#EF9645"/>
                            <path d="M4.85666 22.0157C4.49866 20.9027 7.04466 14.7367 8.19766 13.7817C9.64966 12.5797 15.2667 10.7188 17.2667 10.7188C19.2667 10.7188 33.6617 17.9727 33.6617 22.9727C33.6617 27.9727 31.6617 28.5977 28.7867 29.3787C26.4877 30.0037 21.6717 29.6208 19.5677 27.6597C17.7237 25.9417 16.4427 24.7537 14.6617 23.9727C11.3597 22.5247 9.15866 24.3967 8.15866 25.3967C6.15866 27.3967 2.39066 25.2377 5.53366 21.8167C7.78266 19.3678 9.76366 18.6047 11.6617 17.9727C17.6617 15.9727 21.6617 15.9727 19.6617 13.9727C18.9547 13.2657 18.5697 14.3187 17.5857 14.4977C15.6057 14.8577 14.0297 15.0997 11.4207 15.9697C10.5187 16.2697 6.24866 18.9927 4.85666 22.0157Z" fill="#FFDC5D"/>
                            <path d="M11.8576 16.2477C12.9216 15.8597 17.5596 15.0157 19.9726 14.1797C21.9216 13.5037 23.6316 14.8157 19.9326 16.2077C16.3626 17.5507 12.6536 17.4407 9.94861 18.5147C8.92561 18.9207 8.03861 17.6397 11.8576 16.2477Z" fill="#EF9645"/>
                            <path d="M21.1486 7.99561C21.1486 7.99561 15.2206 14.7906 12.7026 17.6566C14.9566 16.7306 16.9736 16.9066 18.9006 15.7726C20.8276 14.6396 21.7066 13.4306 24.6306 10.0776C25.7166 8.83361 21.1486 7.99561 21.1486 7.99561Z" fill="#3B88C3"/>
                            </svg>
                        </HStack>
                        <Text fontSize="18px" mt="10px"> We also keep a mirror of all our Computer Science <b>quick reference notes</b> on our <b>GitHub repo</b> where you can make suggestions by opening a pull request and make the content better for others! </Text>
                        <HStack ml="40px" mt="15px" spacing="4">
                            <svg width="35" height="35" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0002 0C9.40362 0 0 9.63955 0 21.5315C0 31.0448 6.01719 39.1159 14.3612 41.963C15.4107 42.1623 15.796 41.4959 15.796 40.9272C15.796 40.4137 15.7766 38.7176 15.7675 36.9184C9.92525 38.2209 8.69246 34.3779 8.69246 34.3779C7.73718 31.8892 6.36077 31.2274 6.36077 31.2274C4.45543 29.891 6.50439 29.9185 6.50439 29.9185C8.61317 30.07 9.72355 32.1373 9.72355 32.1373C11.5966 35.4291 14.6363 34.4774 15.8346 33.9272C16.0231 32.5359 16.5674 31.5854 17.1679 31.048C12.5035 30.5036 7.60017 28.6573 7.60017 20.4069C7.60017 18.0561 8.42052 16.1353 9.76389 14.6274C9.54585 14.0848 8.82704 11.8951 9.96733 8.92929C9.96733 8.92929 11.7308 8.3506 15.7439 11.1364C17.419 10.6593 19.2155 10.4201 21.0002 10.4119C22.7848 10.4201 24.5827 10.6593 26.261 11.1364C30.2692 8.3506 32.0302 8.92929 32.0302 8.92929C33.1733 11.8951 32.4542 14.0848 32.2361 14.6274C33.5826 16.1353 34.3974 18.0561 34.3974 20.4069C34.3974 28.6769 29.4847 30.4979 24.8084 31.0309C25.5617 31.6991 26.2328 33.0095 26.2328 35.0183C26.2328 37.8989 26.2085 40.2176 26.2085 40.9272C26.2085 41.5002 26.5865 42.1716 27.651 41.9601C35.9905 39.1098 42 31.0416 42 21.5315C42 9.63955 32.5978 0 21.0002 0Z" fill="#353535"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.95383 30.9147C7.90758 31.022 7.74344 31.0537 7.59391 30.9803C7.44159 30.91 7.35604 30.7642 7.40542 30.6569C7.45063 30.5467 7.61512 30.5164 7.76709 30.5895C7.91975 30.6601 8.00669 30.8074 7.95383 30.9147Z" fill="#353535"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.80444 31.8874C8.70428 31.9826 8.5085 31.9384 8.37566 31.7879C8.23829 31.6378 8.21256 31.437 8.31411 31.3404C8.41739 31.2452 8.60726 31.2898 8.74497 31.4399C8.88233 31.5918 8.90911 31.7911 8.80444 31.8874Z" fill="#353535"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.63244 33.1275C9.50377 33.2191 9.29338 33.1332 9.16332 32.9417C9.03465 32.7502 9.03465 32.5206 9.1661 32.4286C9.29651 32.3366 9.50377 32.4194 9.63557 32.6094C9.76389 32.8037 9.76389 33.0337 9.63244 33.1275Z" fill="#353535"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 34.3255C10.6517 34.4557 10.4065 34.4207 10.2271 34.2431C10.0435 34.0695 9.99237 33.8231 10.1078 33.693C10.2243 33.5625 10.4709 33.5992 10.6517 33.7753C10.8339 33.9486 10.8896 34.1968 10.7668 34.3255Z" fill="#353535"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3317 35.0212C12.2809 35.1898 12.0448 35.2665 11.8069 35.1948C11.5694 35.121 11.414 34.9235 11.462 34.753C11.5114 34.5833 11.7485 34.5034 11.9881 34.5801C12.2253 34.6535 12.3811 34.8497 12.3317 35.0212Z" fill="#353535"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0503 35.1502C14.0562 35.3278 13.8545 35.4751 13.6048 35.4779C13.3538 35.484 13.1507 35.3403 13.1479 35.1656C13.1479 34.9862 13.3451 34.8404 13.5961 34.8361C13.8458 34.8311 14.0503 34.9737 14.0503 35.1502Z" fill="#353535"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6496 34.871C15.6795 35.0443 15.506 35.2223 15.2581 35.2693C15.0143 35.3153 14.7886 35.2084 14.7576 35.0365C14.7274 34.8589 14.904 34.681 15.1475 34.635C15.3958 34.5908 15.618 34.6949 15.6496 34.871Z" fill="#353535"/>
                            </svg>
                            <Link href="#" fontSize="18px"> techcorner/notes </Link>
                        </HStack> */}
                    <Box height="100px"></Box>
                </Box>
            </MainLayout>

        </Container>

    );
}

export async function getStaticProps() {
    const [about, contact] = await Promise.all([
        fetchStrapi('get.about'),
        fetchStrapi('get.contact')
    ]);

    return {
        props: {
            about,
            contact
        },
    };


}