import { login } from '@/api/auth';
import LoginForm from '@/components/forms/LoginForm';
import UserLayout from '@/components/layouts/UserLayout';
import { useEffect } from 'react';
import router from 'next/router';

export default function LoginPage() {
	// check if user is logged in
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			router.push('/');
		}
	}, []);

	return (
		<UserLayout>
			<div className='w-full'>
				<LoginForm />
			</div>
		</UserLayout>
	);
}
