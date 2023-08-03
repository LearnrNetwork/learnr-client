import Avatar from '@/components/user/Avatar';
import Image from 'next/image';
import moment from 'moment';
import LikeButton from '../reactions/Like';
import CommentButton from '../reactions/Comment';

const comments = [
	{
		_id: '1',
		parent: '1',
		author: {
			_id: '1',
			name: 'Manish',
			username: 'Beyond',
		},
		content: 'I disagree on this point. I think that...',
		createdAt: '2021-06-01T12:00:00.000Z',
		updatedAt: '2021-06-01T12:00:00.000Z',
		reactions: {
			_id: '1',
			like: 1,
			dislike: 0,
		},
	},
	{
		_id: '2',
		parent: '1',
		author: {
			_id: '1',
			name: 'Princess',
			username: 'princess',
		},
		content: 'I agree with you',
		createdAt: '2021-06-01T12:00:00.000Z',
		updatedAt: '2021-06-01T12:00:00.000Z',
		reactions: {
			_id: '1',
			like: 1,
			dislike: 0,
		},
	},
];

export default function DiscussionCard() {
	return (
		<div className='w-full p-4 bg-white rounded-lg'>
			{comments.map(
				(comment) =>
					comment._id === comment.parent && (
						<div key={comment._id}>
							<div className='relative flex items-center'>
								{/* avatar */}
								<div className='self-start w-10 h-10'>
									{!(comment.parent != comment._id) && (
										<span className='absolute w-0.5 top-[18px] left-[18px] h-full bg-gray-300 last:hidden'></span>
									)}
									<Avatar
										className='w-full h-full'
										src='https://eyemartnepal.com/wp-content/uploads/2019/05/Screenshot_20200303-215853__01.jpg'
									/>
								</div>
								{/* name and badges and time */}
								<div className='flex w-full ml-2'>
									<div className='flex flex-col w-full'>
										<div className='flex items-center'>
											<h2>@{comment.author.username}</h2>
											<div className='ml-1'>
												{/* badges */}
												<div className='w-6 h-6'>
													{/* TODO: Update badge placeholder dynamically */}
													<Image
														title='OG badge'
														src='/images/badges/og.png'
														width={100}
														height={100}
														alt={'badge placeholder'}
													/>
												</div>
											</div>
											{/* time and date */}
											<div className='ml-1'>
												<span className='text-gray-500'>
													{moment(comment.createdAt).fromNow()}
												</span>
											</div>
										</div>

										{/* content */}
										<div className='mt-2'>
											<p>{comment.content}</p>
										</div>
										{/* reactions */}
										<div className='flex items-center w-full mt-2 mb-5'>
											<div className='flex items-center mt-2 space-x-4'>
												<div>
													<LikeButton isLiked={true} />
												</div>
												<div>
													<CommentButton />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='relative flex items-center'>
								{/* avatar */}
								<div className='self-start w-10 h-10'>
									{!(comment.parent != comment._id) && (
										<span className='absolute w-0.5 top-[18px] left-[18px] h-full bg-gray-300 last:hidden'></span>
									)}
									<Avatar
										className='w-full h-full'
										src='https://eyemartnepal.com/wp-content/uploads/2019/05/Screenshot_20200303-215853__01.jpg'
									/>
								</div>
								{/* name and badges and time */}
								<div className='flex w-full ml-2'>
									<div className='flex flex-col w-full'>
										<div className='flex items-center'>
											<h2>@{comment.author.username}</h2>
											<div className='ml-1'>
												{/* badges */}
												<div className='w-6 h-6'>
													{/* TODO: Update badge placeholder dynamically */}
													<Image
														title='OG badge'
														src='/images/badges/og.png'
														width={100}
														height={100}
														alt={'badge placeholder'}
													/>
												</div>
											</div>
											{/* time and date */}
											<div className='ml-1'>
												<span className='text-gray-500'>
													{moment(comment.createdAt).fromNow()}
												</span>
											</div>
										</div>

										{/* content */}
										<div className='mt-2'>
											<p>{comment.content}</p>
										</div>
										{/* reactions */}
										<div className='flex items-center w-full mt-2 mb-5'>
											<div className='flex items-center mt-2 space-x-4'>
												<div>
													<LikeButton isLiked={true} />
												</div>
												<div>
													<CommentButton />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)
			)}
		</div>
	);
}
