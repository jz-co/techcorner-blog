import React from 'react';
import {
    Heading,
    Text,
    Box,
    Image,
    Code,
    UnorderedList,
    OrderedList,
    ListItem,
    Stack
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const notesComponents = {
    h1: ({ node, ...props }) => (
        <Heading as='h2' fontSize={'xl'} fontWeight="semibold" {...props} />
    ),
    h2: ({ node, ...props }) => (
        <Heading as='h3' fontSize='lg' fontWeight="medium" py={2} {...props} />
    ),
    p: ({ node, children, props }) => {
        const firstChild = node.children[0].tagName;
        return (
            <Text as='p'
                fontSize={firstChild == 'img' ? 'sm' : 'md'}
                lineHeight={firstChild == 'img' ? 'short' : 'inherit'}
                {...props} >
                {children}
            </Text>
        )
    },
    blockquote: (props) => (
        <Stack bg="blue.50" py={4} px={6} borderRadius={12} color="blue.700" my={4} spacing={4} {...props} />
        // <blockquoteComponent {...props} />
    ),
    img: ({ alt, ...props }) => {
        // alt will be of format "alt_text@@width", where width is of the format ###px
        const startOfWidth = alt.indexOf("@@");
        const width = startOfWidth != -1 ? alt.slice(startOfWidth + 2) : "500px";
        const actualAlt = alt.slice(0, startOfWidth);
        return (
            <Image alt={actualAlt}
                width={["100%", "100%", "fit-content"]}
                maxWidth={width} fit={"contain"} ml={[0, 6]} mb={4} mt={4} {...props} />
        )
    },
    pre: ({ node, ...props }) => (
        <Box as="pre" bg="gray.700" color="white" p={6} borderRadius={8} {...props} />
    ),
    code: ({ inline, node, ...props }) => (
        <Code bg={!inline ? 'none' : 'default'} color={!inline ? 'inherit' : 'default'} {...props} />
    ),
    ol: ({ node, ordered, ...props }) => (
        <OrderedList spacing={1} {...props} />
    ),
    ul: ({ node, ordered, ...props }) => (
        <UnorderedList spacing={1} {...props} />
    ),
    li: ({ node, ordered, ...props }) => (
        <ListItem ml={8} {...props} />
    )
}




function NoteMarkdown({ children }) {
    return (
        <ReactMarkdown
            components={notesComponents}
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}>
            {children}
        </ReactMarkdown>
    )
}

export { notesComponents, NoteMarkdown };