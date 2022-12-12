import '../Styles/navbar.css';
import airbnb from '../Images/airbnb.svg';

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb} alt='airbnb' className="logo" />
            <div className="brand">airbnb</div>
        </nav>
    )
}