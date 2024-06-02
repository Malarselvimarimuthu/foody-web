import { Outlet } from 'react-router-dom';
import { Header } from '../Header/index';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}