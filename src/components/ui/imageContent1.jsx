
import pic1 from "../../assets/images/pic1.png";


const ImageContent1 = () => {
    return (
      <section className="flex justify-center items-center flex-col-reverse md:flex-row mt-16 md:mt-24 md:gap-x-32 ">
        <div className="mb-8 md:mb-0">
          <img src={pic1} alt="motarjem" className="w-80"/>
        </div>
        <div>
          <h3 className="font-kalame-medium text-grey text-base md:text-xl font-bold text-right">
           تبدیل عکس به پی دی اف{" "}
          </h3>
          <p className="font-kalame-regular max-w-96 text-right mt-6 mb-5 text-xs/6 md:text-sm/6 font-light text-gray-700 font-irm">
          تبدیل عکس به فایل پی دی اف به شما این امکان را می‌دهد که تصاویر خود را به یک فرمت مستند قابل حمل و آسان برای اشتراک گذاری تبدیل کنید. این ابزار به خصوص برای کسانی که نیاز دارند چندین تصویر را در یک فایل پی دی اف جمع‌آوری کنند، مناسب است. </p>
        </div>
      </section>
    );
  };
  
  export default ImageContent1;
  