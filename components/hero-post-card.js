import Link from 'next/link';
import { Flex, Button, Box, Heading, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react';

/**
 * image is an object with schema:
 * { src: string (url), alt: string }
 */
export default function HeroPostCard({ title, caption, publishedDate, tag, image, link, ...props }) {
	return (
		<Flex maxW='780px' maxH={['1000px', '240px']} {...props} overflow='hidden' flexWrap='wrap'>
			{/* Still debating whether to use Next link instead since it gives power to smoother page transitions */}
			<Box as="a" href={link} d='flex' flexBasis='50%'>
				<Image src={image} objectFit='cover' />
			</Box>
			<Box p={8} bg='white' color='#353535' flexBasis='50%'>
				<Button as='a' href='/notes' variant='outline' size='sm' fontSize='xs' p={2} textTransform='uppercase'>
					{tag}
					{/* Replace with PostTag Component  */}
				</Button>
				<Heading fontSize='x-large' mb={2} mt={2} maxW='100%'>
					<Link href={link}>{title}</Link>
				</Heading>
				<Text fontSize='xs'>{caption}</Text>
				<Text color='#959595' fontSize='xx-small' mt={4}>{`Published ${publishedDate}`}</Text>
			</Box>
		</Flex>
	);
}
