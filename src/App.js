import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
     
          <Route path="home" element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <ToastContainer theme={"colored"}/>
     </Suspense>
      </>
  );
}

export default App;
