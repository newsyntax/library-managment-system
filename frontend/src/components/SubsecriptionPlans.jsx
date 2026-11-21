import SectionTitle from "../components/SectionTitle";

const SubsecriptionPlans = () => {
  return (
    <section>
      <SectionTitle title={"طرح های اشتراک"} />
      <div className="grid grid-cols-3 gap-24">
        <div className="flex flex-col gap-4 ">
          <h4 style={{ fontFamily: "black" }} className="text-xl">
            اشتراک سالانه
          </h4>
          <ul>
            <li>اعتبار به مدت یکسال</li>
            <li>تخفیف های دوره‌ای</li>
            <li>بهینه سازی عملکرد</li>
            <li>پشتیبانی رایگان</li>
            <li>میزبانی نیم بها</li>
          </ul>
          <button className="px-4 py-2 bg-neutral-950 text-white rounded-lg">
            مشاهده
          </button>
        </div>
        <div className="flex flex-col gap-4 ">
          <h4 style={{ fontFamily: "black" }} className="text-xl">
            اشتراک سالانه
          </h4>
          <ul>
            <li>اعتبار به مدت یکسال</li>
            <li>تخفیف های دوره‌ای</li>
            <li>بهینه سازی عملکرد</li>
            <li>پشتیبانی رایگان</li>
            <li>میزبانی نیم بها</li>
          </ul>
          <button className="px-4 py-2 bg-neutral-950 text-white rounded-lg">
            مشاهده
          </button>
        </div>
        <div className="flex flex-col gap-4 ">
          <h4 style={{ fontFamily: "black" }} className="text-xl">
            اشتراک سالانه
          </h4>
          <ul>
            <li>اعتبار به مدت یکسال</li>
            <li>تخفیف های دوره‌ای</li>
            <li>بهینه سازی عملکرد</li>
            <li>پشتیبانی رایگان</li>
            <li>میزبانی نیم بها</li>
          </ul>
          <button className="px-4 py-2 bg-neutral-950 text-white rounded-lg">
            مشاهده
          </button>
        </div>
      </div>
    </section>
  );
};
export default SubsecriptionPlans;
