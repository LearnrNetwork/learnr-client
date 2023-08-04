import { CheckIcon } from '@heroicons/react/24/outline';
import classNames from '@/utils/classNames';
import { useState } from 'react';

export default function MarkButton({
	onClick,
	isMarked,
}: {
	onClick?: () => void;
	isMarked?: boolean;
}) {
	const [marked, setMarked] = useState(isMarked);
	return (
		<button
			title={marked ? 'Unmark as read' : 'Mark as read'}
			onClick={
				onClick
					? onClick
					: () => {
							setMarked(!marked);
							console.log(marked);
					  }
			}
		>
			<CheckIcon
				className={classNames(
					marked ? 'text-primary' : '',
					'text-gray-700 w-7 h-7'
				)}
			/>
		</button>
	);
}
