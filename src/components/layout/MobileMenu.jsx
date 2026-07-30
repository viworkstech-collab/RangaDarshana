import { NavLink } from "react-router-dom";
import navigation from "../../data/navigation";

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t shadow-lg">
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-2xl font-bold"
        >
          ✕
        </button>
      </div>

      <ul className="flex flex-col gap-5 px-6 pb-6">
        {navigation.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={onClose}
              className="text-lg font-medium text-gray-700 hover:text-amber-600"
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        <button className="mt-4 rounded border border-amber-600 px-4 py-2 text-amber-600">
          EN | ಕನ್ನಡ
        </button>
      </ul>
    </div>
  );
}

export default MobileMenu;