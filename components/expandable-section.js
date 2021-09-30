import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export default function ExpandableSection({ children, title }) {
    return (<Accordion allowToggle background="pink.50"
        border="1px solid"
        borderColor="pink.50"
        borderLeft="4px solid"
        borderLeftColor="pink.500"
        borderRadius="4px">
        <AccordionItem isFocusable={false}>
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton _focus={{ boxShadow: "none" }} _hover={{ bg: "transparent" }}>
                            {isExpanded ? (
                                <MinusIcon fontSize="12px" color="pink.500" />
                            ) : (
                                <AddIcon fontSize="12px" color="pink.500" />
                            )}
                            <Box marginLeft="1rem" color="pink.500" fontWeight="semibold">
                                {title}
                            </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} ml="1rem">
                        {children}
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    </Accordion>
    )
}