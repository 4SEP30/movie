import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import IndexPage from './pages/IndexPage.jsx';
import Videos from './pages/Videos.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/videos" element={<Videos />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
