import { Box, Heading, Link, Text, Button, Flex} from '@chakra-ui/react';
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { darken } from '@chakra-ui/theme-tools';
import ThumbnailImage from './thumbnail';
import React, { useEffect, useState } from "react";

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
	const [currentUrl, setCurrentUrl] = React.useState("");
	React.useEffect(() => {
		setCurrentUrl(window.location.href);
	});
	const { url, alternativeText } = thumbnail;
	const twitterShairngUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=Check%20out%20this%20article%20by%20@techcorner0101`
	const linkedinSharingUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${title}&summary=${description}`
	const fbSharingUrl = "https://www.facebook.com/sharer/sharer.php?u=" + currentUrl;
	return (
		<Box m={8} maxWidth='780px' {...props} color="#031628">
			<Heading as='h1' fontSize={["4xl", "5xl"]} mb={4}>
				{title}
			</Heading>
			<Text color="gray.500">
				Posted by <Text as='span' color="gray.700">{author.name}</Text> on {published_at.slice(0, 10)} in{' '}
				<Link color="teal.500" fontWeight="semibold" href={`/blog/topic/${category.slug}`}>
					{category.name[0].toUpperCase().concat(category.name.slice(1))}
					{/* TODO: change teal colour */}
				</Link>
			</Text>
			<Flex mt="20px">
				<Box mr="4">
					<Button backgroundColor="#1DA1F2" color="white" height="28px" fontSize="13.5px" fontWeight="bold" pl="8px" pr="8px" leftIcon={<FaTwitter />} _hover={{ bg: darken("#1DA1F2", 5) }} onClick={() => window.open(twitterShairngUrl)} borderRadius="3.5">
						Tweet
					</Button>
				</Box>
				<Box mr="4">
					<Button backgroundColor="#0A66C2" color="white" height="28px" fontSize="13.5px" fontWeight="bold" pl="8px" pr="8px" leftIcon={<FaLinkedin />} _hover={{ bg: darken("#0A66C2", 5) }} onClick={() => window.open(linkedinSharingUrl)} borderRadius="3.5">
						Share
					</Button>
				</Box>
				<Box>
					<Button backgroundColor="#1877F2" color="white" height="28px" fontSize="13.5px" fontWeight="bold" pl="8px" pr="8px" leftIcon={<FaFacebook />} _hover={{ bg: darken("#1877F2", 5) }} onClick={() => window.open(fbSharingUrl)} borderRadius="3.5">
						Share
					</Button>
				</Box>
			</Flex>
			<Text my={6} fontSize="md">
				{description}
			</Text>
			<ThumbnailImage mt={10} mb={8} src={url} alt={alternativeText} />
			{children}
		</Box>
	);
}
