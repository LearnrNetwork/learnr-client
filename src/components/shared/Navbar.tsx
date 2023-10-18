import { Fragment, useEffect, useState } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import classNames from '@/utils/classNames';
import Avatar from '@/components/user/Avatar';
import Logo from '@/components/shared/Logo';
import Link from 'next/link';

const user = {
	name: 'Chelsea Hagon',
	email: 'chelsea.hagon@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
	{ name: 'Dashboard', href: '#', current: true },
	{ name: 'Calendar', href: '#', current: false },
	{ name: 'Teams', href: '#', current: false },
	{ name: 'Directory', href: '#', current: false },
];
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Log out', href: '/logout' },
];

export default function Navbar() {
	const [loggedIn, setLoggedIn] = useState(false);
	// check if user is logged in
	useEffect(() => {
		let token = localStorage.getItem('token');
		token ? setLoggedIn(true) : setLoggedIn(false);
	}, []);

	return (
		<>
			{/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
			<Popover
				as='header'
				className={({ open }) =>
					classNames(
						open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
						'bg-white shadow-sm border-b lg:static lg:overflow-y-visible'
					)
				}
			>
				{({ open }) => (
					<>
						<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
							<div className='relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12'>
								<div className='flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2'>
									<div className='flex items-center flex-shrink-0'>
										<Logo />
									</div>
								</div>
								<div className='flex-1 min-w-0 md:px-8 lg:px-0 xl:col-span-6'>
									<div className='flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0'>
										<div className='w-full'>
											<label htmlFor='search' className='sr-only'>
												Search
											</label>
											<div className='relative'>
												<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
													<MagnifyingGlassIcon
														className='w-5 h-5 text-gray-400'
														aria-hidden='true'
													/>
												</div>
												<input
													id='search'
													name='search'
													className='block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:border-primary focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm'
													placeholder='Search'
													type='search'
												/>
											</div>
										</div>
									</div>
								</div>
								<div className='flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden'>
									{/* Mobile menu button */}
									<Popover.Button className='inline-flex items-center justify-center p-2 -mx-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'>
										<span className='sr-only'>Open menu</span>
										{open ? (
											<XMarkIcon className='block w-6 h-6' aria-hidden='true' />
										) : (
											<Bars3Icon className='block w-6 h-6' aria-hidden='true' />
										)}
									</Popover.Button>
								</div>
								<div className='hidden lg:flex lg:items-center lg:justify-end xl:col-span-4'>
									{/* Profile dropdown */}
									{loggedIn ? (
										<div className='hidden lg:flex lg:items-center lg:justify-end xl:col-span-4'>
											<a
												href='#'
												className='flex-shrink-0 p-1 ml-5 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
											>
												<span className='sr-only'>View notifications</span>
												<BellIcon className='w-6 h-6' aria-hidden='true' />
											</a>
											<Menu as='div' className='relative flex-shrink-0 ml-5'>
												<div>
													<Menu.Button className='flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
														<span className='sr-only'>Open user menu</span>
														<Avatar src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' />
													</Menu.Button>
												</div>
												<Transition
													as={Fragment}
													enter='transition ease-out duration-100'
													enterFrom='transform opacity-0 scale-95'
													enterTo='transform opacity-100 scale-100'
													leave='transition ease-in duration-75'
													leaveFrom='transform opacity-100 scale-100'
													leaveTo='transform opacity-0 scale-95'
												>
													<Menu.Items className='absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
														{userNavigation.map((item) => (
															<Menu.Item key={item.name}>
																{({ active }) => (
																	<a
																		href={item.href}
																		className={classNames(
																			active ? 'bg-gray-100' : '',
																			'block py-2 px-4 text-sm text-gray-700'
																		)}
																	>
																		{item.name}
																	</a>
																)}
															</Menu.Item>
														))}
													</Menu.Items>
												</Transition>
											</Menu>
										</div>
									) : (
										<div>
											<Link
												href='/login'
												className='inline-flex items-center px-4 py-2 ml-6 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
											>
												Login
											</Link>
											<Link
												href='/signup'
												className='inline-flex items-center px-4 py-2 ml-2 text-sm font-medium border border-transparent rounded-md hover:bg-gray-200'
											>
												Sign up
											</Link>
										</div>
									)}
								</div>
							</div>
						</div>

						<Popover.Panel as='nav' className='lg:hidden' aria-label='Global'>
							<div className='max-w-3xl px-2 pt-2 pb-3 mx-auto space-y-1 sm:px-4'>
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										aria-current={item.current ? 'page' : undefined}
										className={classNames(
											item.current
												? 'bg-gray-100 text-gray-900'
												: 'hover:bg-gray-50',
											'block rounded-md py-2 px-3 text-base font-medium'
										)}
									>
										{item.name}
									</a>
								))}
							</div>
							<div className='pt-4 pb-3 border-t border-gray-200'>
								<div className='flex items-center max-w-3xl px-4 mx-auto sm:px-6'>
									<div className='flex-shrink-0'>
										<img
											className='w-10 h-10 rounded-full'
											src={user.imageUrl}
											alt=''
										/>
									</div>
									<div className='ml-3'>
										<div className='text-base font-medium text-gray-800'>
											{user.name}
										</div>
										<div className='text-sm font-medium text-gray-500'>
											{user.email}
										</div>
									</div>
									<button
										type='button'
										className='flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
									>
										<span className='sr-only'>View notifications</span>
										<BellIcon className='w-6 h-6' aria-hidden='true' />
									</button>
								</div>
								<div className='max-w-3xl px-2 mx-auto mt-3 space-y-1 sm:px-4'>
									{userNavigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className='block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900'
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</Popover.Panel>
					</>
				)}
			</Popover>
		</>
	);
}
