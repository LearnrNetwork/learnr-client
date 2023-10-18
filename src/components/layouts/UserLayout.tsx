import Navbar from '@/components/shared/Navbar';

export default function UserLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<main className='relative flex flex-col w-full h-full'>
			<Navbar />
			<div className='relative flex flex-col items-center w-full h-full'>
				{children}
			</div>
		</main>
	);
}
