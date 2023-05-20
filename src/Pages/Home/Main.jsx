
import Banner from './Banner';
import CategoryTabs from './CategoryTabs';
import Gallery from './Gallery';
import { useEffect, useState } from 'react';

const Main = () => {
    const [allToys,setToys]=useState([])
    useEffect(()=>{
        fetch('https://toybox-server.vercel.app/alltoys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <Gallery allToys={allToys}></Gallery>
            <CategoryTabs allToys={allToys}></CategoryTabs>
        </div>
    );
};

export default Main;