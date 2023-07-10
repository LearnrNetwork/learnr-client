import classNames from '@/utils/classNames';

export default function Badge({
	content,
	className,
}: {
	content: string;
	className: string;
}) {
	return (
		<div
			className={classNames(
				className +
					' inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'
			)}
		>
			{content}
		</div>
	);
}
