import Link from 'next/link';

export default function Logo() {
	return (
		<Link href='/' passHref>
			<h1 className='text-3xl font-semibold'>
				Learnr<span className='text-primary'>.</span>
			</h1>
		</Link>
	);
}
