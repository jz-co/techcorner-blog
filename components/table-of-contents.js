import { OrderedList, ListItem, Box, Text } from "@chakra-ui/react";
import { useScrollSpy } from "../hooks/use-scrollspy";

// sections is a list of heading objects, which have the following structure:
// { heading: string, id: string }

function TableOfContents({ sections, ...props }) {
    const selectors = sections.map(({ id }) => `#${id}`);
    const activeId = useScrollSpy(
        selectors,
        {
            rootMargin: "0% 0% -24% 0%",
        }
    )

    return (
        <Box padding="34px 32px" background="#EFEFEF"
            borderRadius="12px" border="1px solid #EBEBEB"
            width={["90%", "90%", "280px"]}
            {...props}
        >
            <Text
                as="h2"
                fontWeight="semibold"
                marginBottom="20px"
                fontSize="16px"
                letterSpacing="wide"
            >
                On this page...
            </Text>
            <OrderedList spacing={1.5} styleType="none" ml={0}>
                {sections.map(({ id, heading }) => (
                    <ListItem key={id}
                        color={id == activeId ? "gray.700" : "gray.500"}
                        fontSize={["16px", "16px", "14px"]}
                        fontWeight={id == activeId ? "semibold" : "normal"}
                        _hover={{
                            color: "black"
                        }}>
                        <a href={`#${id}`}>
                            {heading}
                        </a>
                    </ListItem>
                ))}
            </OrderedList>
        </Box>
    )
}

export default TableOfContents;