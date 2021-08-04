import { Flex } from '@chakra-ui/react';

export default function MainLayout({ children, ...props }) {
    return (
        <Flex
            m='0 4rem 4rem 4rem'
            justifyContent='flex-start'
            alignItems='center'
            flexDirection='column'
            minHeight='80vh'
            maxWidth='1080px'
            {...props}>
            {children}
        </Flex>
    )
}