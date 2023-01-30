import { error } from '@sveltejs/kit';
import { blogs } from '$lib/database';

import type { Blog } from '$lib/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { params } = event;
	// Let's pretend that this is a network call to a database
	// that takes 2 seconds.
	const aFakeNetworkCall: Promise<Blog> = new Promise((resolve, reject) => {
		setTimeout(() => {
			const blogData = blogs.find((blog) => params.blogId === blog.id);

			if (blogData) resolve(blogData);
			else reject('Not Found');
		}, 2000);
	});

	try {
		const blog = await aFakeNetworkCall;

		return {
			blog
		};
	} catch (loadError) {
		if (loadError === 'Not Found') throw error(404, 'Not Found');

		throw error(500, 'Something went wrong. Please try again.');
	}
};
