import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

export default function CommentButton({ onClick }: { onClick?: () => void }) {
	return (
		<button
			title='Comment'
			onClick={
				onClick
					? onClick
					: () => {
							return;
					  }
			}
		>
			<ChatBubbleOvalLeftEllipsisIcon className='text-gray-700 w-7 h-7' />
		</button>
	);
}
