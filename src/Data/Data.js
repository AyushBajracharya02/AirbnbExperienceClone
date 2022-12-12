import img1 from '../Images/cards/1.jpg';
import img2 from '../Images/cards/2.JPG';
import img3 from '../Images/cards/3.jpg';

const cardData = [
    {
        img: img1,
        rating: 5,
        noOfPeople: 6,
        location: "USA",
        price: 136,
        description: "Life near the Bahamas",
        soldOut: true
    },
    {
        img: img2,
        rating: 5,
        noOfPeople: 30,
        location: "USA",
        price: 125,
        description: "Romance in paris",
        soldOut: false
    },
    {
        img: img3,
        rating: 4.8,
        noOfPeople: 2,
        location: "USA",
        price: 50,
        description: "Find peace in the hills",
        soldOut: false
    },
]

export default cardData;