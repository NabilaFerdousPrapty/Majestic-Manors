import { useEffect, useState } from "react";
import SingleEstate from './../SingleEstate/SingleEstate';


const Estates = () => {
    const [estates,setEstates] = useState([]);
    useEffect(()=>{
        fetch('/realEstateProperty.json')
        .then(response=>response.json())
        .then(data=>{
            // console.log(data);
            setEstates(data)
        })
    },[])
    return (
        <div className="mt-10 text-center">
            <h2 className="text-4xl font-bold py-5 text-[#d19945] animate__animated animate__tada">Explore Our Exclusive Estates</h2>
            <p className="text-[#5B656F]">Discover unparalleled luxury and elegance with our curated collection of exquisite estates. Each property is meticulously crafted to offer the epitome of modern living, set amidst the backdrop of scenic landscapes and vibrant cityscapes. Whether you seek a serene beachfront retreat, a majestic mountain hideaway, or an opulent urban sanctuary, our estates promise to exceed your expectations.</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3  mt-5">
              {
                estates.map(estate=><SingleEstate estate={estate} key={estate.id}></SingleEstate>)
              }
            </div>
        </div>
    );
};

export default Estates;