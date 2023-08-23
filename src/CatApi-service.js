import axios from 'axios';

const params = {
	key: 'live_QZRRn2PZCmxN6wnKnxDMSV0xXd0arbG658TPyjmorl5ttoPaAgYRFgxM5xLXBuOL',
	baseUrl: 'https://api.thecatapi.com/v1/',
};

async function fetchCatToVote() {
	const url = `${params.baseUrl}images/search?api_key=${params.key}`;
	const response = await axios.get(url);
	const data = response.data;

	return data;
}

async function fetchCats(queryParams) {
	const searchParams = new URLSearchParams({
		api_key: params.key,
		...queryParams,
	});

	const url = `${params.baseUrl}images/search?${searchParams}`;
	console.log(url);
	const response = await axios.get(url);
	const data = response.data;

	return data;
}

export { fetchCatToVote, fetchCats };

//?api_key=${params.key}

//nik live_QZRRn2PZCmxN6wnKnxDMSV0xXd0arbG658TPyjmorl5ttoPaAgYRFgxM5xLXBuOL
//mine live_NWnfZLbkPYQcxH2QRas3VLJcwWuqlqMlONEblVW1tFKVcxyPEb2MVrQMbPuPprjt
