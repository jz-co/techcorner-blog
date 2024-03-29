import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Button, Link, Flex, useMediaQuery } from '@chakra-ui/react';

function NavLink({ to, label, ...props }) {
	const router = useRouter();
	return (
		<Link as={NextLink} href={to} passHref>
			<Button
				as="a"
				color="#353535"
				bg='none'
				mx={[2, 2, 4]}
				_focus={{
					boxShadow: 'none',
					outline: 'none',
				}}
				fontWeight={router.pathname === to ? 'bold' : 'medium'}
				{...props}>
				{label}
			</Button>
		</Link>
	);
};

export default function NavBar({ ...props }) {
	const pages = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'CS Notes',
			path: '/notes',
		},
		{
			name: 'Blog',
			path: '/blog',
		},
		{
			name: 'About',
			path: '/about',
		},
	];
	const pagesWithoutHome = [
		{
			name: 'CS Notes',
			path: '/notes',
		},
		{
			name: 'Blog',
			path: '/blog',
		},
		{
			name: 'About',
			path: '/about',
		},
	]

	return (
		<Flex justifyContent="center" flexWrap="wrap" {...props}>
			<Flex justifyContent="space-evenly" flexWrap="wrap">
				{useMediaQuery("(max-width: 500px)")[0] ? (pagesWithoutHome.map(({ name, path }) => (
					<NavLink
						key={name}
						label={name}
						to={path}
					/>)))
					:
					(pages.map(({ name, path }) => (
						<NavLink
							key={name}
							label={name}
							to={path}
						/>
					)))}
			</Flex>
		</Flex >
	);
};
