import { BrowserRouter, Route, Routes } from 'react-router-dom';
import authRoutes from './/Router/auth-routes';
import 'bootstrap/dist/css/bootstrap.css';
// import nonAuthRoutes from './Router/non-auth-routes';

function App() {
return (
<>
<BrowserRouter>
<Routes>
<Route >
<Route >
{authRoutes.navigationRouts.map((data) => {
return <Route path={data.path} key={data.name} element={data.component} />;
})}
</Route>
{/* <Route>
{nonAuthRoutes.map((data) => {
return <Route path={data.path} element={data.component} key={data.name} />;
})}
</Route> */}
</Route>
</Routes>
</BrowserRouter>
</>
);
}

export default App;
