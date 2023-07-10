import Navbar from '@/components/shared/Navbar';
import Sidebar from '@/components/shared/Sidebar';

export default function SidebarLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<main className='flex flex-col w-full'>
			<Navbar />
			<div className='flex'>
				<aside className='sticky self-start hidden w-1/5 m-6 top-6 lg:block'>
					<Sidebar />
				</aside>
				<div className='w-full mt-6 ml-4 lg:w-4/5'>{children}</div>
			</div>
		</main>
	);
}
