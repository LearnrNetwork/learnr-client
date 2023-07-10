import { useEffect } from 'react';
import router from 'next/router';

export default function Logout() {
	useEffect(() => {
		localStorage.removeItem('token');
		setTimeout(() => router.push('/'), 1500);
	}, []);

	return <div>Logging out...</div>;
}
