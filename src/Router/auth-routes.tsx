// Importing packages
import { lazy } from 'react';

// Importing routes
const Home = lazy(() => import('../Pages/HomePage'));
const Onlineorder = lazy(() => import('../Pages/Onlineorder'));


export const navigationRouts = [
{
name: 'Home',
path: '/',
component: <Home />
},
{
name: 'Onlineorder',
path: '/onlineorder',
component: <Onlineorder />
}
];

export default {
navigationRouts
};
//route.tsx
