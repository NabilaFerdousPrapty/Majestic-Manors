
import banner from "../../assets/Banner.png";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div className="bg-cover  brightness-75 bg-center h-max rounded-3xl text-white  flex 
        lg:flex-row flex-col lg:p-12 p-8 md:gap-6 gap-2  
        justify-between items-center " style={{ backgroundImage: `linear-gradient(0deg, rgba(28, 33, 43, 0.10) 0%, rgba(28, 33, 43, 0.10) 100%), url(${banner})`,
        }}>
      <div className=" text-center lg:text-left">
        <h2 className="lg:text-5xl text-3xl font-bold py-2 ">Easiest way to find <br /> <span className="text-[#d19945]"> your dream </span>place</h2>
        <p className="lg:text-xl text-base py-3 ">
        Embark on a journey to luxury living beyond compare. <br /> Immerse yourself in the splendor of our distinguished <br /> collection of mansions and penthouses. <br />It's time to <span className="text-[#f59e0b]">claim your throne</span> and <br />reign supreme in elegance and sophistication 
        
        </p>
        <button  className="btn bg-[#d19945] text-white lg:px-7 mt-2">
          Learn More
        </button>
      </div>
      <div className="w-[300px]">
       <h1 className="text-center font-semibold text-[#d19945] text-2xl lg:py-2 mt-1 animate__animated animate__bounce">Our Estates</h1>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={
          {
            "clickable": true
          }
        }
        loop={true}
        navigation={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/t8YfypW/Como-Residences-Penthouse-Nakheel-3.jpg" className="w-[300px] h-[300px] rounded" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/74KyS0m/1L.jpg" className="w-[300px] h-[300px] rounded"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/j8C9HB9/TRV-Main-Villa-One-Infinity-Pools-Evening.jpg" className="w-[300px] h-[300px] rounded" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/CscVWM5/luxury-villa.jpg" className="w-[300px] h-[300px] rounded" />
        </SwiperSlide>
      </Swiper>
   
      </div>
    </div>
    );
};

export default Banner;