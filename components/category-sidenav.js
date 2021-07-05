import Link from 'next/link';
import { Flex, Button, Box, Link as ChakraLink, Heading, Stack } from '@chakra-ui/react';

/* catgories is list of categories, which are objects of form
	{ name: string, slug: string }
*/

export default function CategorySideNav({ pathPrefix, currCategory, categories, title, ...props }) {
	return (
		<Box w="fit-content" {...props}>
			<Heading mb={8} color='#353535'>
				{title}
			</Heading>
			<Stack spacing={4}>
				{categories.map(({ name, slug }) => {
					let selected = currCategory && currCategory.slug === slug;

					return (
						<Box
							key={slug}
							fontSize='md'
							fontWeight={selected ? 'bold' : 'normal'}
							color={selected ? '#353535' : 'gray.400'}
							borderLeft={selected ? '3px solid #353535' : 'none'}
							px={2}
							_hover={{
								color: '#353535'
							}}>
							<ChakraLink as={Link} href={`${pathPrefix}/${slug}`}>
								{name[0].toUpperCase().concat(name.slice(1))}
							</ChakraLink>
						</Box>
					);
				})}
			</Stack>
		</Box>
	);
}
