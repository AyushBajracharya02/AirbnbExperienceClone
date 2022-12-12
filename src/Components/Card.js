import star from "../Images/star-solid.svg";
import '../Styles/card.css';

export default function Card({props}) {
    return(
        <div className="card">
            <img src={props.img} alt="cardphoto" />
            <div className="ratings">
                <img src={star} alt="rating" />
                <div className="rating1">{props.rating}</div> 
                <div className="rating2">({props.noOfPeople}) • {props.location}</div>
            </div>
            <p>
                {props.description}<br/>
                <span className="price"><b>From ${props.price}</b></span> / person
            </p>
            {props.soldOut && <div className="soldout">Sold Out</div>}
        </div>
    )
}