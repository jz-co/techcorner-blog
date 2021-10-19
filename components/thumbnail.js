import { Flex, Image } from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/react"

export default function ThumbnailImage({ src, alt, ...props }) {
	const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)")
	const [isSmallerThan750] = useMediaQuery("(max-width: 750px)")

	if (isSmallerThan750) {
		return (
			<Flex
				as='figure'
				position='relative'
				width='100vw'
				left='50%'
				right='50%'
				marginLeft='-50vw'
				marginRight='-50vw'
				overflow='hidden'
				justifyContent='center'
				{...props}>
				<Image w='100%' maxH="300px" objectFit='cover' src={src} alt={alt} />
			</Flex>
		);
	} else if (isSmallerThan1024) {
		return (
			<Flex
				as='figure'
				position='relative'
				width='100vw'
				left='50%'
				right='50%'
				marginLeft='-50vw'
				marginRight='-50vw'
				overflow='hidden'
				justifyContent='center'
				{...props}>
				<Image w='100%' maxH="400px" objectFit='cover' src={src} alt={alt} />
			</Flex>
		);
	} else {
		return (
			<Flex
				as='figure'
				position='relative'
				width='100vw'
				left='50%'
				right='50%'
				marginLeft='-50vw'
				marginRight='-50vw'
				overflow='hidden'
				justifyContent='center'
				{...props}>
				<Image w='100%' maxH="450px" maxW='1024px' objectFit='cover' src={src} alt={alt} />
			</Flex>
		);
	}

}