import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";
import Slide4 from "../assets/slide4.jpg";
import Slide5 from "../assets/slide5.jpg";
import SectionTitle from "../components/sectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"10 am to 11:00 am"}
                heading={"Order Online"}
            ></SectionTitle>

            <div className="mb-12">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="relative">
                            <img
                                src={Slide1}
                                alt="Salads"
                                className="w-full h-[350px] object-cover"
                            />
                            <p className="absolute inset-0 flex items-center justify-center text-4xl uppercase text-white font-semibold drop-shadow-lg">
                                Salads
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative">
                            <img
                                src={Slide2}
                                alt="Soup"
                                className="w-full h-[350px] object-cover"
                            />
                            <p className="absolute inset-0 flex items-center justify-center text-4xl uppercase text-white font-semibold drop-shadow-lg">
                                Soup
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative">
                            <img
                                src={Slide3}
                                alt="Pizzas"
                                className="w-full h-[350px] object-cover"
                            />
                            <p className="absolute inset-0 flex items-center justify-center text-4xl uppercase text-white font-semibold drop-shadow-lg">
                                Pizzas
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative">
                            <img
                                src={Slide4}
                                alt="Desserts"
                                className="w-full h-[350px] object-cover"
                            />
                            <p className="absolute inset-0 flex items-center justify-center text-4xl uppercase text-white font-semibold drop-shadow-lg">
                                Desserts
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative">
                            <img
                                src={Slide5}
                                alt="Salads"
                                className="w-full h-[350px] object-cover"
                            />
                            <p className="absolute inset-0 flex items-center justify-center text-4xl uppercase text-white font-semibold drop-shadow-lg">
                                Salads
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;
