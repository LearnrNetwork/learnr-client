export default function localData(key: string) {
	try {
		const data = localStorage?.getItem(key);
		if (data) {
			return data;
		} else {
			return null;
		}
	} catch (error) {
		console.log(error);
		return null;
	}
}
