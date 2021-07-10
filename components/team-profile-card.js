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
            minWidth="290px"
            maxWidth="320px"
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
                <svg width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="#353535"/>
                <circle cx="18" cy="18" r="18" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18ZM19.8762 28.5836V18.7907H22.5794L22.9377 15.416H19.8762L19.8808 13.7269C19.8808 12.8467 19.9644 12.3751 21.2286 12.3751H22.9186V9H20.2149C16.9674 9 15.8243 10.6371 15.8243 13.3902V15.4163H13.8V18.791H15.8243V28.5836H19.8762Z" fill="#353535"/>
                </svg>

                <svg width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="#353535"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18ZM12.7204 14.9084H8.64121V27.1647H12.7204V14.9084ZM12.9891 11.117C12.9626 9.9153 12.1032 9 10.7078 9C9.3123 9 8.39999 9.9153 8.39999 11.117C8.39999 12.2939 9.28534 13.2355 10.6548 13.2355H10.6809C12.1032 13.2355 12.9891 12.2939 12.9891 11.117ZM27.4315 20.1373C27.4315 16.3727 25.4192 14.6206 22.7349 14.6206C20.5691 14.6206 19.5994 15.8102 19.058 16.6447V14.9087H14.9783C15.0321 16.0588 14.9783 27.165 14.9783 27.165H19.058V20.3201C19.058 19.9538 19.0845 19.5884 19.1923 19.3261C19.4872 18.5944 20.1584 17.8367 21.2854 17.8367C22.7621 17.8367 23.3523 18.9606 23.3523 20.6076V27.1647H27.4314L27.4315 20.1373Z" fill="#353535"/>
                </svg>

            </HStack>
        </Box>
    );
}
