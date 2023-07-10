import Timeline from '@/components/timeline/Timeline';
import UserLayout from '@/components/layouts/UserLayout';
export default function BookPage() {
	return (
		<UserLayout>
			<div className='flex items-center justify-center w-[90%]'>
				<div>
					<Timeline className='p-4 mt-8 bg-white rounded-md' />
				</div>
				<div className='w-3/5 bg-green-500'>Content about the blog</div>
			</div>
		</UserLayout>
	);
}
