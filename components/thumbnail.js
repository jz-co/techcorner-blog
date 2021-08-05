import { Flex, Image } from '@chakra-ui/react';

export default function ThumbnailImage({ src, alt, ...props }) {
	return (
		<Flex
			as='figure'
			position='relative'
			width='100vw'
			left='50%'
			right='50%'
			marginLeft='-50vw'
			marginRight='-50vw'
			minHeight='200px'
			overflow='hidden'
			justifyContent='center'
			{...props}>
			<Image w='100%' maxW='1024px' objectFit='cover' src={src} alt={alt} />
		</Flex>
	);
}
