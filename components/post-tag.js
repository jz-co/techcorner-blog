import { Button } from '@chakra-ui/react';

export default function PostTag({
    tag,
    color,
    ...props
}) {
    return (
        <Button
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
 
    )
}