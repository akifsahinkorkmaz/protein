import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Result from './Pages/Results';


function App() {
  return (
    <div className="App overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:weight" element={<Result />}/>
      </Routes>
    </div>
  );  
}

export default App;
