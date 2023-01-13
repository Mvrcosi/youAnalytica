import { forwardRef } from "react";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import {useSelector} from 'react-redux';


const SideBar = forwardRef(({ showNav }, ref) => {
  const user = useSelector(state => state.user)

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
          <img
            className="w-32 h-auto"
            src={user.user.photoURL}
            alt="user avatar"
          />
      </div>

      <div className="flex flex-col">
        <a href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </a>
      
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;