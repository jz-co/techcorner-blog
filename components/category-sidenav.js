import Link from 'next/link';
import { Flex, Button, Box, Link as ChakraLink, Heading, Stack } from '@chakra-ui/react';

/* catgories is simply a list of category names */

export default function CategorySideNav({ pathPrefix, currCategory = '', categories, title, ...props }) {
	return (
		<Box w="fit-content" {...props}>
			<Heading mb={8} fontSize='xx-large' color='#353535'>
				{title}
			</Heading>
			<Stack spacing={4}>
				{categories.map((name) => {
					let selected = currCategory.toLowerCase() === name.toLowerCase();
					return (
						<Box
							key={name}
							fontSize='lg'
                            fontWeight={selected ? 'bold' : 'normal'}
							color={selected ? '#353535' : 'gray.400'}
							borderLeft={selected ? '3px solid #353535' : 'none'}
							px={2}
                            _hover={{
                                fontWeight: 'bold',
                                color: selected ? '#353535' : "gray.500"
                            }}>
							<ChakraLink as={Link} href={`${pathPrefix}${name.toLowerCase()}`}>
								{name}
							</ChakraLink>
						</Box>
					);
				})}
			</Stack>
		</Box>
	);
}
