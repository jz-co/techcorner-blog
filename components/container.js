import React from 'react'
import {
    Flex,
    useColorMode
} from '@chakra-ui/react'

import NavBar from './navbar'

const Container = ({ children }) => {
    const { colorMode } = useColorMode()

    const bgColor = { light: '#F5F5F5', dark: 'gray.900' }
    const color = { light: 'black', dark: 'white' }

    return (
        <>
            <NavBar/>
            <Flex
                m="0 20px 4rem 20px"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container;