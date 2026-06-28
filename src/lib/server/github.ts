const REPO = 'bowerzlabs/kraftadmin';

export interface GithubRelease {
	tag_name: string;
	name: string;
	body: string;
	html_url: string;
	published_at: string;
	prerelease: boolean;
}

export async function getLatestRelease1(): Promise<GithubRelease> {
	const res = await fetch(
		`https://api.github.com/repos/${REPO}/releases/latest`,
		{
			headers: {
				Accept: 'application/vnd.github+json'
			}
		}
	);

	if (!res.ok) {
		throw new Error('Unable to fetch latest release');
	}

	return res.json();
}

export async function getReleases(): Promise<GithubRelease[]> {
	const res = await fetch(
		`https://api.github.com/repos/${REPO}/releases`
	);

	if (!res.ok) {
		throw new Error('Unable to fetch releases');
	}

	return res.json();
}

export async function getLatestRelease(): Promise<GithubRelease> {
	const res = await fetch(
		`https://api.github.com/repos/${REPO}/releases`,
		{
			headers: {
				Accept: 'application/vnd.github+json'
			}
		}
	);

	if (!res.ok) {
		throw new Error(await res.text());
	}

	const releases: GithubRelease[] = await res.json();

	if (!releases.length) {
		throw new Error('No releases found.');
	}

	return releases[0];
}