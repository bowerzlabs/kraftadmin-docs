export interface Update {
  version: string;
  date: string;
  title: string;
  description: string;
  features: string[];
}

export const updates: Update[] = [
  {
    version: '0.1.28-beta',
    date: 'August 2, 2026',
    title: 'Bulk Actions, Data Export & Resource Metrics',
    description:
      'Adds bulk operations for managing multiple records at once, flexible data export, and the first wave of resource-level metrics and aggregations.',
    features: [
      'Bulk delete with per-record success/failure reporting',
      'Bulk export to JSON, CSV, and XML',
      'Export selected records or the entire resource in one click',
      'Row selection with select-all support in resource tables',
      'Resource count, sum, and average aggregations',
      'Growth and trend tracking metrics'
    ]
  },
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