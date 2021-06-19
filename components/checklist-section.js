import { useState } from "react";
import { Text, Flex, Box, Heading, HStack, Checkbox, Stack } from '@chakra-ui/react';

export default function Footer({
    title,
    items,
    ...props
}) {
    const itemObjects = [];
    for (var i = 0; i < items.length; i++) {
        itemObjects.push({text: items[i], complete: false})
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
        <Box borderRadius="10px" backgroundColor="#FFFFFF" maxWidth="1000px" boxShadow="0px 0px 12px rgba(0, 0, 0, 0.16)">
            <Box backgroundColor="#D2D2D2"
                borderTopLeftRadius="10px"
                borderTopRightRadius="10px"
                padding="10px"
                
            >
                <Text marginLeft="50px" fontSize="22px">{title}</Text>
            </Box>
            <Stack marginLeft="40px" padding="20px" spacing="15px">
                {checklistItems.map(({ text, complete }, i) => (
                    <Checkbox onChange={() => changeCompletionStatus(i)} color={complete ? "gray" : ""}>{text}</Checkbox>
                ))}
            </Stack>

        </Box>
    );
}