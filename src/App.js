import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

import './App.css';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const Tweets = lazy(() => import('./pages/TweetsPage/TweetsPage'));

function App() {
  return (
    <>
     <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element ={<Navigate to="home"/>} />
          <Route path="home" element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
          </Route>
        </Routes>
     </Suspense>
      </>
  );
}

export default App;
