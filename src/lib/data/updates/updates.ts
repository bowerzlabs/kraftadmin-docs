export interface Update {
	version: string;
	date: string;
	title: string;
	description: string;
	features: string[];
}

export const updates: Update[] = [
	{
		version: '0.1.27-beta',
		date: 'July 21, 2026',
		title: 'KraftAdmin enters beta',
		description:
			'KraftAdmin is now available as an early beta for developers building Spring Boot applications.',
		features: [
			'Generated administration interfaces',
			'CRUD operations',
			'Search, sorting and filtering',
			'Relationship handling',
			'File upload support',
			'Spring Security integration',
			'Dark mode'
		]
	}
];