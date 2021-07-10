import Link from 'next/link';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

import PostTag from './post-tag';

/**
 * image is an object with schema:
 * { src: string (url), alt: string }
 */
export default function HeroPostCard({ title, description, published_at, category, thumbnail, slug, ...props }) {
	return (
		<Flex maxW='800px' maxH={['1000px', '240px']} {...props} overflow='hidden' flexWrap='wrap'>
			<Link href={`/blog/posts/${slug}`} passHref>
				<Box as="a" d='flex' flexBasis='50%'>
					<Image src={thumbnail.url} objectFit='cover' />
				</Box>
			</Link>
			<Box p={8} bg='white' color='#353535' flexBasis='50%'>
				<PostTag tag={category.name} slug={category.slug} color="blue.400" />
				<Text as="h3" fontSize='xl' fontWeight='semibold' mb={2} mt={2} maxW='100%' noOfLines={2}>
					<Link href={`/blog/posts/${slug}`}><a>{title}</a></Link>
				</Text>
				<Text fontSize="13px" noOfLines={2}>{description}</Text>
				<Text color='#959595' fontSize="12px" mt={4}>{`Published ${published_at.slice(0, 10)}`}</Text>
			</Box>
		</Flex>
	);
}
