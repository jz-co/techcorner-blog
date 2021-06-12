import { Flex, Image, Text } from '@chakra-ui/react';

export default function BodyImage({ src, alt, caption, ...props }) {
	return (
		<Flex
			as='figure'
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            w="fit-content"
            overflow="hidden"
			{...props}>
			<Image w='100%' src={src} alt={alt} objectFit="cover"/>
            <Text as="figcaption" color="gray.500" mt={4}>{ caption }</Text>
		</Flex>
	);
}
