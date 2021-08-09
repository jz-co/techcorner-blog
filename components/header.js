import Link from 'next/link';
import { Flex } from '@chakra-ui/react';

import Logo from './logo';
import NavBar from './navbar';

export default function Header({ bg }) {
    return (
        <Flex w="100%" justifyContent="center"
            borderBottom={["solid 1px #353535", "solid 1px #353535", "none"]} bg={bg}>
            <Flex
                as='nav'
                flexDirection={['column', 'column', 'row']}
                justifyContent={['flex-start', 'space-between']}
                alignItems='center'
                width='100%'
                maxWidth='1024px'
                mx={[4, 12]}
                mt={8}
                mb={4}>
                <Link href="/" passHref>
                    <a><Logo /></a>
                </Link>
                <NavBar mt={[0, 2, 0]} />
            </Flex>
        </Flex>
    );
}
