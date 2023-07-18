import classNames from '@/utils/classNames';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function LikeButton({
	isLiked,
	onClick,
}: {
	isLiked: boolean;
	onClick?: () => void;
}) {
	const [liked, setLiked] = useState(isLiked);
	return (
		<button title='Like' onClick={onClick ? onClick : () => setLiked(!liked)}>
			<HeartIcon
				className={classNames(
					liked ? 'fill-red-600 text-red-600' : 'text-gray-700',
					'w-7 h-7'
				)}
			/>
		</button>
	);
}
