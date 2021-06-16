import NextLink from 'next/link';
import { Button, Box, Link } from '@chakra-ui/react';

const NavLink = ({ to, label, ...props }) => {
	return (
		<Link as={NextLink} href={to}>
			<Button
                color="#353535"
				bg='none'
				mx={4}
				_focus={{
					boxShadow: 'none',
					outline: 'none',
				}}
				{...props}>
				{label}
			</Button>
		</Link>
	);
};

const NavBar = ({ selectedPage = '', ...props }) => {
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

	return (
        <Box>
            {pages.map(({ name, path }) => (
                <NavLink
					key={name}
                    label={name}
                    to={path}
                    fontWeight={name.toLowerCase() === selectedPage.toLowerCase() ? 'bold' : 'medium'}
                />
            ))}
        </Box>
	);
};

export default NavBar;
