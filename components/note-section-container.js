import { Stack } from '@chakra-ui/react'

export default function NoteSectionContainer({ children, id, ...props }) {
    return (
        <Stack
            id={id}
            as="section"
            spacing="1em"
            bg="white"
            borderRadius="16px"
            boxShadow="0px 0px 12px rgba(0, 0, 0, 0.16)"
            maxWidth="780px"
            px={[6, 10, 12]}
            py={[8, 12]}
            {...props}>
            {children}
        </Stack>
    )
}