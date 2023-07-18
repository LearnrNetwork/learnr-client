import classNames from '@/utils/classNames';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function BookmarkButton({
	isBookmarked,
	onClick,
}: {
	isBookmarked: boolean;
	onClick?: () => void;
}) {
	const [bookmarked, setBookmarked] = useState(isBookmarked);
	return (
		<button
			title='Bookmark'
			onClick={onClick ? onClick : () => setBookmarked(!bookmarked)}
		>
			<BookmarkIcon
				className={classNames(
					bookmarked ? 'fill-blue-600 text-blue-600' : 'text-gray-700',
					'w-7 h-7'
				)}
			/>
		</button>
	);
}
