const URL = 'https://eca2-161-10-244-216.ngrok-free.app/api/';

// eslint-disable-next-line no-undef
export async function ApiService(endPoint: RequestInfo | URL, method: string, token: any, data?: unknown) {
	try {
		const requestHeaders = new Headers();
		requestHeaders.set('Content-Type', 'application/json');
		requestHeaders.set('Accept', 'application/json');
		requestHeaders.set('Access-Control-Allow-Methods', '*')
		requestHeaders.set('Authorization', `Bearer ${token}`);

		const response = await fetch(URL + endPoint, {
			method: method,
			headers: requestHeaders,
			body: JSON.stringify(data)
		});

		const responseData = await response.json();

		if (response.ok) {
			return responseData;
		} else {
			return response.status;
		}
	} catch (error) {
		return { Error: error };
	}
}
