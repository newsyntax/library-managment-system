import SectionTitle from "../components/SectionTitle";

const Articles = () => {
  return (
    <div>
      <SectionTitle title={"آخرین مقالات"} />
      <div className="flex justify-between gap-10 ">
        <div className="flex cursor-pointer flex-col justify-center hover:scale-105 transition gap-2 border-neutral-950 border-2 rounded-2xl p-4">
          <img
            src="../public/image/article-cover-1.jpg"
            className="block rounded-2xl "
            alt="cover"
          />
          <h3 style={{ fontFamily: "bold" }} className="text-md">
            تاثیر کتابخوانی بر رشد بچه‌ها
          </h3>
          <p className="text-neutral-500">۱۴۰۵/۰۸/۳۰، ساعت ۲۰:۴۱</p>
          <p>
            شکی نیست که کتاب‌ها بهترین بال‌های پروازند. کودک با کتاب‌ها به
            دنیاهای مختلف سفر می‌کند، قصه می‌شنود و خیال‌پردازی را یاد می‌گیرد.
            هر کتاب سفری است بی‌نظیر که به کودک یاد می‌دهد چطور زندگی کند و چطور
            ذهنش را به سراغ دورترین خیال‌ها روانه سازد.
          </p>
        </div>
        <div className="flex cursor-pointer flex-col justify-center hover:scale-105 transition gap-2 border-neutral-950 border-2 rounded-2xl p-4">
          <img
            src="../public/image/article-cover-2.jpg"
            className="block rounded-2xl"
            alt="cover"
          />
          <h3 style={{ fontFamily: "bold" }} className="text-md">
            میزتو مرتب کن تا معجزه کنی
          </h3>
          <p className="text-neutral-500">۱۴۰۵/۰۸/۳۰، ساعت ۲۰:۴۱</p>
          <p>
            شکی نیست که کتاب‌ها بهترین بال‌های پروازند. کودک با کتاب‌ها به
            دنیاهای مختلف سفر می‌کند، قصه می‌شنود و خیال‌پردازی را یاد می‌گیرد.
            هر کتاب سفری است بی‌نظیر که به کودک یاد می‌دهد چطور زندگی کند و چطور
            ذهنش را به سراغ دورترین خیال‌ها روانه سازد.
          </p>
        </div>
        <div className="flex cursor-pointer flex-col justify-center hover:scale-105 transition gap-2 border-neutral-950 border-2 rounded-2xl p-4">
          <img
            src="../public/image/article-cover-3.jpg"
            className="block rounded-2xl"
            alt="cover"
          />
          <h3 style={{ fontFamily: "bold" }} className="text-md">
            قفسه مادربزرگم مینیمال بود
          </h3>
          <p className="text-neutral-500">۱۴۰۵/۰۸/۳۰، ساعت ۲۰:۴۱</p>
          <p>
            شکی نیست که کتاب‌ها بهترین بال‌های پروازند. کودک با کتاب‌ها به
            دنیاهای مختلف سفر می‌کند، قصه می‌شنود و خیال‌پردازی را یاد می‌گیرد.
            هر کتاب سفری است بی‌نظیر که به کودک یاد می‌دهد چطور زندگی کند و چطور
            ذهنش را به سراغ دورترین خیال‌ها روانه سازد.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Articles;
