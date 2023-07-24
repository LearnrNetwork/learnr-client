import localData from '@/utils/localData';
import { createContext, useEffect, useState } from 'react';
import axios from '@/utils/axios';

interface AuthContextProps {
	token: null | string;
	setToken: React.Dispatch<React.SetStateAction<null | string>>;
}

export const AuthContext = createContext<AuthContextProps>({
	token: null,
	setToken: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [token, setToken] = useState<null | string>(null);

	useEffect(() => {
		const token = localData('token');
		if (token) {
			setToken(token);
		}
	}, []);

	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	return (
		<AuthContext.Provider value={{ token, setToken }}>
			{children}
		</AuthContext.Provider>
	);
};
