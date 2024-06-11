// Importing packages
import { lazy } from 'react';

// Importing routes
const Home = lazy(() => import('../Pages/HomePage'));
const Onlineorder = lazy(() => import('../Pages/OnlineOrder'));
const Search = lazy(() => import('../Pages/Search'));
const Cart = lazy(() => import('../Pages/CartPage'));

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
},
{
    name: 'Search',
    path: '/cart',
    component: <Cart />
}
];

export default {
navigationRouts
};
//route.tsx
