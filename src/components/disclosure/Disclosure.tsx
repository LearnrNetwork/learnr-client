import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function MyDisclosure({ content }: { content: string }) {
	return (
		<Disclosure>
			{({ open }) => (
				/* Use the `open` state to conditionally change the direction of an icon. */
				<>
					<Disclosure.Button>
						{content}
						<ChevronRightIcon className={open ? 'rotate-90 transform' : ''} />
					</Disclosure.Button>
					<Disclosure.Panel>No</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
