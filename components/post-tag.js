import { Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function PostTag({
    tag,
    slug,
    color,
    ...props
}) {
    return (
        <Link as={NextLink} href={`/blog/topic/${slug}`} passHref>
            <Button
                as="a"
                fontSize="13"
                mb="1"
                size="xs"
                border="2px"
                backgroundColor="transparent"
                color={color}
                borderColor={color}
                _hover={{
                    background: color,
                    color: "white",
                }}
            >
                {tag.toUpperCase()}
            </Button>
        </Link>

    )
}