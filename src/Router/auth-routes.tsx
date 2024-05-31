import { lazy } from 'react';

// Importing routes
const Home = lazy(() => import('../Pages/HomePage'));
const OnlineOrder = lazy(() => import('../Pages/OnlineOrder'));


export const navigationRouts = [
  {
    name: 'Home',
    path: '/home',
    component: <Home />
  },
  {
    name: 'OnlineOrder',
    path: '/onlineorder',
    component: <OnlineOrder />
  }
];

export default {
  navigationRouts
};
