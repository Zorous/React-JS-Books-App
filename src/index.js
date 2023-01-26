import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppProvider } from './context';

import Home from './pages/Home/Home';
import BookList from './components/Booklist/Booklist';
import About from './pages/About/About';
import BookDetails from './components/BookDetails/BookDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="book" element={<BookList />}></Route>
                <Route path="/book/:id" element={<BookDetails />}></Route>
            </Routes>
        </BrowserRouter>
    </AppProvider>
);


