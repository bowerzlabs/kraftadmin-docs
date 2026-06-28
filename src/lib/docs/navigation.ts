import { docsConfig } from './config';

export interface NavigationItem {
	title: string;
	slug: string;
	group: string;
}

const flatNavigation: NavigationItem[] = docsConfig.sidebar.flatMap((group) =>
	group.items.map((item) => ({
		...item,
		group: group.title
	}))
);

export function getNavigation() {
	return docsConfig.sidebar;
}

export function getFlatNavigation() {
	return flatNavigation;
}

export function getPrevious(slug: string) {
	const index = flatNavigation.findIndex((page) => page.slug === slug);

	return index > 0
		? flatNavigation[index - 1]
		: null;
}

export function getNext(slug: string) {
	const index = flatNavigation.findIndex((page) => page.slug === slug);

	return index >= 0 && index < flatNavigation.length - 1
		? flatNavigation[index + 1]
		: null;
}

export function getBreadcrumbs(slug: string) {
	const page = flatNavigation.find((item) => item.slug === slug);

	if (!page) return [];

	const breadcrumbs = [
		{
			title: 'Docs',
			href: '/docs'
		}
	];

	if (!page.slug.includes('/')) {
		breadcrumbs.push({
			title: page.title,
			href: `/docs/${page.slug}`
		});

		return breadcrumbs;
	}

	const group = docsConfig.sidebar.find((g) =>
		g.items.some((i) => i.slug === slug)
	);

	if (group) {
		breadcrumbs.push({
			title: group.title,
			href: '#'
		});
	}

	breadcrumbs.push({
		title: page.title,
		href: `/docs/${page.slug}`
	});

	return breadcrumbs;
}