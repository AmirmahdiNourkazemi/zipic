import React from "react";

const VideoContent = () => {
  return (
    <section className="flex justify-center items-center flex-col md:flex-row mt-16 md:mt-24 gap-x-20">
      <div>
        <h3 className="font-kalame-medium text-grey text-base md:text-xl font-bold text-right">
           تبدیل عکس به متن{" "}
        </h3>
        <p className=" font-kalame-regular max-w-96 text-right mt-3 mb-5 text-xs/6 md:text-sm/6 font-light text-gray-700 font-irm">
        با استفاده از تکنولوژی OCR (تشخیص کاراکترهای نوری)، می‌توانید عکس‌های متنی خود را به فرمت‌های قابل ویرایش تبدیل کنید. این ابزار به شما کمک می‌کند تا متنی که از طریق عکس گرفته شده است را استخراج کرده و در مستندات خود استفاده کنید. این روش برای اسکن اسناد و تبدیل آن‌ها به متن بسیار مفید است.
        </p>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <video width="500" height="500" controls>
          <source src="..Videos/video1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default VideoContent;