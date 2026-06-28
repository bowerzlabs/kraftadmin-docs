// +page.server.ts
import { getLatestRelease } from '$lib/server/github';

export async function load() {
	return {
		release: await getLatestRelease()
	};
}