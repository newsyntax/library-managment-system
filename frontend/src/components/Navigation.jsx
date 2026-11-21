const Navigation = () => {
  return (
    <nav className="pt-6">
      <div className="flex items-center justify-between">
        <h4 className="nav__title">سامانه مدیریت کتابخانه</h4>
        <ul className="flex items-center gap-6 text-lg">
          <li>
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#">ویژگی‌ها</a>
          </li>
          <li>
            <a href="#">تعرفه‌ها</a>
          </li>
          <li>
            <a href="#">بلاگ</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 border-neutral-950 border-2 rounded-lg">
            ورود
          </button>
          <button className="px-4 py-2 bg-neutral-950 text-white rounded-lg">
            ثبت نام رایگان
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
