import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Default Navigation',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    },
    {
        id: 'comapny',
        title: 'Company',
        type: 'basic',
        icon: 'heroicons_outline:building-office',
        link: '/app-admin/company'
    }
];
