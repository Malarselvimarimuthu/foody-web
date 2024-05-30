import { lazy } from 'react';

// Importing routes
const Home = lazy(() => import('../Pages/HomePage'));
const OnlineOrder = lazy(() => import('../Pages/OnlineOrder'));
const Cart = lazy(() => import('../Pages/cart'));
export const navigationRouts = [
  {
    name: 'Home',
    path: '/',
    component: <Home />
  },
  {
    name: 'OnlineOrder',
    path: '/onlineorder',
    component: <OnlineOrder />
  },
  {
    name: 'cart',
    path: '/cart',
    component: <Cart />
  }
];

export default {
  navigationRouts
};
