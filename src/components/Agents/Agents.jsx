import PropTypes from 'prop-types';
const Agents = ({agent}) => {
    const {name,photo,bio,experience_level,contact}=agent;
  return (
    <div>
      <div className="flex flex-col max-w-sm mx-4 my-3 md:my-6 shadow-lg h-full justify-between">
        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
        <p className="text-xl text-[#d19945] text-center"> Description </p>
          <p className="relative px-6 py-1  italic text-center text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-4 h-4 text-[#d19459]"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
           {bio}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute right-0 w-4 h-4 text-[#d19459]"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </p>
         
        </div>
        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#d19459]  text-gray-50">
          <img
            src={photo}
            alt=""
            className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-300"
          />
          <p className="text-xl font-semibold leading-tight">
            {
                experience_level
            }
          </p>
          <p className="text-sm uppercase">{name}</p>
          <p>Phone :
            {
                contact.phone
            }
          </p>
            <p>Email :
                {
                    contact.email
                }
                </p>
        </div>
      </div>
    </div>
  );
};

export default Agents;
 Agents.propTypes = {
    agent: PropTypes.object.isRequired,
 }