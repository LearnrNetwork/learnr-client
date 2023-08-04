import LikeButton from '@/components/reactions/Like';
import BookmarkButton from '@/components/reactions/Bookmark';
import CommentButton from '@/components/reactions/Comment';
import ListButton from '@/components/reactions/List';
import ShareButton from '@/components/reactions/Share';
import MarkButton from '../reactions/Mark';

export default function FloatingBar() {
	return (
		<div className='flex p-2 bg-white border border-gray-300 rounded-full shadow-lg opacity-95'>
			<div className='flex items-center justify-center px-2 border-r border-gray-700 border-dashed'>
				<MarkButton isMarked={true} />
			</div>
			<div className='flex items-center justify-center px-2 border-r border-gray-700 border-dashed'>
				<LikeButton isLiked={true} />
			</div>
			<div className='flex items-center justify-center px-2 border-r border-gray-700 border-dashed'>
				<BookmarkButton isBookmarked={true} />
			</div>
			<div className='flex items-center justify-center px-2 border-r border-gray-700 border-dashed'>
				<CommentButton />
			</div>
			<div className='flex items-center justify-center px-2 border-r border-gray-700 border-dashed'>
				<ListButton />
			</div>
			<div className='flex items-center justify-center px-2'>
				<ShareButton />
			</div>
		</div>
	);
}
