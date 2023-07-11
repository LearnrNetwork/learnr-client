import SignupForm from '@/components/forms/SignupForm';
import UserLayout from '@/components/layouts/UserLayout';

export default function SignupPage() {
	return (
		<UserLayout>
			<div className='w-full'>
				<SignupForm />
			</div>
		</UserLayout>
	);
}
