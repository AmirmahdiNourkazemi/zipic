import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";


import pic2 from "../../assets/images/pic2.png";
import pic3 from "../../assets/images/pic3.png";
import pic5 from "../../assets/images/pic5.png";
import pic6 from "../../assets/images/pic6.png";
export default function SwiperUi() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="flex justify-center items-center flex-col-reverse md:flex-row mt-16 md:mt-24 md:gap-x-20 mb-14">
            <div className="mb-8 md:mb-0">
              <img src={pic5} alt="zipiz"  className="w-80"/>
            </div>
            <div>
              <h3 className="font-kalame-medium text-grey text-base md:text-xl font-bold text-right">
               کاهش حجم فایل{" "}
              </h3>
              <p className="font-kalame-regular max-w-96 text-right mt-3 mb-5 text-xs md:text-sm leading-5 font-light text-gray-700 font-irm">
              کاهش حجم فایل به شما کمک می‌کند تا فایل‌های خود را سریع‌تر ارسال کنید و فضای ذخیره‌سازی بیشتری داشته باشید. با ابزارهای پیشرفته زیپیک می‌توانید به راحتی انواع فایل‌ها را فشرده کنید بدون کاهش کیفیت. دارد.
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex justify-center items-center flex-col-reverse md:flex-row mt-16 md:mt-24 md:gap-x-20 mb-14">
            <div className="mb-8 md:mb-0">
              <img src={pic3} alt="zipiz" className="w-80" />
            </div>
            <div>
              <h3 className="font-kalame-medium text-grey text-base md:text-xl font-bold text-right">
               کاهش حجم عکس{" "}
              </h3>
              <p className="font-kalame-regular max-w-96 text-right mt-3 mb-5 text-xs md:text-sm leading-5 font-light text-gray-700 font-irm">
              آیا فضای زیادی توسط عکس‌های باکیفیت اشغال شده است؟ زیپیک به شما امکان می‌دهد تصاویر خود را با حفظ وضوح کاهش حجم دهید و برای اشتراک‌گذاری یا ذخیره‌سازی آماده کنید.
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex justify-center items-center flex-col-reverse md:flex-row mt-16 md:mt-24 md:gap-x-20 mb-14">
            <div className="mb-8 md:mb-0">
              <img src={pic2} alt="zipiz" className="w-80"/>
            </div>
            <div>
              <h3 className="font-kalame-medium text-grey text-base md:text-xl font-bold text-right">
               کاهش حجم فایل صوتی{" "}
              </h3>
              <p className="font-kalame-regular max-w-96 text-right mt-3 mb-5 text-xs md:text-sm leading-5 font-light text-gray-700 font-irm">
              اگر فایل‌های صوتی بزرگ سرعت انتقال شما را کاهش می‌دهند، زیپیک بهترین راهکار را ارائه می‌دهد. فایل‌های صوتی خود را با کمترین افت کیفیت فشرده کنید و فضای بیشتری ذخیره کنید.
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex justify-center items-center flex-col-reverse md:flex-row mt-16 md:mt-24 md:gap-x-20 mb-14">
            <div className="mb-8 md:mb-0">
              <img src={pic6} alt="zipiz" className="w-80"/>
            </div>
            <div>
              <h3 className="font-kalame-medium text-grey text-base md:text-xl font-bold text-right">
               کاهش حجم فایل زیپ{" "}
              </h3>
              <p className="font-kalame-regular max-w-96 text-right mt-3 mb-5 text-xs md:text-sm leading-5 font-light text-gray-700 font-irm">
              گاهی اوقات حتی فایل‌های زیپ نیز به کاهش حجم نیاز دارند. زیپیک با تکنولوژی پیشرفته خود امکان فشرده‌سازی فایل‌های زیپ را فراهم کرده و شما را در مدیریت بهتر فایل‌ها یاری می‌کند. </p>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
