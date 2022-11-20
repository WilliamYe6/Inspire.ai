import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Form from './pages/Form';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Leaderboard from './pages/Leaderboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Leaderboard />} />
            <Route path='form' element={<Form />} />
            <Route path='upload' element={<Upload />} />
            <Route path='leaderboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>

);

