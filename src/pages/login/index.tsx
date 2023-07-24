import { currentUser } from '@/api/auth';
import LoginForm from '@/components/forms/LoginForm';
import UserLayout from '@/components/layouts/UserLayout';
import { AuthContext } from '@/contexts/Auth';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
	const router = useRouter();
	const { token, setToken } = useContext(AuthContext);

	useEffect(() => {
		if (token) {
			currentUser(token)
				.then((res) => {
					if (res.status == 'success') {
						router.push('/');
					}
				})
				.catch((err) => {
					router.push('/login');
				});
		}
	}, [token, router]);

	return (
		<UserLayout>
			<div className='w-full'>
				<LoginForm />
			</div>
		</UserLayout>
	);
}
