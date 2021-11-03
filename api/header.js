import axios from "axios";

export default async function authAxios(url, params) {
	const paramsTemp = {
		...params,
		headers: {
			Authorization: process.env.TOKEN,
		},
	};
	try {
		const response = await axios({
			method: paramsTemp.method || "get",
			url: url,
			headers: paramsTemp.headers,
			data: paramsTemp || null,
		});
	} catch (e) {
		console.log(e.response);
		return e.response;
	}
}
