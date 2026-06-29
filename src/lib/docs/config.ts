export interface DocsConfig {
    title: string;
    description: string;
    repository?: string;
    editBaseUrl?: string;
    sidebar: SidebarGroup[];
}

export interface SidebarGroup {
    title: string;
    items: SidebarItem[];
}

export interface SidebarItem {
    title: string;
    slug: string;
}

export const docsConfig: DocsConfig = {
    title: "Documentation",

    description:
        "Project documentation powered by SvelteKit and MDsveX.",

    repository: "https://github.com/your-org/your-project",

    editBaseUrl:
        "https://github.com/your-org/your-project/edit/main/src/content/docs",

    sidebar: [
        {
            title: "Getting Started",
            items: [
              
                {
                    title: "Introduction",
                    slug: "introduction"
                },
                {
                    title: "Installation",
                    slug: "installation"
                },
                {
                    title: "Configuration",
                    slug: "configuration"
                },
            ]
        },
        {
           title: "Appearance",
           items: [
             {
                title: "Tables",
                slug: "appearance/tables"
             },
             {
                title: "Columns",
                slug: "appearance/columns"
             }
           ]
        },
        {
	title: "Fields",
	items: [
		{
			title: "Overview",
			slug: "fields/overview"
		},
		{
			title: "Text Inputs",
			slug: "fields/text"
		},
		{
			title: "Numeric Inputs",
			slug: "fields/number"
		},
		{
			title: "Date & Time",
			slug: "fields/datetime"
		},
		{
			title: "Selection Controls",
			slug: "fields/selection"
		},
		{
			title: "Media & Files",
			slug: "fields/media"
		},
		{
			title: "Relationships",
			slug: "fields/relationships"
		},
		{
			title: "Structured Data",
			slug: "fields/structured-data"
		},
		{
			title: "Rich Text",
			slug: "fields/wysiwyg"
		},
		{
			title: "Special Fields",
			slug: "fields/special"
		}
	]
        },
        {
            title: "Security",
            items: [
                {
                    title: "Overview",
                    slug: "getting-started/overview"
                },
                {
                    title: "Layouts",
                    slug: "getting-started/layouts"
                }
            ]
        },
        {
           title: "Files",
           items: [
            {
                title: "Overview",
                slug: "files/overview"
            }
           ]
        },
        {
            title: "Advanced",
            items: [
                {
                    title: "Tables",
                    slug: "tables"
                },
                {
                    title: "Forms",
                    slug: "api/forms"
                }
            ]
        }
    ]
};