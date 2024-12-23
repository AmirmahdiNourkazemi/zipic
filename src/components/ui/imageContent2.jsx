
import pic4 from "../../assets/images/pic4.png";


const ImageContent2 = () => {
    return (
      <section className="flex justify-center items-center flex-col-reverse md:flex-row mt-16 md:mt-24 md:gap-x-32 ">
        <div>
          <h3 className="font-kalame-medium text-grey text-base md:text-xl font-bold text-right">
           
          تبدیل عکس وب{" "}
          </h3>
          <p className="font-kalame-regular max-w-96 text-right mt-6 mb-5 text-xs/6 md:text-sm/6 font-light text-gray-700 font-irm">
          با ابزارهای پیشرفته کانورتینو، می‌توانید تصاویر وب را به فرمت‌های موردنیاز خود تبدیل کنید. این قابلیت به شما کمک می‌کند تا عکس‌های بهینه شده برای وب‌سایت خود داشته باشید که سرعت بارگذاری بالاتری داشته باشند و فضای کمتری اشغال کنند.</p>
        </div>
        <div className="mb-8 md:mb-0">
          <img src={pic4} alt="zipic" className="w-80"/>
        </div>
        
      </section>
    );
  };
  
  export default ImageContent2;
  