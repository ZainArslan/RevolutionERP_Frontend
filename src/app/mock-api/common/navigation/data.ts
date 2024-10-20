import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        subtitle: 'Unique dashboard designs',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [],
    },
    {
        id: 'comapny',
        title: 'Company',
        type: 'basic',
        icon: 'heroicons_outline:building-office',
        link: '/app-admin/company/listing',
    },
    {
        id: 'Screens',
        title: 'Screens',
        type: 'basic',
        icon: 'heroicons_outline:building-office',
        link: '/app-admin/company/screen-listing',
    },
    {
        id: 'dashboards',
        title: 'Dashboards',
        subtitle: 'Unique dashboard designs',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'dashboards.project',
                title: 'Project',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-check',
                link: '/dashboards/project',
            },
            {
                id: 'dashboards.analytics',
                title: 'Analytics',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
        ],
    },
];
