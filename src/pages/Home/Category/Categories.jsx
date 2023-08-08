import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Categories = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11am to 10pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={img1} alt="food category picute" />
          <h3 className="text-4xl -m-16 uppercase text-center text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="food category picute" />
          <h3 className="text-4xl -m-16 uppercase text-center text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="food category picute" />
          <h3 className="text-4xl -m-16 uppercase text-center text-white">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="food category picute" />
          <h3 className="text-4xl -m-16 uppercase text-center text-white">
            Dessert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="food category picute" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
