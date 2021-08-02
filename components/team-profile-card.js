import { HStack, Image, Text, Heading, Box, Link} from '@chakra-ui/react';

export default function TeamProfileCard({
    imgSrc,
    name,
    message,
    facebookLink,
    linkedinLink,
    emailLink,
    ...props
}) {
    return (

        <Box color="#353535"
            borderRadius="16px"
            boxShadow="0px 0px 12px rgba(0, 0, 0, 0.16)"
            width="400px"
            min-height="400px"
            textAlign="left"
            mt="20px"
            mb="20px"
            p="40px"
        >
            <Image src={imgSrc} alt='avatar' boxSize="120px"/>
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
                {facebookLink ?
                    <Link href={facebookLink} _hover={{ textDecoration: "none" }}>
                        <svg width="35" height="35" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="36" height="36" rx="8" fill="#353535"/>
                        <circle cx="18" cy="18" r="18" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18ZM19.8762 28.5836V18.7907H22.5794L22.9377 15.416H19.8762L19.8808 13.7269C19.8808 12.8467 19.9644 12.3751 21.2286 12.3751H22.9186V9H20.2149C16.9674 9 15.8243 10.6371 15.8243 13.3902V15.4163H13.8V18.791H15.8243V28.5836H19.8762Z" fill="#353535"/>
                        </svg>
                    </Link> : ""}
                {emailLink ?
                    <Link href={emailLink} _hover={{ textDecoration: "none" }}>
                        <svg width="35" height="35" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38 33.7779C38 36.1096 36.1095 38.0001 33.7778 38.0001H4.22222C1.8905 38.0001 0 36.1096 0 33.7779V14.7779C0 12.4462 1.8905 10.5557 4.22222 10.5557H33.7778C36.1095 10.5557 38 12.4462 38 14.7779V33.7779Z" fill="#CCD6DD"/>
                        <path d="M12.6142 23.8935L0.672708 35.835C0.644208 35.8646 0.633653 35.9015 0.609375 35.9311C0.968264 36.5328 1.4686 37.032 2.07026 37.392C2.10088 37.3677 2.13676 37.3571 2.16526 37.3286L14.1078 25.3861C14.5195 24.9734 14.5195 24.3062 14.1078 23.8935C13.694 23.4808 13.0269 23.4808 12.6142 23.8935ZM37.3913 35.9311C37.3691 35.9015 37.3564 35.8646 37.3279 35.8361L25.3875 23.8935C24.9737 23.4808 24.3066 23.4808 23.8939 23.8935C23.4812 24.3073 23.4812 24.9744 23.8939 25.3861L35.8354 37.3286C35.8628 37.3561 35.9008 37.3677 35.9304 37.392C36.5331 37.0331 37.0324 36.5328 37.3913 35.9311Z" fill="#99AAB5"/>
                        <path d="M33.7778 10.5557H4.22222C1.8905 10.5557 0 12.4462 0 14.7779V15.8651L15.3351 31.1664C17.3343 33.1657 20.6002 33.1657 22.6016 31.1664L38 15.8429V14.7779C38 12.4462 36.1095 10.5557 33.7778 10.5557Z" fill="#99AAB5"/>
                        <path d="M33.7775 10.5557H4.22197C2.54575 10.5557 1.10914 11.5416 0.427246 12.9571L16.0136 28.5444C17.6624 30.1932 20.3371 30.1932 21.9849 28.5444L37.5723 12.9571C36.8904 11.5416 35.4548 10.5557 33.7775 10.5557Z" fill="#E1E8ED"/>
                        <path d="M28.2003 7.38889H23.2223V2.11111C23.2223 0.945778 22.2776 0 21.1112 0H16.889C15.7237 0 14.7779 0.945778 14.7779 2.11111V7.38889H9.65634C8.3654 7.38889 8.05717 8.04756 8.96917 8.96061L17.269 17.2604C18.1821 18.1735 19.6757 18.1735 20.5887 17.2604L28.8886 8.96061C29.8006 8.04756 29.4923 7.38889 28.2003 7.38889Z" fill="#55ACEE"/>
                        </svg>
                    </Link> : ""}
                {linkedinLink ?
                    <Link href={linkedinLink} _hover={{ textDecoration: "none" }}>

                        <svg width="35" height="35" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="36" height="36" rx="8" fill="#353535"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18ZM12.7204 14.9084H8.64121V27.1647H12.7204V14.9084ZM12.9891 11.117C12.9626 9.9153 12.1032 9 10.7078 9C9.3123 9 8.39999 9.9153 8.39999 11.117C8.39999 12.2939 9.28534 13.2355 10.6548 13.2355H10.6809C12.1032 13.2355 12.9891 12.2939 12.9891 11.117ZM27.4315 20.1373C27.4315 16.3727 25.4192 14.6206 22.7349 14.6206C20.5691 14.6206 19.5994 15.8102 19.058 16.6447V14.9087H14.9783C15.0321 16.0588 14.9783 27.165 14.9783 27.165H19.058V20.3201C19.058 19.9538 19.0845 19.5884 19.1923 19.3261C19.4872 18.5944 20.1584 17.8367 21.2854 17.8367C22.7621 17.8367 23.3523 18.9606 23.3523 20.6076V27.1647H27.4314L27.4315 20.1373Z" fill="#353535"/>
                        </svg>
                    </Link> :
                ""}

            </HStack>
        </Box>
    );
}
