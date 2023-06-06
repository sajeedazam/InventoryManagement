import './NavBar.css';

export default function NavBar({ setCurrentPage }) {
    const handleClick = (page) => {
        setCurrentPage(page);
    };
    
    return (
        <nav className="navbar">
            <ul >            
                <button onClick={() => handleClick('home')}>Home</button>       
                <button onClick={() => handleClick('about')}>About</button>
            </ul>
        </nav>
    );
}
