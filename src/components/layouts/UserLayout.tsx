import Navbar from '@/components/shared/Navbar';

export default function UserLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<main className='flex flex-col justify-center w-full'>
			<Navbar />
			<div>
				<div className='w-full'>{children}</div>
			</div>
		</main>
	);
}
