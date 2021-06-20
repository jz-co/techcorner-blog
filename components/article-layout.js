import NextLink from 'next/link';
import { Box, Heading, Link, Text } from '@chakra-ui/react';

import ThumbnailImage from './thumbnail';

/** meta is an object with the schema:
 * {
 *     title: string,
 *     author: string, -> possibly { firstName, lastName } -> TODO: check Strapi model
 *     publishedDate: date,  -> TODO: currently treated as string, to be modified
 *     category: string,
 *      caption: string
 * }
 *
 * thumbnail is an object with the schema
 * {
 *      src: string path/url,
 *      alt: string
 * }
 */

export default function ArticleLayout({ meta, thumbnail, children, ...props }) {
	const { title, author, publishedDate, category, caption } = meta;
    const { src, alt } = thumbnail;

	return (
		<Box m={8} maxWidth='760px' {...props} color="#353535">
			<Heading as='h1' fontSize="xxx-large" mb={4}>
				{title}
			</Heading>
			<Text color="gray.500">
				Posted by <Text as='span' color="gray.700">{author}</Text> on {publishedDate} in{' '}
                <Link color="teal.500" fontWeight="semibold" href={`/topics/${category.toLowerCase()}`}>
					{category}
                    {/* TODO: change teal colour */}
				</Link>
			</Text>
            <Text my={6} fontSize="lg">
                {caption}
            </Text>
            <ThumbnailImage my={10} src={src} alt={alt} />
            {children}
		</Box>
	);
}
