import { getReleases } from '$lib/server/github';

export async function load() {
	return {
		releases: await getReleases()
	};
}