// Importing packages
import { lazy } from 'react';

// Importing routes
const Home = lazy(() => import('../Pages/HomePage'));
const Onlineorder = lazy(() => import('../Pages/OnlineOrder'));
const Search = lazy(() => import('../Pages/Search'));

export const navigationRouts = [
{
name: 'Home',
path: '/home',
component: <Home />
},
{
name: 'Onlineorder',
path: '/onlineorder',
component: <Onlineorder />
},
{
    name: 'Search',
    path: '/search',
    component: <Search />
}
];

export default {
navigationRouts
};
//route.tsx
