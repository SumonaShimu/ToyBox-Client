import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const TabCard = ({ toy }) => {
    const { name, pictureURL, price, rating } = toy;
    return (
        <div className="card md:w-96 w-full bg-base-100 shadow-xl mx-auto text-center">
            <div className="card-body">
                <h2 className="font-bold text-xl">{name}</h2>
                <StarRating rating={rating}></StarRating>
                <p >$ {price}</p>
            </div>
            <figure className="w-full h-96"><img src={pictureURL} className="w-full h-full"/></figure>
            <Link to='/details' className='btn btn-primary rounded-t-none'>View Details</Link>
        </div>
    );
};

export default TabCard;