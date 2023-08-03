import axios from '@/utils/axios';

export const getAllTags = async () => {
	const { data } = await axios.get('/tags');
	return data;
};
