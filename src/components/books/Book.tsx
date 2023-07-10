import Image from 'next/image';
import Badge from '../badge/Badge';
import Link from 'next/link';

export default function Book({ title, author, cover, tags, href }: any) {
	return (
		<div className='flex lg:w-48 md:w-full'>
			<div className='flex flex-col'>
				{/* book cover */}
				<div className='self-center w-44'>
					<Image src={cover} alt={title} width={500} height={500} />
				</div>
				{/* book title */}
				<div className='flex flex-col'>
					<Link href={href}>
						<h2 className='mt-2 uppercase whitespace-pre-wrap cursor-pointer hover:text-primary'>
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
							<Badge key={tag._id} content={tag.name} className='ml-1' />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
