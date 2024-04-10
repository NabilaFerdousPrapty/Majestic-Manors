import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import LocationMap from "../LocationMap/LocationMap";
import { toast } from "react-hot-toast";

const ViewProperties = () => {
  const { id } = useParams();
  const properties = useLoaderData();

  // console.log(properties);
  const property = properties.find((property) => property.id == id);
  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    coordinates,
  } = property;
  return (
    <>
      <div className="max-w-full p-4 shadow-md bg-gray-50 text-gray-800">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a className="mb-0 capitalize text-gray-800">{segment_name}</a>
          </div>
          <a>Total area:{area}</a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="mx-auto block object-cover object-center md:w-3/4 rounded-lg md:h-3/4 bg-gray-500"
            />
            <div className="flex items-center text-xs justify-center">
              <p className="text-[#d19945]">{location}</p>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-center text-[#d19945]">
                {estate_title}
              </h3>
            </a>
            <p className="leading-snug text-gray-600">{description}</p>
            <div className="flex md:flex-row flex-col items-center justify-between gap-1">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-center justify-between">
                  <h2 className="bg-[#ddc39d] px-2 py-1 rounded-xl">
                    #{facility}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center mt-5 gap-5">
          <p className="rounded-lg  text-[#d19945] px-2 py-1 justify-center border-2 border-[#d19945]">
            For {status} now
          </p>
          <p className="text-2xl font-bold text-[#d19945]">{price} only</p>
          <button
            onClick={() => {
              toast.success("Congratulations. Your Booking is successful.");
              toast.success("You will get a confirmation mail soon. Thank you for your booking");
            }}
            className="btn bg-[#d19945]"
          >
            Book Now
          </button>
        </div>
      </div>
      <h2 className="text-center text-4xl font-bold text-[#d19945] pt-9">
        Get The Specific Location By Map{" "}
      </h2>
      <p className="text-center pb-8 pt-3">
        We are here to help you to reach the specific location of the
        property.Still you have any query then contact us.
      </p>
      <div className="md:h-screen w-full px-1 h-3/6">
        <LocationMap coordinates={coordinates} location={location} />
      </div>
    </>
  );
};

export default ViewProperties;
