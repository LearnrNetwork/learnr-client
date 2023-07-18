import { ShareIcon } from '@heroicons/react/24/outline';

export default function ShareButton({ onClick }: { onClick?: () => void }) {
	return (
		<button
			title='Share'
			onClick={
				onClick
					? onClick
					: () => {
							return;
					  }
			}
		>
			<ShareIcon className='w-6 h-6 text-gray-700' />
		</button>
	);
}
