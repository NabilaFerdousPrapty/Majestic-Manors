import { useEffect } from "react";
import { useState } from "react";
import Agents from "../../components/Agents/Agents";
import { Link } from "react-router-dom";

const Services = () => {
  const [agents,setAgents] = useState([]);
  // console.log(agents);
  useEffect(()=>{
    fetch('/agents.json')
    .then((res)=>res.json())
    .then((data)=>setAgents(data))
  },[])
  return (
    <div className="mt-3">
      <div className="p-6 py-12  bg-[#C9BDAB] text-white rounded-2xl mb-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" /> 5% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free premium subscription. Use code:</span>
              <span className="font-bold text-lg">Majestic</span>
            </div>
            <Link
              to=''
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-[#d19459] text-gray-50 "
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <h2 className="text-center my-8 text-4xl text-[#d19459]">Our Services</h2>
      <section className="bg-gray-100 text-gray-800 lg:p-8 p-2 rounded-xl">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6  sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-[#d19459] text-white rounded-xl">
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  Real Estate Consulting
                </p>
                <p className="leading-snug">
                  Our expert consultants provide personalized guidance and
                  advice to help you make informed decisions about buying,
                  selling, or investing in real estate.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  Property Management
                </p>
                <p className="leading-snug">
                  Let us handle the day-to-day management of your properties,
                  ensuring tenants are satisfied and your investments are
                  well-maintained.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  Investment Opportunities
                </p>
                <p className="leading-snug">
                  Explore a range of investment opportunities in real estate,
                  from residential properties to commercial ventures, tailored
                  to meet your financial goals.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src="https://i.ibb.co/wRryPhQ/services.jpg"
                alt=""
                className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="my-8 bg-gray-100 text-gray-800 lg:p-4 rounded-2xl">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">Discover Majestic Manors</h2>
          <p className="text-gray-600">
            Experience unparalleled luxury and elegance with Majestic Manors'
            exclusive properties.
          </p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-[#d19459]"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Luxury Estates</h3>
            <div className="space-y-1 leading-tight">
              <p>Experience opulent living</p>
              <p>Impeccable design and craftsmanship</p>
              <p>Breathtaking views and amenities</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-[#d19459]"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">
              Professional Guidance
            </h3>
            <div className="space-y-1 leading-tight">
              <p>Expert assistance throughout your property journey</p>
              <p>Customized solutions tailored to your needs</p>
              <p>Unmatched attention to detail and service</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-[#d19459]"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Luxury Lifestyle</h3>
            <div className="space-y-1 leading-tight">
              <p>Indulge in a life of luxury and sophistication</p>
              <p>Exclusive access to elite amenities</p>
              <p>Unparalleled comfort and convenience</p>
            </div>
          </div>

          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-[#d19459]"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Exclusive Amenities</h3>
            <div className="space-y-1 leading-tight">
              <p>Access to world-class amenities</p>
              <p>Designed for luxury living</p>
              <p>Enhance your lifestyle</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-[#d19459]"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">
              Personalized Service
            </h3>
            <div className="space-y-1 leading-tight">
              <p>Dedicated concierge services</p>
              <p>Meet your unique needs</p>
              <p>Exceptional customer care</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-[#d19459]"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">
              Discover Daily Deals
            </h3>
            <div className="space-y-1 leading-tight">
              <p>
                Get notified about exclusive deals and discounts on luxury
              </p>
              <p>
                properties, lifestyle products, and more. Sign up for our
                newsletter today!
              </p>
            
            </div>
          </div>
        </div>
      </section>
      <section className=" my-10">
        <h2 className="text-5xl text-center font-bold">Meet our agents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          agents.map((agent,idx)=><Agents agent={agent} key={idx}></Agents>)
        }
      </div>
      </section>
      <div
        style={{ backgroundImage: "url('https://i.ibb.co/P9213SS/bg.png')" }}
        className="bg-cover bg-center bg-no-repeat h-[500px] md:h-[400px] flex items-center justify-center text-white text-center rounded-2xl mt-6 "
      >
        <div className="  py-10 md:py-8 md:px-8 px-3 bg-[#7a7c81] text-white rounded-bl-3xl  rounded-tr-3xl animate__animated animate__pulse max-w-md">
          <h1 className="text-4xl font-bold py-3">Become a host</h1>
          <p className="pt-2 pb-4">
          Join the elite league of  hosts specializing in luxury villas and unlock a world of exclusive opportunities.
          </p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>123 Majestic Drive, Luxe City, ABC123</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+123-456-7890</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>info@majesticmanors.com</span>
              
            </p>
            <Link to='' className="btn bg-[#5B656F] w-full">Join today</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
