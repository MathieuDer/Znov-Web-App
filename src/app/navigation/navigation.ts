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
        
        
    },

    {
        id       : 'school',
        title    : 'Administration',
        type     : 'group',
        icon: 'school',
        children : [
            {
                id       : 'dashboardAdmin',
                title    : 'Dashboard Eleve',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboards-eleves',
            },
            {
                id       : 'dashboardSalle',
                title    : 'Dashboard Salle',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboards-salles',
            },
            {
                id       : 'dashboardNoteAbs',
                title    : 'Dashboard note et absence',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboards-noteabs',
            }
        ],
        
        
    }
];
