import { CheckIcon, HandThumbUpIcon } from '@heroicons/react/20/solid';
import classNames from '@/utils/classNames';

const timeline = [
	{
		id: 1,
		content: 'Chapter 1: Introduction to HTML',
		target: 'Front End Developer',
		href: '#',
		date: 'Sep 20',
		completed: true,
		datetime: '2020-09-20',
		icon: CheckIcon,
		iconBackground: 'bg-green-500',
	},
	{
		id: 2,
		content: 'Chapter 2: Introduction to CSS',
		target: 'Bethany Blake',
		href: '#',
		date: 'Sep 22',
		datetime: '2020-09-22',
		iconBackground: 'bg-blue-500',
	},
	{
		id: 3,
		content: 'Chapter 3: Introduction to JavaScript',
		target: 'Martha Gardner',
		href: '#',
		date: 'Sep 28',
		datetime: '2020-09-28',
		icon: CheckIcon,
		iconBackground: 'bg-green-500',
	},
	{
		id: 4,
		content: 'Chapter 4: Introduction to React',
		target: 'Bethany Blake',
		href: '#',
		date: 'Sep 30',
		datetime: '2020-09-30',
		icon: HandThumbUpIcon,
		iconBackground: 'bg-blue-500',
	},
	{
		id: 5,
		content: 'Chapter 5: Introduction to Next.js',
		target: 'Katherine Snyder',
		href: '#',
		date: 'Oct 4',
		datetime: '2020-10-04',
		icon: CheckIcon,
		iconBackground: 'bg-green-500',
	},
];

export default function Timeline({ className }: { className?: string }) {
	return (
		<div className={classNames(className + ' flow-root')}>
			<ul role='list'>
				{timeline.map((event, eventIdx) => (
					<li key={event.id}>
						<div className='relative pb-6'>
							<div className='relative flex space-x-2'>
								<div>
									{eventIdx !== timeline.length - 1 ? (
										<span
											className={classNames(
												event.completed ? 'bg-green-500' : 'bg-gray-300',
												'absolute w-0.5 h-full -ml-px top-6 left-3 last:hidden'
											)}
											aria-hidden='true'
										/>
									) : null}
									<span
										className={classNames(
											event.completed ? event.iconBackground : 'bg-gray-400',
											'h-6 w-6 rounded-full flex items-center justify-center ring-white'
										)}
									>
										<CheckIcon className='w-4 h-4 text-gray-100' />
									</span>
								</div>
								<div className='flex justify-between flex-1 min-w-0 space-x-2'>
									<p>{event.content}</p>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
