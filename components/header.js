import { Flex } from '@chakra-ui/react';

import Logo from './logo';
import NavBar from './navbar';

export default function Header({ ...props }) {
    return (
        <Flex w="100%" justifyContent="center" bg="white" borderBottom={["solid 1px #353535", "none"]}>
            <Flex
                as='nav'
                flexDirection={['column', 'row']}
                justifyContent={['flex-start', 'space-between']}
                alignItems='center'
                width='100%'
                maxWidth='1024px'
                mx={[4, 12]}
                mt={8}
                mb={4}>
                <Logo as="a" href="/" />
                <NavBar />
            </Flex>
        </Flex>
    );
}
