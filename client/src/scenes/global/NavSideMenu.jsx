import { XMarkIcon } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from "react-redux"
import { selectMenuSelection, setIsMenuOpen } from "../../state"

const NavSideMenu = () => {
  const dispatch = useDispatch()
  const menu = ["Home", "New", "Popular", "Trending", "Categories"]
  const toggleNavSideMenu = useSelector(selectMenuSelection)

  return (
    <div>
      <div
        className={`${
          !toggleNavSideMenu ? "hidden" : "flex flex-col text-right"
        } p-6 absolute top-0 right-0 min-w-[180px] w-[300px] h-screen bg-gray-100 rounded-l-xl origin-right transition duration-300 ease-in z-10`}
      >
        {toggleNavSideMenu && (
          <div className="self-end cursor-pointer mb-5">
            {" "}
            <XMarkIcon
              className="h-6 w-6"
              onClick={() => dispatch(setIsMenuOpen())}
            />
          </div>
        )}
        <ul className="space-y-5">
          {menu.map((item, index) => (
            <li
              key={index}
              className="text-2xl hover:bg-gray-400 w-full cursor-pointer p-2 rounded-lg"
            >
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavSideMenu
