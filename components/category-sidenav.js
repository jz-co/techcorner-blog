import Link from 'next/link';
import { Box, Link as ChakraLink, Heading, Stack } from '@chakra-ui/react';

/* catgories is list of categories, which are objects of form
	{ name: string, slug: string }
*/

export default function CategorySideNav({ pathPrefix, currCategory, categories, title, allPrefix, ...props }) {
	return (
		<Box w="fit-content" width="140px" {...props}>
			<Heading mb={8} color='#042E4E' fontSize={["2xl", "3xl"]}>
				{title}
			</Heading>
			<Stack spacing={4}>
				<Box

					fontSize='md'
					fontWeight={(!currCategory) ? 'bold' : 'normal'}
					color={(!currCategory) ? '#042E4E' : '#778995'}
					borderLeft={(!currCategory) ? '3px solid #042E4E' : 'none'}
					px={2}
					_hover={{
						color: '#778995'
					}}>
					<ChakraLink as={Link} href={`${allPrefix || pathPrefix}`}>
						<a>All</a>
					</ChakraLink>

				</Box>
				{categories.map(({ name, slug }) => {
					let selected = currCategory && currCategory.slug === slug;

					return (
						<Box
							key={slug}
							fontSize='md'
							fontWeight={selected ? 'bold' : 'normal'}
							color={selected ? '#042E4E' : 'gray.400'}
							borderLeft={selected ? '3px solid #042E4E' : 'none'}
							px={2}
							_hover={{
								color: '#042E4E'
							}}>
							<ChakraLink as={Link} href={`${pathPrefix}/${slug}`}>
								<a>{name[0].toUpperCase().concat(name.slice(1))}</a>
							</ChakraLink>
						</Box>
					);
				})}

			</Stack>
		</Box>
	);
}
