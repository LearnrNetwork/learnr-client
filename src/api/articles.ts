import axios from '@/utils/axios';

export const createArticle = async ({
	title,
	content,
	tags,
}: {
	title: string;
	content: string;
	tags: [string];
}) => {
	const { data } = await axios.post('/articles', {
		title,
		content,
		tags,
	});
	return data;
};

// get all articles
export const getAllArticles = async () => {
	const { data } = await axios.get('/articles');
	return data;
};
