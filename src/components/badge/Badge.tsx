import classNames from '@/utils/classNames';

export default function Badge({
	content,
	className,
	onClick,
}: {
	content: string;
	className?: string;
	onClick?: (...args: any) => void;
}) {
	return (
		<div
			onClick={onClick}
			className={classNames(
				className,
				onClick ? 'cursor-pointer' : '',
				' inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'
			)}
		>
			{content}
		</div>
	);
}
