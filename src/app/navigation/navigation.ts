import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'student',
        title    : 'Accueil',
        type     : 'group',
        icon: 'apps',
        children : [
            {
                id       : 'dashboard',
                title    : 'Dashboard',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboard',
            },
            {
                id       : 'dashboardAdmin',
                title    : 'DashboardAdmin',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboardsAdmin',
            }
        ]
    },
    {
        id       : 'student',
        title    : 'Étudiant',
        type     : 'group',
        icon: 'apps',
        children : [
            {
                id       : 'profile',
                title    : 'Profil',
                type     : 'item',
                icon     : 'person',
                url      : '/profile',
            },
            {
                id       : 'calendar',
                title    : 'Planning',
                type     : 'item',
                icon     : 'today',
                url      : '/calendar',
            }
        ]
    },
    {
        id       : 'school',
        title    : 'École',
        type     : 'group',
        icon: 'school',
        children : [
            {
                id       : 'contact',
                title    : 'Contact',
                type     : 'item',
                icon     : 'account_box',
                url      : '/contact',
            },
            {
                id       : 'external',
                title    : 'Liens',
                type     : 'item',
                icon     : 'link',
                url      : '/external',
            },
            {
                id       : 'reglement',
                title    : 'Règlement',
                type     : 'item',
                icon     : 'help',
                url      : '/reglement',
            }
        ],
        
        
    }
];
