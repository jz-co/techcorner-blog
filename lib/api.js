import endpoints from './endpoints';

export function getStrapiURL(path = '') {
	return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchStrapi(requestName, extension = "") {
	const path = endpoints[requestName];
	if (!path) { // If path doesn't exist
		throw new Error(`Request endpoint does not exist`);
	}

	const options = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	};

	const requestUrl = getStrapiURL(path + extension); // extension is appended to path
	const response = await fetch(requestUrl, options);
	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}
	const data = await response.json();
	return data;
}

/**
 * Example usage of fetchStapi helper:
 *
 * 1) Basic, no extension
 * ..... let articles = await fetchStrapi('get.articles') // where 'get.articles' is a key in endpoints
 *
 * 2) Using extension
 * ..... let articleId = 10;
 * let currArticle = await fetchStrapi('get.article', `/${articleId}`)
 *  // say 'get.article' corresponds to path /article
 *  // then, the final path that is fetched is /article/10
 */
