import NavBar from './NavBar';
import Home from './Home';
import About from './About';
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