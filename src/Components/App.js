import "../Styles/app.css";
import Navbar from './Navbar';
import Photos from './Photos'
import Info from './Info';
import Card from './Card';
import cardData from '../Data/Data';

export default function App() {
    const cards = cardData.map((data)=>{
        return <Card
                props={data} />
    })
    return (
        <div className="app">
            <Navbar />
            <Photos />
            <Info />
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}