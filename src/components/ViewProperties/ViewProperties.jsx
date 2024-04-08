import {useParams} from "react-router-dom";
import{ useLoaderData
} from "react-router-dom";


const ViewProperties = () => {
    const {id} = useParams();
    const properties=useLoaderData();
   
    console.log(properties);
    const property = properties.find((property)=>property.id==id);
    const {image,estate_title,segment_name,description,price,status,area,location,facilities}=property;
    return (
      <div className="max-w-full p-4 shadow-md bg-gray-50 text-gray-800">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-800">Photography</a>
        </div>
        <a rel="noopener noreferrer" href="#">See All</a>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img src={image} alt="" className="mx-auto block object-cover object-center w-3/4 rounded-lg h-3/4 bg-gray-500" />
          <div className="flex items-center text-xs">
            <span>6 min ago</span>
          </div>
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold text-indigo-600">{estate_title}</h3>
          </a>
          <p className="leading-snug text-gray-600">{description}</p>
        </div>
      </div>
    </div>
    );
};

export default ViewProperties;