import SocialLogin from '../social/SocialLogin';

export default function SignupForm() {
	return (
		<>
			<div className='flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8'>
				<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
					<div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
						<form className='space-y-6' action='#' method='POST'>
							<div className='md:block lg:flex lg:gap-2'>
								{/* firstname */}
								<div>
									<label
										htmlFor='firstname'
										className='text-sm font-medium text-gray-700'
									>
										Firstname
									</label>
									<div className='mt-1'>
										<input
											id='firstname'
											name='firstname'
											type='text'
											autoComplete='firstname'
											required
											className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-primary focus:outline-none focus:ring-primary sm:text-sm'
										/>
									</div>
								</div>
								{/* lastname */}
								<div>
									<label
										htmlFor='lastname'
										className='text-sm font-medium text-gray-700'
									>
										Lastname
									</label>
									<div className='mt-1'>
										<input
											id='lastname'
											name='lastname'
											type='text'
											autoComplete='lastname'
											required
											className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-primary focus:outline-none focus:ring-primary sm:text-sm'
										/>
									</div>
								</div>
							</div>
							{/* username */}
							<div>
								<label
									htmlFor='username'
									className='block text-sm font-medium text-gray-700'
								>
									Username
								</label>
								<div className='mt-1'>
									<input
										id='username'
										name='username'
										type='text'
										autoComplete='username'
										required
										className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-primary focus:outline-none focus:ring-primary sm:text-sm'
									/>
								</div>
							</div>
							{/* email */}
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700'
								>
									Email address
								</label>
								<div className='mt-1'>
									<input
										id='email'
										name='email'
										type='email'
										autoComplete='email'
										required
										className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-primary focus:outline-none focus:ring-primary sm:text-sm'
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor='password'
									className='block text-sm font-medium text-gray-700'
								>
									Password
								</label>
								<div className='mt-1'>
									<input
										id='password'
										name='password'
										type='password'
										autoComplete='current-password'
										required
										className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-primary focus:outline-none focus:ring-primary sm:text-sm'
									/>
								</div>
							</div>

							<div className='flex items-center justify-between'>
								<div className='flex items-center'>
									<input
										id='remember-me'
										name='remember-me'
										type='checkbox'
										className='w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary'
									/>
									<label
										htmlFor='remember-me'
										className='block ml-2 text-sm text-gray-900'
									>
										Remember me
									</label>
								</div>

								<div className='text-sm'>
									<a
										href='#'
										className='font-medium text-primary hover:text-primary'
									>
										Forgot your password?
									</a>
								</div>
							</div>

							<div>
								<button
									type='submit'
									className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
								>
									Sign in
								</button>
							</div>
						</form>

						<div className='mt-6'>
							<div className='relative'>
								<div className='absolute inset-0 flex items-center'>
									<div className='w-full border-t border-gray-300' />
								</div>
								<div className='relative flex justify-center text-sm'>
									<span className='px-2 text-gray-500 bg-white'>
										Or continue with
									</span>
								</div>
							</div>
							{/* Social Login */}
							<SocialLogin />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
