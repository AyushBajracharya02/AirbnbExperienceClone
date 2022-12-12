import '../Styles/photos.css'
import photo1 from '../Images/aethetics/1.jpg';
import photo2 from '../Images/aethetics/2.jpg';
import photo3 from '../Images/aethetics/3.jpg';
import photo4 from '../Images/aethetics/4.jpg';
import photo5 from '../Images/aethetics/5.jpg';
import photo6 from '../Images/aethetics/6.jpg';
import photo7 from '../Images/aethetics/7.jpg';
import photo8 from '../Images/aethetics/8.jpg';
import photo9 from '../Images/aethetics/9.jpg';

export default function Photos() {
    return (
        <div className="photos">
            <div className="photos-1">
                <img src={photo1} alt="photo1" />
            </div>
            <div className="photos-2">
                <img src={photo2} alt="photo2" />
                <img src={photo3} alt="photo3" />
            </div>
            <div className="photos-3">
                <img src={photo4} alt="photo4" />
                <img src={photo5} alt="photo5" />
            </div>
            <div className="photos-4">
                <img src={photo6} alt="photo6" />
                <img src={photo7} alt="photo7" />
            </div>
            <div className="photos-5">
                <img src={photo8} alt="photo8" className="photo8" />
                <img src={photo9} alt="photo9" />
            </div>
        </div>
    )
}