import { Flex } from '@chakra-ui/react';

export default function Loader() {
    return (
        <Flex w="100%" h="100vh" justifyContent="center" alignItems="center" >
            <img src="/loading.svg" />
        </Flex>
    )
}