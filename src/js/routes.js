import Dashboard from './views/Dashboard.vue';
import Publications from './views/Publications.vue';

export default [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        icon: 'home'
    },
    {
        path: '/publications',
        name: 'Publications',
        component: Publications,
        icon: 'newspaper'
    }
];
