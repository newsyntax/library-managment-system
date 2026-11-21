import SectionTitle from "../components/SectionTitle";

const Features = () => {
  return (
    <section>
      <SectionTitle title={"ویژگی های کلیدی سامانه"} />
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col justify-start border-neutral-950 border-2 p-4 rounded-2xl gap-2">
          <img src="../public/image/chart-1.svg" alt="chart" className="w-10" />
          <h6 style={{ fontFamily: "bold" }}>گزارش گیری پیشرفته</h6>
          <p>
            گزارشات پیشرفته (Advanced Reports) در یک سیستم مدیریت ارتباط با
            مشتری (CRM)، ابزارهای تحلیلی قدرتمندی هستند که داده های خام و
            پراکنده را به بینش های استراتژیک و قابل اقدام تبدیل می کنند.w-20
          </p>
        </div>
        <div className="flex flex-col justify-start border-neutral-950 border-2 p-4 rounded-2xl gap-2">
          <img
            src="../public/image/clipboard-text.svg"
            alt="chart"
            className="w-10"
          />
          <h6 style={{ fontFamily: "bold" }}>سیستم امانت</h6>
          <p>
            گزارشات پیشرفته (Advanced Reports) در یک سیستم مدیریت ارتباط با
            مشتری (CRM)، ابزارهای تحلیلی قدرتمندی هستند که داده های خام و
            پراکنده را به بینش های استراتژیک و قابل اقدام تبدیل می کنند.w-20
          </p>
        </div>
        <div className="flex flex-col justify-start border-neutral-950 border-2 p-4 rounded-2xl gap-2">
          <img
            src="../public/image/profile-2user.svg"
            alt="chart"
            className="w-10"
          />
          <h6 style={{ fontFamily: "bold" }}>سیستم مدیریت کاربران</h6>
          <p>
            گزارشات پیشرفته (Advanced Reports) در یک سیستم مدیریت ارتباط با
            مشتری (CRM)، ابزارهای تحلیلی قدرتمندی هستند که داده های خام و
            پراکنده را به بینش های استراتژیک و قابل اقدام تبدیل می کنند.w-20
          </p>
        </div>
        <div className="flex flex-col justify-start border-neutral-950 border-2 p-4 rounded-2xl gap-2">
          <img src="../public/image/save-2.svg" alt="chart" className="w-10" />
          <h6 style={{ fontFamily: "bold" }}>مدیریت موجودی</h6>
          <p>
            گزارشات پیشرفته (Advanced Reports) در یک سیستم مدیریت ارتباط با
            مشتری (CRM)، ابزارهای تحلیلی قدرتمندی هستند که داده های خام و
            پراکنده را به بینش های استراتژیک و قابل اقدام تبدیل می کنند.w-20
          </p>
        </div>
        <div className="flex flex-col justify-start border-neutral-950 border-2 p-4 rounded-2xl gap-2">
          <img
            src="../public/image/ranking-1.svg"
            alt="chart"
            className="w-10"
          />
          <h6 style={{ fontFamily: "bold" }}>همکاری با برند های معتبر</h6>
          <p>
            گزارشات پیشرفته (Advanced Reports) در یک سیستم مدیریت ارتباط با
            مشتری (CRM)، ابزارهای تحلیلی قدرتمندی هستند که داده های خام و
            پراکنده را به بینش های استراتژیک و قابل اقدام تبدیل می کنند.w-20
          </p>
        </div>
        <div className="flex flex-col justify-start border-neutral-950 border-2 p-4 rounded-2xl gap-2">
          <img src="../public/image/layer.svg" alt="chart" className="w-10" />
          <h6 style={{ fontFamily: "bold" }}>مقیاس پذیر</h6>
          <p>
            گزارشات پیشرفته (Advanced Reports) در یک سیستم مدیریت ارتباط با
            مشتری (CRM)، ابزارهای تحلیلی قدرتمندی هستند که داده های خام و
            پراکنده را به بینش های استراتژیک و قابل اقدام تبدیل می کنند.w-20
          </p>
        </div>
      </div>
    </section>
  );
};
export default Features;
