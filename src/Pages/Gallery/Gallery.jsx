import { useEffect, useState } from "react";
import UserReview from "../../components/UserReview/UserReview";

const Gallery = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <div>
      <div className="mt-8 ">
        <h2 className="text-5xl text-center text-[#d19945] my-4">
          Get to know what others say about us
        </h2>
        <div className="grid lg:grid-cols-2  grid-cols-1 gap-3">
          {reviews.map((review, idx) => (
            <UserReview key={idx} review={review}></UserReview>
          ))}
        </div>
      </div>
      <h1 className="text-3xl text-center text-[#d19945] my-5">Hall of Fame</h1>
      <p className="text-center">
        Our best collections of images from our gallery
        <br />
        You can also upload your own images to our gallery <br />
        and get featured here
      </p>
      <section className=" bg-gray-100 text-gray-900 mt-6 rounded-md">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.ibb.co/KD0kqJS/r6.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/L9jXS18/4.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/TrVrHpy/6.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/ZKVZHPB/r2.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/sspfKcZ/r4.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/zRsCXKY/9.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/LNXFgWf/r1.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/PmDJCXd/1.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/7C7S8VQ/7.jpg"
          />
          <img
            src="https://i.ibb.co/Wg6DGWM/3.png"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </section>
      <div className="flex justify-center items-center mt-6">
        <div className="btn bg-[#d19945]">Upload</div>
      </div>
    </div>
  );
};

export default Gallery;
