import { blogs } from '$lib/database';
import type { Blog } from '$lib/database';
import type { PageServerLoad } from './$types';

type BlogsData = Omit<Blog, 'synopsis'>;
export const load: PageServerLoad = async () => {
	// Let's pretend that this is a network call to a database
	// that takes 2 seconds.
	const aFakeNetworkCall: Promise<BlogsData[]> = new Promise((resolve) => {
		setTimeout(() => {
			const mappedBlogData = blogs.map((blog) => {
				return {
					id: blog.id,
					title: blog.title
				} as BlogsData;
			});
			resolve(mappedBlogData);
		}, 2000);
	});
	return {
		blogs: await aFakeNetworkCall
	};
};
