const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <h1 className="header_title text-5xl w-88 leading-20">
            مدیریت هوشمند کتابخانه شما
          </h1>
          <h6 className="text-xl">
            ساده، سریع و مدرن برای کتابخانه های امروزی
          </h6>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border-neutral-950 border-2 rounded-lg">
              شروع رایگان
            </button>
            <button className="px-4 py-2 bg-neutral-950 text-white rounded-lg">
              مشاهده دمو
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <img src="../public/image/librarian.png" alt="librarian" />
        </div>
      </div>
    </header>
  );
};
export default Header;
