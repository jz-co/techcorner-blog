import { StackDivider, Text, Box, HStack, Image, LinkBox, LinkOverlay, Stack } from '@chakra-ui/react';

function ResourceGroup({ title, srcLink, srcName, srcIcon, ...props }) {
	return (
		<LinkBox
			w='250px'
			{...props}
			_hover={{
				transform: 'translateX(3px)',
			}}>
			<HStack spacing={2} w='fit-content' alignItems='center'>
				<Image src={srcIcon} alt={`${srcName} icon`} height='32px' borderRadius='full' />
				<Box color='#353535' fontWeight='semibold' fontSize='medium'>
					<LinkOverlay href={srcLink}>{title}</LinkOverlay>
					<Text fontSize='xs' color='gray.400' lineHeight='4' mt={0}>
						{srcName}
					</Text>
				</Box>
			</HStack>
		</LinkBox>
	);
}

/**
 * srcs is a list of objects with the following schema:
 * { 
 *   title: string, title of the article/page
 *   link: string, external url
 *   name: string, name of the source website
 *   icon: string, url to image of source icon 
 * }
 *
 */

export default function AddResourcesCard({ srcs, ...props }) {
	return (
		<Box bg='white' borderRadius='16px' boxShadow='0px 0px 12px rgba(0, 0, 0, 0.16)' px={8} py={10} {...props}>
			<Text color='#353535' fontWeight='semibold' mb={6}>
				To learn more...
			</Text>
			<Stack spacing={4} divider={<StackDivider borderColor='gray.200' />}>
				{srcs.map((src) => (
					<ResourceGroup key={src.title} title={src.title} srcLink={src.link} srcName={src.name} srcIcon={src.icon} />
				))}
			</Stack>
		</Box>
	);
}
