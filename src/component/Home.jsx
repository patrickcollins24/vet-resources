import { Link } from 'react-router-dom'

export default function Home() {




    return (
        <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/About">About</Link>
                </li>
                <li>
                <Link to="/VetReg">VetReg</Link>
                </li>
            </ul>
            </nav>
    
    );
}
