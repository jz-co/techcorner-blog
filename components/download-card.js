import { Box, Image, Button, Text } from '@chakra-ui/react';

export default function DownloadCard({ img, name, description, cta, downloadLink, ...props }) {
	return (
		<Box position='relative' maxWidth='540px' {...props}>
			<Box maxWidth='540px' maxHeight='240px' overflow='hidden'>
				<Image src={img} objectFit='cover' />
			</Box>
			<Box bg='white' p={6} width='inherit' color='gray.800'>
				<Box my={1} fontWeight='semibold' fontSize='lg' as='h2' lineHeight='tight' isTruncated>
					Free Resume Template
					{/* Replace with { name } */}
				</Box>
				<Text color='gray.600'>
					{/* Replace with { description } */}
					Download this editable Word document and start filling out your resume today.
				</Text>

				<Button
					mt={4}
					color='white'
					bg='teal.500'
					_focus={{
						outline: 'none',
						boxShadow: 'none',
					}}>
					Get yours now
                    {/* Replace with { cta }, will also need to add onClick func */}
				</Button>
			</Box>
		</Box>
	);
}
