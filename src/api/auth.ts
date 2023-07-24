import axios from '@/utils/axios';

interface LoginResponse {
	status: string;
	token: string;
	message: string;
	user: {
		_id: string;
		firstname: string;
		lastname: string;
		username: string;
		email: string;
		createdAt: string;
		updatedAt: string;
	};
}

export interface ErrorResponse {
	message: string;
	status: number;
}

// login api
export const login = async ({
	identity,
	password,
}: {
	identity: string;
	password: string;
}) => {
	const { data } = await axios.post<LoginResponse | ErrorResponse>(
		'http://localhost:8000/api/v1/auth/login',
		{
			identity,
			password,
		}
	);
	return data;
};

// register api
export const register = async (
	firstname: string,
	lastname: string,
	username: string,
	email: string,
	password: string
) => {
	const { data }: { data: LoginResponse | ErrorResponse } = await axios.post(
		'/api/auth/register',
		{
			firstname,
			lastname,
			username,
			email,
			password,
		}
	);
	return data;
};

// valid user
export const currentUser = async (token: string | null) => {
	const { data }: any = await axios.post(
		'http://localhost:8000/api/v1/auth/current-user'
	);
	return data;
};

// logout
export const logout = async () => {
	const { data }: { data: LoginResponse | ErrorResponse } = await axios.post(
		'http://localhost:8000/api/v1/auth/logout',
		{}
	);
	return data;
};
