import NextLink from 'next/link';
import { Box, Heading, Link, Text } from '@chakra-ui/react';

import ThumbnailImage from './thumbnail';

/** meta is an object with the schema:
 * {
 *     title: string,
 *     author: {
 * 			name: string,
 * 		}
 *     published_at: date,  -> TODO: currently treated as string, to be modified
 *     category: {
 * 			name: string,
 * 			slug: string
 * 		},
 *      description: string
 * }
 *
 * thumbnail is an object with the schema
 * {
 *      url: string path/url,
 *      alternativeText: string
 * }
 */

export default function ArticleLayout({ title, author, published_at, category, description, thumbnail, children, ...props }) {
	const { url, alternativeText } = thumbnail;

	return (
		<Box m={8} maxWidth='760px' {...props} color="#353535">
			<Heading as='h1' fontSize="xxx-large" mb={4}>
				{title}
			</Heading>
			<Text color="gray.500">
				Posted by <Text as='span' color="gray.700">{author.name}</Text> on {published_at.slice(0,10)} in{' '}
				<Link color="teal.500" fontWeight="semibold" href={`/blog/topic/${category.slug}`}>
					{category.name[0].toUpperCase().concat(category.name.slice(1))}
					{/* TODO: change teal colour */}
				</Link>
			</Text>
			<Text my={6} fontSize="md">
				{description}
			</Text>
			<ThumbnailImage my={10} src={url} alt={alternativeText} />
			{children}
		</Box>
	);
}
