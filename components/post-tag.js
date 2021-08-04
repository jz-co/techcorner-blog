import { Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const colorIndices = [
    {
        color: "#03544F",
        bg: "#B3EBE8"
    },
    {
        color: "#042E4E",
        bg: "#BAE1FF"
    },
    {
        color: "#042E4E",
        bg: "#FFE9B2"
    }
]

export default function PostTag({
    tag,
    slug,
    colorIndex,
}) {
    return (
        <Link as={NextLink} href={`/blog/topic/${slug}`} passHref>
            <Button
                as="a"
                fontSize="xs"
                mb="1"
                size="xs"
                bg={colorIndices[colorIndex].bg}
                color={colorIndices[colorIndex].color}
                _hover={{
                    border: `1px solid ${colorIndices[colorIndex].color}`
                }}
            >
                {tag.toUpperCase()}
            </Button>
        </Link>

    )
}