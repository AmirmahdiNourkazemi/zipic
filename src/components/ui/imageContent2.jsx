
import pic5 from "../../assets/images/pic5.png";


const ImageContent2 = () => {
    return (
      <section className="flex justify-center items-center flex-col-reverse md:flex-row mt-16  md:gap-x-32 ">
        <div>
          <h3 className="font-kalame-medium text-grey text-base md:text-xl font-bold text-right">
           
          کاهش حجم فایل صوتی{" "}
          </h3>
          <p className="font-kalame-regular max-w-96 text-right mt-6 mb-5 text-xs/6 md:text-sm/6 font-light text-gray-700 font-irm">
          حجم فایل صوتی یا آهنگ شما زیاد است؟ با کاهش حجم فایل صوتی میتوانید حجم آهنگ ها و هر فرمت صوتی را بدون افت کیفیت صدا کاهش دهید تا به راحتی بتوانید فایل های صوتی خود را به اشتراک بگذارید.  
</p>
        </div>
        <div className="mb-8 md:mb-0">
          <img src={pic5} alt="zipic" className="w-80"/>
        </div>
        
      </section>
    );
  };
  
  export default ImageContent2;
  