import { forwardRef } from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import {useSelector} from 'react-redux';
import {getAuth, signOut} from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
import React from "react";
import { useDispatch } from "react-redux";
import {signUserOut} from '../Reducers/userSlice'

const SideBar = forwardRef(({ showNav }, ref) => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const auth = getAuth();
  const dispatch = useDispatch();

  const handleSignUserOut = () => {
    signOut(auth).then(() => {
      navigate('/')
      dispatch(signUserOut())
    }).catch((err) => {
      console.log(err.message)
    })

    
  }

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">

        {user ?
          (<img
            className="w-32 h-auto"
            src={user.photoURL}
            alt="user avatar"
          />) : (
            <img
            className="w-32 h-auto"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt="user avatar"
          />
          )
          }
      </div>

      <div className="flex flex-col">
          <div onClick={handleSignUserOut}
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}
          >
            <div className="mr-2">
              <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Sign Out</p>
            </div>
          </div>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default React.memo(SideBar);