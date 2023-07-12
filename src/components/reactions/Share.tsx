import { ShareIcon } from '@heroicons/react/24/outline';

export default function ShareButton({ onClick }: { onClick?: () => void }) {
	return (
		<button
			onClick={
				onClick
					? onClick
					: () => {
							return;
					  }
			}
		>
			<ShareIcon className='w-8 h-8 text-gray-700' />
		</button>
	);
}
