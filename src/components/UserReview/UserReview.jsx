import PropTypes from 'prop-types';
import { FaStarHalfAlt } from "react-icons/fa";
const UserReview = ({ review }) => {
  const {
    user_name,
    user_image,
    brought_estate_title,
    segment_name,
    price,
    good_side,
    bad_side,
    rating,
    location,
    estate_image,
  } = review;

  return (
    <div className='border-2 border-[#d19945] rounded-2xl lg:mb-7 mb-3 bg-gray-50 sh'>
      <section className="p-6">
        <div className="container mx-auto">
          <div className='flex md:flex-row-reverse flex-col justify-between items-center pb-4'>
            <h1 className="text-2xl font-semibold text-[#d19945] text-center">
             <span className='text-gray-800 px-1'>Hey there I'm </span> {user_name}
            </h1>
            <img src={user_image} alt="" className='w-[100px] h-[100px] rounded-lg' />
          </div>
          <h2 className="lg:text-3xl text-2xl text-center text-[#d19945] py-4">The Property I am reviewing</h2>
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className='flex flex-col gap-2 text-center md:text-left'>
              <p className="text-[#d19945] ">location: <span className='text-gray-800'>{location}</span></p>
              <p className="text-[#d19945]">Segment name:<span className='text-gray-800'>{segment_name}</span></p>
              <p className="text-[#d19945]">The estate title:<span className='text-gray-800'>{brought_estate_title}</span></p>
              <p className="text-[#d19945]">My brought Price:<span className='text-gray-800'>{price}</span></p>
              <p className="text-[#d19945]">The good aspects:<span className='text-gray-800'>{good_side}</span></p>
              <p className="text-[#d19945]">The not so good aspects:<span className='text-gray-800'>{bad_side}</span> </p>
              <p className="text-[#d19945] flex gap-3">My rating:<span className='text-gray-800 flex items-center'>{rating}<FaStarHalfAlt /></span> </p>
            </div>
            <img src={estate_image} alt="" className='w-[260px] h-[260px] rounded-xl' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserReview;

UserReview.propTypes = {
  review: PropTypes.object.isRequired,
};
