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
				<div className='flex flex-col items-center w-full'>{children}</div>
			</div>
		</main>
	);
}
