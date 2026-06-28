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
            title: "Guides",
            items: [
                {
                    title: "Routing",
                    slug: "getting-started/routing"
                },
                {
                    title: "Layouts",
                    slug: "getting-started/layouts"
                }
            ]
        },
        {
            title: "API",
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