
import pic1 from "../../assets/images/pic1.png";


const ImageContent1 = () => {
    return (
      <section className="flex justify-center items-center flex-col-reverse md:flex-row mt-16 md:mt-24 md:gap-x-32 ">
        <div className="mb-8 md:mb-0">
          <img src={pic1} alt="motarjem" className="w-80"/>
        </div>
        <div>
          <h3 className="font-kalame-medium text-grey text-base md:text-xl font-bold text-right">
           حذف اشیا از عکس{" "}
          </h3>
          <p className="font-kalame-regular max-w-96 text-right mt-6 mb-5 text-xs/6 md:text-sm/6 font-light text-gray-700 font-irm">
          آیا اشیای ناخواسته در عکس‌های شما وجود دارند؟ با ابزار حذف اشیای کانورتینو، به راحتی می‌توانید این موارد را از تصاویر خود حذف کنید و نتیجه‌ای حرفه‌ای و زیبا به دست آورید، بدون نیاز به مهارت‌های پیشرفته گرافیکی. </p>
        </div>
      </section>
    );
  };
  
  export default ImageContent1;
  