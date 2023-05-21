
import Banner from './Banner';
import CategoryTabs from './CategoryTabs';
import Gallery from './Gallery';
import { useEffect, useState } from 'react';
import Sponsored from './Sponsored';
import Us from './Us';


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
            <Us></Us>
            <CategoryTabs allToys={allToys}></CategoryTabs>
            <Sponsored></Sponsored>
        </div>
    );
};

export default Main;