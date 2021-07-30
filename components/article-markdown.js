import {
    Heading,
    Text,
    Box,
    Image, 
    Code,
    UnorderedList,
    OrderedList,
    ListItem
} from '@chakra-ui/react';

const articlesComponents = {
    h1: ({ node, ...props }) => (
        <Heading as='h2' fontSize='xl' fontWeight="medium" {...props} mt="10px" mb="10px"/>
    ),
    h2: ({ node, ...props }) => (
        <Heading as='h3' fontSize='lg' fontWeight="medium" py={2} {...props} mt="8px" mb="8px"/>
    ),
    p: ({ node, ...props }) => (
        <Text as='p' fontSize='md' {...props} />
    ),
    blockquote: (props) => (
        <Box bg="blue.50" py={4} px={6} borderRadius={12} color="blue.700" my={4} {...props} />
    ),
    img: (props) => (
        <Image boxSize={["default", "200px"]} objectFit="cover" float={["none", "right"]} ml={[0, 6]} mb={4} borderRadius={8} {...props} />
    ),
    pre: ({node, ...props}) => (
        <Box as="pre" bg="gray.700" color="white" p={6} borderRadius={8} {...props}/>
    ),
    code: ({inline, node, ...props}) => (
        <Code bg={!inline ? 'none' : 'default'} color={!inline ? 'inherit' : 'default'} {...props}/>
    ),
    ol: ({node, ordered, ...props}) => (
        <OrderedList spacing={1} {...props}/>
    ),
    ul: ({node, ordered, ...props}) => (
        <UnorderedList  spacing={1} {...props}/>
    ),
    li: ({node, ordered, ...props}) => (
        <ListItem ml={8} {...props}/>
    )

}

export { articlesComponents };