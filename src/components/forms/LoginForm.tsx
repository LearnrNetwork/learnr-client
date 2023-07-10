import SocialLogin from '../social/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '@/api/auth';
import router from 'next/router';

export default function LoginForm() {
	// ref for form
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const identity = emailRef.current?.value || '';
		const password = passwordRef.current?.value || '';
		const user = { identity, password };
		login(user)
			.then((data: any) => {
				toast.success('Login successful');
				localStorage.setItem('token', data.token);
				setTimeout(() => router.push('/'), 1500);
			})
			.catch((err) => {
				const error = err.response.data;
				toast.error(error.message);
				console.log(error);
			});
	};

	return (
		<>
			<ToastContainer theme='colored' hideProgressBar={true} autoClose={3000} />
			<div className='flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8'>
				<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
					<div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
						<form
							onSubmit={handleSubmit}
							className='space-y-6'
							action='#'
							method='POST'
						>
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
										ref={emailRef}
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
										ref={passwordRef}
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
							{/* social login buttons */}
							<SocialLogin />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
