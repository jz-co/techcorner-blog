import { useState } from "react";
import { Text, Flex, Box, Checkbox, Stack } from '@chakra-ui/react';

export default function ChecklistSection({
    title,
    items,
    ...props
}) {
    const itemObjects = [];
    for (var i = 0; i < items.length; i++) {
        itemObjects.push({text: items[i].text, complete: false})
    }
    const [checklistItems, setChecklistItems] = useState(itemObjects);

    const changeCompletionStatus = (i) => {
        setChecklistItems(
            checklistItems.map(
                (item, index) =>
                    index == i ?
                        {
                            ...item,
                            complete: !item.complete
                        }
                    : item
            )
        );
    }

    return (
        <Box borderRadius="10px" backgroundColor="#FFFFFF" maxWidth="1000px" boxShadow="0 4px 2px -2px rgba(0, 0, 0, 0.10)">
            <Box backgroundColor="#E2E2E2"
                borderTopLeftRadius="10px"
                borderTopRightRadius="10px"
                padding="10px"
                
            >
                <Text marginLeft="20px" fontSize="xl">{title}</Text>
            </Box>
            <Stack marginLeft="5px" padding="25px" spacing="15px">
                {checklistItems.map(({ text, complete }, i) => (

                    <Flex alignItems="flex-start">
                        <Box marginTop="3px"><Checkbox onChange={() => changeCompletionStatus(i)} size="lg"></Checkbox></Box>
                        <Box textDecoration={ complete ? "line-through" : "" } color={complete ? "#535353" : ""} marginLeft="10px">{text}</Box>
                    </Flex>

                ))}
            </Stack>

        </Box>
    );
}