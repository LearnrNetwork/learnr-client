import { ListBulletIcon } from '@heroicons/react/24/outline';

export default function ShareButton({ onClick }: { onClick?: () => void }) {
	return (
		<button
			title='Chapters'
			onClick={
				onClick
					? onClick
					: () => {
							return;
					  }
			}
		>
			<ListBulletIcon className='text-gray-700 w-7 h-7' />
		</button>
	);
}
