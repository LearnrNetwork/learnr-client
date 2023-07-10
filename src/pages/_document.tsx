import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html className='w-full h-full' lang='en'>
			<Head />
			<body className='w-full h-full text-gray-900 bg-gray-200'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
