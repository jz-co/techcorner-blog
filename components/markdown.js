import {
    Heading,
    Text,
    Box,
    Image, 
    Code
} from '@chakra-ui/react';

const notesComponents = {
    h1: ({ node, ...props }) => (
        <Heading as='h2' fontSize='xl' fontWeight="medium" py={4} {...props} />
    ),
    h2: ({ node, ...props }) => (
        <Heading as='h3' fontSize='lg' fontWeight="medium" py={2} {...props} />
    ),
    p: ({ node, ...props }) => (
        <Text as='p' fontSize='md' {...props} />
    ),
    blockquote: (props) => (
        <Box bg="blue.50" p={4} borderRadius="20px" color="blue.700" my={4} {...props} />
    ),
    img: (props) => (
        <Image boxSize="200px" objectFit="cover" float={["none", "right"]} ml={8} mb={4} {...props} />
    ),
    pre: ({node, ...props}) => (
        <Box bg="gray.700" color="white" p={6} borderRadius={8} {...props}/>
    ),
    code: ({inline, node, ...props}) => (
        <Code bg={!inline ? 'none' : 'default'} color={!inline ? 'inherit' : 'default'} {...props}/>
    )

}

export { notesComponents };