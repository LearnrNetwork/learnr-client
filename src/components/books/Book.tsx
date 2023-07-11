import Image from 'next/image';
import Badge from '@/components/badge/Badge';
import Link from 'next/link';

export default function Book({ title, author, cover, tags, href }: any) {
	return (
		<div className='flex overflow-hidden bg-white border border-gray-200 rounded-lg lg:w-72 md:w-full'>
			<div className='flex flex-col'>
				{/* book cover */}
				<div className='self-center w-full bg-green-300 border-b border-gray-200'>
					<Image
						src={cover}
						alt={title}
						className='px-20 py-8'
						width={500}
						height={500}
					/>
				</div>
				{/* book title */}
				<div className='flex flex-col px-4 py-4'>
					<Link href={href}>
						<h2 className='uppercase whitespace-pre-wrap cursor-pointer hover:text-primary'>
							{title}
						</h2>
					</Link>
					{/* book author */}
					<div className='my-2'>
						<h3 className='text-xs text-gray-500'>{author}</h3>
					</div>
					{/* book tags */}
					<div className=''>
						{tags.map((tag: { _id: string; name: string }) => (
							<Badge
								key={tag._id}
								content={tag.name}
								className='mr-1 text-gray-500 uppercase'
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
