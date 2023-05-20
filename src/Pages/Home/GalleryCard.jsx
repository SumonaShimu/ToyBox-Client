import { useState } from 'react';
import StarRating from './StarRating';

const GalleryCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="card transform hover:scale-105 transition duration-300 ease-in-out bg-base-100 shadow-xl relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <figure className="w-full h-96">
                <img src={item.pictureURL} className="rounded-xl border w-full h-full" alt={item.name} />
            </figure>

            {isHovered && (
                <div className="w-full h-96 absolute top-0 left-0 z-10 bg-[#07303e8d] p-4 flex items-center justify-center rounded-xl">
                    <div className='w-full text-center text-white text-2xl font-semibold'>
                        <h1>{item.name}</h1>
                        <p>$ {item.price}</p>
                        <small>({item.rating})</small>
                        <p>
                            <StarRating rating={item.rating}/>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryCard;
