
import pic1 from "../../assets/images/pic3.png";


const ImageContent3 = () => {
    return (
      <section className="flex justify-center items-center flex-col-reverse md:flex-row mt-16 md:gap-x-32 ">
        <div className="mb-8 md:mb-0">
          <img src={pic1} alt="zipic" className="w-80"/>
        </div>
        <div>
          <h3 className="font-kalame-medium text-grey text-base md:text-xl font-bold text-right">
          کاهش حجم فایل زیپ{" "}
          </h3>
          <p className="font-kalame-regular max-w-96 text-right mt-6 mb-5 text-xs/6 md:text-sm/6 font-light text-gray-700 font-irm">
          اگر فایل های خود را زیپ کرده اید و کاهش حجم چشمگیری نداشته است، زیپیک با ابزار کاهش حجم فایل به کمک شما آمده تا با فشرده سازی فایل های خود فضای حافظه بیشتر و سرعت بارگذاری بالاتری را تجربه کنید.   
 </p>
        </div>
      </section>
    );
  };
  
  export default ImageContent3;
  