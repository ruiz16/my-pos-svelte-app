export const load = async (event) => {
	const name = event.cookies.get("name") ?? "";
	const email = event.cookies.get("email") ?? "";
	return { name, email };
};
