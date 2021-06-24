import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Button, Box, Link } from '@chakra-ui/react';

function NavLink ({ to, label, ...props }) {
	const router = useRouter();
	return (
		<Link as={ NextLink } href={to}>
			<Button
                color="#353535"
				bg='none'
				mx={4}
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

export default function NavBar ({ ...props }) {
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
                />
            ))}
        </Box>
	);
};
