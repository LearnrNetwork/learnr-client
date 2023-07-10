import classNames from '@/utils/classNames';

export default function Avatar({
	className = '',
	src = '',
	displayOnlineStatus = false,
}: {
	className?: any;
	src: string;
	displayOnlineStatus?: boolean;
}) {
	return (
		<span className='relative inline-block'>
			<img
				className={classNames('h-6 w-6 rounded-full', className)}
				src={src}
				alt=''
			/>
			{displayOnlineStatus && (
				<span className='absolute top-0 right-0 block h-1.5 w-1.5 rounded-full bg-gray-300 ring-2 ring-white' />
			)}
		</span>
	);
}
