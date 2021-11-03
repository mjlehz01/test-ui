import authAxios from "/api/header";

export async function getOrdersApi() {
	try {
		const url = `${process.env.URL_BACKEND}orders`;
		const response = await authAxios(url);
		return response;
	} catch (e) {
		return e;
	}
}
