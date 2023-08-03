import axios from '@/utils/axios';
import IBook from '@/types/Book';

export const createBook = async (book: IBook) => {
	const { data } = await axios.post('/books', book);
	return data;
};

// get all books
export const getBooks = async () => {
	const { data } = await axios.get('/books');
	return data;
};
