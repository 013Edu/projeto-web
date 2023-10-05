import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Gallery from './pages/Gallery';
import SectionImages from './pages/SectionImages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/section-images" element={<SectionImages />} />
      </Routes>
    </Router>
  );
}

export default App;
