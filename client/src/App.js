import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import { useState } from 'react';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        if (currentPage === 'home') {
            return <Home />;
        } else if (currentPage === 'about') {
            return <About />;
        }
    };
   
    return (
        <div>
            <NavBar setCurrentPage={setCurrentPage} />
            {renderPage()}
        </div>
    );
}