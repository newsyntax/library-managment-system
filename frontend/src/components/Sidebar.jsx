import { motion } from "motion/react";
const Sidebar = ({ isOpen }) => {
  return (
    <motion.aside
      animate={{ x: isOpen ? 0 : 1000 }}
      transition={{ duration: 0.5 }}
      className="flex w-50 px-6 flex-col items-start justify-between fixed py-6 right-0 top-0 bottom-0 bg-white">
      <ul className="flex flex-col items-start gap-6 text-lg">
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

      <div className="flex flex-col items-center gap-4">
        <button className="px-4 py-2  border-neutral-950 border-2 rounded-lg">
          ورود
        </button>
        <button className="px-4 py-2  bg-neutral-950 text-white rounded-lg">
          ثبت نام رایگان
        </button>
      </div>
    </motion.aside>
  );
};
export default Sidebar;
