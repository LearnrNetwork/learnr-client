import Image from 'next/image';
import Badge from '@/components/badge/Badge';
import Link from 'next/link';
import Avatar from '../user/Avatar';

export default function Book({ title, author, cover, tags, href }: any) {
	return (
		<div className='flex lg:w-72 md:w-full'>
			<div className='flex flex-col'>
				{/* book cover */}
				<div className='self-center w-44'>
					<Image src={cover} alt={title} width={500} height={500} />
				</div>
				{/* book title */}
				<div className='flex flex-col'>
					<Link href={href}>
						<h2 className='mt-4 uppercase cursor-pointer hover:text-primary'>
							{title}
						</h2>
					</Link>
					{/* book author */}
					<div className='flex my-2'>
						<Avatar
							src='https://eyemartnepal.com/wp-content/uploads/2019/05/Screenshot_20200303-215853__01.jpg'
							className='mr-2'
						/>
						<p>
							<Link href={'/'} className='font-semibold'>
								{author}
							</Link>{' '}
							via{' '}
							<Link
								href={'/'}
								className='font-semibold underline underline-offset-1'
							>
								EDX
							</Link>
						</p>
					</div>
					{/* book tags */}
					<div className='self-start'>
						{tags.map((tag: { _id: string; name: string }) => (
							<Badge
								key={tag._id}
								content={tag.name}
								className='ml-1 uppercase'
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
