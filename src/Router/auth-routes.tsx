// Importing packages
import { lazy } from 'react';

// Importing routes
const Home = lazy(() => import('../Pages/HomePage'));


export const navigationRouts = [
{
name: 'Home',
path: '/',
component: <Home />
}
];

export default {
navigationRouts
};
//route.tsx
