import Book from '@/components/books/Book';
import SidebarLayout from '@/components/layouts/SidebarLayout';

// test
const books = [
	{
		_id: '1',
		title: 'The Pragmatic Programmer',
		author: 'David Thomas, Andrew Hunt',
		cover:
			'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MYMUGQL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL800_&tag=allencheng-20',
		tags: [
			{ _id: '1', name: 'Programming' },
			{ _id: '2', name: 'Software Engineering' },
		],
		href: '/bookism/the-pragmatic-programmer',
	},
	{
		_id: '2',
		title: 'The 48 laws of power',
		author: 'Robert Greene',
		href: '/bookism/the-48-laws-of-power',
		cover:
			'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MYMUGQL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL800_&tag=allencheng-20',
		tags: [
			{ _id: '1', name: 'Programming' },
			{ _id: '2', name: 'Software Engineering' },
		],
	},
	{
		_id: '3',
		title: 'The Pragmatic Programmer',
		author: 'David Thomas, Andrew Hunt',
		href: '/bookism/the-pragmatic-programmer',
		cover:
			'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MYMUGQL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL800_&tag=allencheng-20',
		tags: [
			{ _id: '1', name: 'Programming' },
			{ _id: '2', name: 'Software Engineering' },
		],
	},
	{
		_id: '4',
		title: 'The Pragmatic Programmer',
		author: 'David Thomas, Andrew Hunt',
		href: '/bookism/the-pragmatic-programmer',
		cover:
			'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MYMUGQL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL800_&tag=allencheng-20',
		tags: [
			{ _id: '1', name: 'Programming' },
			{ _id: '2', name: 'Software Engineering' },
		],
	},
	{
		_id: '5',
		title: 'The Pragmatic Programmer',
		author: 'David Thomas, Andrew Hunt',
		href: '/bookism/the-pragmatic-programmer',
		cover:
			'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MYMUGQL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL800_&tag=allencheng-20',
		tags: [
			{ _id: '1', name: 'Programming' },
			{ _id: '2', name: 'Software Engineering' },
		],
	},
	{
		_id: '6',
		title: 'The Pragmatic Programmer',
		author: 'David Thomas, Andrew Hunt',
		href: '/bookism/the-pragmatic-programmer',
		cover:
			'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MYMUGQL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL800_&tag=allencheng-20',
		tags: [
			{ _id: '1', name: 'Programming' },
			{ _id: '2', name: 'Software Engineering' },
		],
	},
	{
		_id: '7',
		title: 'The Pragmatic Programmer',
		author: 'David Thomas, Andrew Hunt',
		href: '/bookism/the-pragmatic-programmer',
		cover:
			'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MYMUGQL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL800_&tag=allencheng-20',
		tags: [
			{ _id: '1', name: 'Programming' },
			{ _id: '2', name: 'Software Engineering' },
		],
	},
	{
		_id: '8',
		title: 'The Pragmatic Programmer',
		author: 'David Thomas, Andrew Hunt',
		href: '/bookism/the-pragmatic-programmer',
		cover:
			'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MYMUGQL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL800_&tag=allencheng-20',
		tags: [
			{ _id: '1', name: 'Programming' },
			{ _id: '2', name: 'Software Engineering' },
		],
	},
];

export default function BookismPage() {
	return (
		<SidebarLayout>
			<div className='flex flex-wrap md:justify-around lg:justify-start lg:w-2/3 md:w-full'>
				{books.map((book: any) => (
					<div key={book._id} className='flex mb-4 ml-4'>
						<Book
							title={book.title}
							author={book.author}
							cover={book.cover}
							tags={book.tags}
							href={book.href}
						/>
					</div>
				))}
			</div>
		</SidebarLayout>
	);
}
