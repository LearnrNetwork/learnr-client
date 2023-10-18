import UserLayout from '@/components/layouts/UserLayout';
import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<UserLayout>
			<div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
				<div className='flex flex-col items-center justify-center h-full'>
					<div>
						<h3 className='font-semibold text-primary'>404</h3>
					</div>
					<h1 className='text-4xl font-semibold text-center'>Page Not Found</h1>
					<div className='relative mt-8'>
						<button className='inline-block px-8 py-2 font-medium text-white rounded-lg bg-primary hover:bg-blue-600'>
							<Link href='/'>Go to Home</Link>
						</button>
					</div>
				</div>
			</div>
		</UserLayout>
	);
}
