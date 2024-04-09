import PropTypes from "prop-types";
import { FaSalesforce } from "react-icons/fa6";
import { IoPricetagsSharp } from "react-icons/io5";
import { FaHotel } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdFeaturedPlayList } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleEstate = ({ estate }) => {
  const {
    image,
    estate_title,
    description,
    segment_name,
    status,
    price,
    location,
    area,
    facilities,
    id
  } = estate;
 
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-3xl  bg-gray-50 text-gray-800 shadow-xl">
        <div>
          <img
            src={image}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 rounded-lg"
          />
          <h2 className="mb-1 text-xl font-semibold">{estate_title}</h2>
          <p className="text-sm text-gray-600">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        </div>
        <div></div>
        <div className="flex flex-wrap justify-between">
          <p className="border-2 bg-[#ddc39d] p-2 rounded-2xl flex  items-center">
            <IoPricetagsSharp />
            {price}
          </p>
          <p className="border-2 bg-[#ddc39d] px-4 p-2 rounded-2xl flex  items-center">
             Area:{area}
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          <p className="flex items-center gap-1">
            <FaHotel />
            {segment_name}
          </p>
          <p className="flex items-center">
          <FaSalesforce /> {status} 
          </p>
        </div>
        <p className="text-center border border-[#C9BDAB] px-4 p-2 rounded-2xl flex justify-center items-center">
           <FaLocationCrosshairs />
            {location}
        </p>
        <p className="text-center text-[#d19945]">Top Facilities:</p>

        <div className="grid grid-cols-2 gap-3">
          {facilities.map((facility, idx) => (
            <p
              className="flex items-center gap-2"
              facility={facility}
              key={idx}
            >
              <MdFeaturedPlayList />
              {facility}
            </p>
          ))}
        </div>
        <Link to={`/property/${id}`}  className="btn bg-[#d19945] mt-4 w-4/6 mx-auto">
          View Property
        </Link>
      </div>
    </div>
  );
};

export default SingleEstate;
SingleEstate.propTypes = {
  estate: PropTypes.object.isRequired,
};
