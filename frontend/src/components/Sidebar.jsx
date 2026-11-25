import { motion } from "motion/react";
import { useState } from "react";
const Sidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState("home");
  const sidebarItems = [
    { id: "home", title: "خانه" },
    { id: "features", title: "ویژگی‌ها" },
    { id: "prices", title: "تعرفه‌ها" },
    { id: "blog", title: "بلاگ" },
    { id: "contact-us", title: "تماس با ما" },
  ];

  return (
    <motion.aside
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: isOpen ? 0 : 1000, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "anticipate" }}
      className="flex  lg:hidden w-50 px-6 flex-col items-start justify-between fixed py-6 right-0 top-0 bottom-0 bg-white">
      <ul className="flex w-full flex-col items-start gap-6 text-lg">
        {sidebarItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`
              
              
              ${
                activeItem === item.id
                  ? "w-full transition ease-linear duration-100 px-4 py-2  bg-neutral-950 text-white rounded-2xl"
                  : "w-full transition ease-linear duration-100 px-4 py-2 rounded-2xl"
              }`}>
            <a href="#">{item.title}</a>
          </li>
        ))}
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
