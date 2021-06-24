import { Flex } from '@chakra-ui/react';

export default function MainLayout({ children, ...props }) {
    return (
        <Flex
            m='0 4rem 4rem 4rem'
            justifyContent='flex-start'
            alignItems='center'
            flexDirection='column'
            bg='#F5F5F5'
            minHeight='80vh'
            maxWidth='1200px'
            {...props}>
            {children}
        </Flex>
    )
}