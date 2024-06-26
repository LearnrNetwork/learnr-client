import {
	CalendarIcon,
	ChartBarIcon,
	FolderIcon,
	HomeIcon,
	InboxIcon,
	UsersIcon,
} from '@heroicons/react/24/outline';
import classNames from '@/utils/classNames';

const navigation = [
	{ name: 'Explore', href: '#', icon: HomeIcon, current: true },
	{ name: 'Bookism', href: '/bookism', icon: UsersIcon, current: false },
	{ name: 'Courses', href: '/courses', icon: FolderIcon, current: false },
	{ name: 'Suggestion', href: '#', icon: InboxIcon, current: false },
];
const secondaryNavigation = [{ name: 'Lifely', href: 'lifely' }];

export default function Example() {
	return (
		<nav aria-label='Sidebar'>
			<div className='space-y-1'>
				{navigation.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className={classNames(
							item.current
								? 'bg-gray-100 text-gray-900'
								: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
							'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
						)}
						aria-current={item.current ? 'page' : undefined}
					>
						<item.icon
							className={classNames(
								item.current
									? 'text-gray-500'
									: 'text-gray-400 group-hover:text-gray-500',
								'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
							)}
							aria-hidden='true'
						/>
						<span className='truncate'>{item.name}</span>
					</a>
				))}
			</div>
			<div className='mt-8'>
				<h3
					className='px-3 text-sm font-medium text-gray-500'
					id='projects-headline'
				>
					More from us
				</h3>
				<div className='mt-1 space-y-1' aria-labelledby='projects-headline'>
					{secondaryNavigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className='flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md group hover:bg-gray-50 hover:text-gray-900'
						>
							<span className='truncate'>{item.name}</span>
						</a>
					))}
				</div>
			</div>
		</nav>
	);
}
