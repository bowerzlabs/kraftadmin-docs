import type { Component } from 'svelte';

export interface DocMetadata {
	title: string;
	description?: string;
}

export interface DocModule {
	default: Component;
	metadata?: DocMetadata;
}

const modules = import.meta.glob<DocModule>(
	[
		'/src/content/docs/**/*.md',
		'/src/content/docs/**/*.svx'
	],
	{
		eager: true
	}
);

const pages = Object.entries(modules).map(([path, module]) => ({
	slug: path
		.replace('/src/content/docs/', '')
		.replace(/\.(md|svx)$/, ''),

	component: module.default,

	metadata: module.metadata ?? {
		title: path
			.split('/')
			.pop()!
			.replace(/\.(md|svx)$/, ''),
		description: ''
	}
}));

export function getPage(slug: string) {
	return pages.find((page) => page.slug === slug);
}

export function getAllPages() {
	return pages;
}

export function pageExists(slug: string) {
	return pages.some((page) => page.slug === slug);
}
