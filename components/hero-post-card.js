import Link from 'next/link';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

import PostTag from './post-tag';

/**
 * image is an object with schema:
 * { src: string (url), alt: string }
 */
export default function HeroPostCard({ title, description, published_at, category, thumbnail, slug, ...props }) {
	return (
		<Flex maxW='800px' maxH={['1000px', '240px']} {...props}
			overflow='hidden' flexWrap='wrap' mb="20px"
			boxShadow="-2px 2px 1px rgba(0, 0, 0, 0.1)"
			border="1px solid #042E4E"
			bg="white">
			<Link href={`/blog/posts/${slug}`} passHref>
				<Box as="a" d='flex' flexBasis='50%'>
					<Image src={thumbnail.url} objectFit='cover' />
				</Box>
			</Link>
			<Box p={8} bg='white' color='#031628' flexBasis='50%'>
				<PostTag tag={category.name} slug={category.slug} colorIndex={0} />
				<Text as="h3" fontSize='2xl' fontWeight='semibold' mb={2} mt={2} maxW='100%' noOfLines={2} lineHeight="110%">
					<Link href={`/blog/posts/${slug}`}><a>{title}</a></Link>
				</Text>
				<Text fontSize="sm" noOfLines={2} lineHeight="136%">{description}</Text>
				<Text color='#959595' fontSize="xs" mt={4}>{`Published ${published_at.slice(0, 10)}`}</Text>
			</Box>
		</Flex>
	);
}
