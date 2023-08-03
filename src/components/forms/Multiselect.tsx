import { Fragment, KeyboardEventHandler, useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/solid';
import Badge from '@/components/badge/Badge';
import classNames from '../../utils/classNames';

// TODO: Make this more moduler may be
export default function MultiSelect({
	className,
	label,
	values,
	selected,
	onTagSelect,
}: {
	className?: string;
	label: string;
	values: any;
	selected: any;
	onTagSelect: (...args: any) => void;
}) {
	const [query, setQuery] = useState('');

	const filteredValue =
		query === ''
			? values
			: values.filter((value: any) => {
					return value.name.toLowerCase().includes(query.toLowerCase());
			  });

	// keydown event handler

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			if (filteredValue.length > 0) {
				onTagSelect([...selected, filteredValue[0]]);
				setQuery('');
				e.currentTarget.value = '';
			}
		}
	};

	useEffect(() => {
		localStorage.setItem(`${label.toLowerCase()}`, JSON.stringify(selected));
		console.log(selected);
	}, [selected, label]);

	return (
		<Combobox
			as='div'
			className={classNames(className)}
			value={selected}
			onChange={onTagSelect}
			multiple={true}
		>
			{({ open }) => (
				<>
					<Combobox.Label className='block font-medium '>
						{label}
					</Combobox.Label>
					{/* list all the selected values */}
					<div className='flex flex-wrap gap-1 mt-1'>
						{selected.length > 0 &&
							selected.map((value: any) => (
								<Badge
									key={value._id}
									content={value.name}
									onClick={(e: any) => {
										e.stopPropagation();
										onTagSelect(selected.filter((item: any) => item != value));
									}}
								/>
							))}
					</div>

					<div className='relative mt-1'>
						<Combobox.Input
							autoComplete='off'
							placeholder={`Select ${label}`}
							className='relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
							onChange={(e) => setQuery(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
						<Transition
							show={open}
							as={Fragment}
							leave='transition ease-in duration-100'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Combobox.Options className='absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
								{filteredValue.map((value: any) => (
									<Combobox.Option
										key={value._id}
										className={({ active }) =>
											classNames(
												active ? 'text-white bg-indigo-600' : 'text-gray-900 ',
												'cursor-default select-none relative py-2 pl-3 pr-9'
											)
										}
										value={value}
										disabled={selected.includes(value)}
									>
										{({ selected, active }) => (
											<>
												<span
													className={classNames(
														selected ? 'font-semibold' : 'font-normal',
														'block truncate'
													)}
												>
													{value.name}
												</span>

												{selected ? (
													<span
														className={classNames(
															active ? 'text-white' : 'text-indigo-600',
															'absolute inset-y-0 right-0 flex items-center pr-4'
														)}
													>
														<CheckIcon className='w-5 h-5' aria-hidden='true' />
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))}
							</Combobox.Options>
						</Transition>
					</div>
				</>
			)}
		</Combobox>
	);
}
