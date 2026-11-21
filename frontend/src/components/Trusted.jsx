import SectionTitle from "./SectionTitle";

const Trusted = () => {
  return (
    <section>
      <SectionTitle title={"مورد اعتماد برند های پیشرو"} />
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-20 grayscale-100"
            src="../public/image/National_University_of_Skills.png"
            alt="TVU_LOGO"
          />
          <h6>دانشگاه ملی مهارت</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-20 grayscale-100"
            src="../public/image/aminkabir-uni.png"
            alt="TVU_LOGO"
          />
          <h6>دانشگاه صنعتی امیرکبیر</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-20 grayscale-100"
            src="../public/image/behshti-uni.png"
            alt="TVU_LOGO"
          />
          <h6>دانشگاه شهید بهشتی</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-20 grayscale-100"
            src="../public/image/chamran-uni.png"
            alt="TVU_LOGO"
          />
          <h6>دانشگاه شهید چمران</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-20 grayscale-100"
            src="../public/image/ferdosi-uni.png"
            alt="TVU_LOGO"
          />
          <h6>دانشگاه فردوسی</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-20 grayscale-100"
            src="../public/image/khajeh-nasir-uni.png"
            alt="TVU_LOGO"
          />
          <h6>دانشگاه خاجه نصیر</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-20 grayscale-100"
            src="../public/image/techno-esfahan-uni.png"
            alt="TVU_LOGO"
          />
          <h6>دانشگاه صنعتی اصفهان</h6>
        </div>
      </div>
    </section>
  );
};
export default Trusted;
