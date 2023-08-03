import Book from '@/components/books/Book';
import Course from '@/components/courses/Course';
import UserLayout from '@/components/layouts/UserLayout';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// test
const books = [
	{
		_id: '1',
		title: 'Differential Equations',
		author: 'MIT',
		cover:
			'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MYMUGQL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL800_&tag=allencheng-20',
		tags: [
			{ _id: '1', name: 'Programming' },
			{ _id: '2', name: 'Software Engineering' },
		],
		href: '/courses/the-pragmatic-programmer',
	},
	{
		_id: '2',
		title: 'The 48 laws of power',
		author: 'Robert Greene',
		href: '/courses/the-48-laws-of-power',
		cover:
			'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MYMUGQL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL800_&tag=allencheng-20',
		tags: [{ _id: '1', name: 'Programming' }],
	},
	{
		_id: '3',
		title: 'The Pragmatic Programmer',
		author: 'MIT',
		href: '/courses/the-pragmatic-programmer',
		cover:
			'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B079WM7KLS&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL800_&tag=allencheng-20',
		tags: [
			{ _id: '1', name: 'Programming' },
			{ _id: '2', name: 'Software Engineering' },
		],
	},
	{
		_id: '4',
		title: 'The Pragmatic Programmer',
		author: 'MIT',
		href: '/courses/the-pragmatic-programmer',
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
		author: 'MIT',
		href: '/courses/the-pragmatic-programmer',
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
		author: 'MIT',
		href: '/courses/the-pragmatic-programmer',
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
		author: 'MIT',
		href: '/courses/the-pragmatic-programmer',
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
		author: 'MIT',
		href: '/courses/the-pragmatic-programmer',
		cover:
			'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MYMUGQL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL800_&tag=allencheng-20',
		tags: [
			{ _id: '1', name: 'Programming' },
			{ _id: '2', name: 'Software Engineering' },
		],
	},
];

export default function CoursesPage() {
	return (
		<UserLayout>
			{/* a search field with option */}
			<div className='flex items-center justify-center w-full h-72'>
				<div className='relative w-1/2'>
					<label htmlFor='Search'>
						<p className='sr-only'>Search for the course you want</p>
					</label>
					<div className='absolute flex items-center justify-center h-full w-14'>
						<MagnifyingGlassIcon className='w-6 h-6 font-semibold text-gray-500' />
					</div>
					<input
						type='text'
						placeholder='Search the course you want'
						className='w-full py-4 pl-12 rounded-full'
					/>
				</div>
			</div>
			{/* a list of courses */}
			<div className='lg:w-3/4 md:w-full'>
				{/* What people are reading */}
				<div>
					<h2 className='mb-4 text-2xl font-medium tracking-wide'>
						From Learnr
					</h2>
					<div>
						{books.map((book: any) => (
							<div key={book._id} className='w-full mb-4'>
								<Course
									title={book.title}
									author={book.author}
									cover={book.cover}
									tags={book.tags}
									href={book.href}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</UserLayout>
	);
}
