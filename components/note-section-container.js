import { Stack } from '@chakra-ui/react'

export default function NoteSectionContainer({ children, ...props }) {
    return (
        <Stack
          as="section"
          spacing="1em"
          justifyContent="center"
          alignItems="flex-start"
          bg="white"
          borderRadius="16px"
          boxShadow="0px 0px 12px rgba(0, 0, 0, 0.16)"
          maxWidth="780px"
          px={12}
          py={8}>
              { children }
          </Stack>
    )
}