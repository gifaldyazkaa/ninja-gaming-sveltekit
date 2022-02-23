export async function get({ params }) {
	// Connect to DB and Get Data

	// But for now, we will use dummy data
	const guides = [
		{ id: 1, title: 'Some Title', body: 'Lorem Ipsum' },
		{ id: 2, title: 'Some Title 2', body: 'Lorem Ipsum' },
		{ id: 3, title: 'Some Title 3', body: 'Lorem Ipsum' },
		{ id: 4, title: 'Some Title 4', body: 'Lorem Ipsum' },
		{ id: 5, title: 'Some Title 5', body: 'Lorem Ipsum' }
	];

	const guide = guides.find((g) => g.id == params.id);

	if (guide) {
		return {
			status: 200,
			body: {
				guide
			}
		};
	}
	return {
		status: 404
	};
}
