import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
	'live_QZRRn2PZCmxN6wnKnxDMSV0xXd0arbG658TPyjmorl5ttoPaAgYRFgxM5xLXBuOL';

const baseUrl = 'https://api.thecatapi.com/v1/';

async function fetchCatToVote() {
	const url = `${baseUrl}images/search`;
	const response = await axios.get(url);
	const data = response.data;

	return data;
}

async function fetchCats(queryParams) {
	const searchParams = new URLSearchParams({
		...queryParams,
	});

	const url = `${baseUrl}images/search?${searchParams}`;
	const response = await axios.get(url);
	const data = response.data;

	return data;
}

async function fetchBreedDetails(breedId) {
	const url = `${baseUrl}images/search?breed_ids=${breedId}`;
	const response = await axios.get(url);
	const data = response.data;

	return data;
}

export { fetchCatToVote, fetchCats, fetchBreedDetails };

//?api_key=${key}

//nik live_QZRRn2PZCmxN6wnKnxDMSV0xXd0arbG658TPyjmorl5ttoPaAgYRFgxM5xLXBuOL
//mine live_NWnfZLbkPYQcxH2QRas3VLJcwWuqlqMlONEblVW1tFKVcxyPEb2MVrQMbPuPprjt
