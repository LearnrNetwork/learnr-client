export default interface IBook {
	title: string;
	author: string;
	description: string;
	slug?: string;
	publishedDate: Date;
	publisher: string;
	tags: string[];
	bookCover: string;
	amazonLink?: string;
}
