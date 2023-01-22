import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home.page';
import CountryDetail from './pages/CountryDetail.page';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path=':countryId' element={<CountryDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
