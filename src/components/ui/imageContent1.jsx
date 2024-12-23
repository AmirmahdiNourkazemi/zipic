
import pic1 from "../../assets/images/pic1.png";


const ImageContent1 = () => {
    return (
      <section className="flex justify-center items-center flex-col md:flex-row mt-16 md:gap-x-32 ">
        <div className="mb-8 md:mb-0">
          <img src={pic1} alt="zipic" className="w-80"/>
        </div>
        <div>
          <h3 className="font-kalame-medium text-grey text-base md:text-xl font-bold text-right">
          کاهش حجم عکس{" "}
          </h3>
          <p className="font-kalame-regular max-w-96 text-right mt-6 mb-5 text-xs/6 md:text-sm/6 font-light text-gray-700 font-irm">
          شاید حافظه شما هم با حجم بالای عکس های با کیفیت پر شده باشد، با ابزار کاهش حجم عکس آنلاین زیپیک بدون افت کیفیت و وضوح تصویر میتوانید حجم عکس های خود را کاهش دهید. </p>
        </div>
      </section>
    );
  };
  
  export default ImageContent1;
  