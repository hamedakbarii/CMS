import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center container mx-auto p-4">
      <Link to="/">
        <div className="text-blue-950 font-bold text-4xl">CMS</div>
      </Link>

      <div className="flex items-center gap-2">
        <div className="relative">
          <NotificationsNoneIcon className="cursor-pointer" />
          <span className="absolute w-5 h-5 text-white text-sm overflow-hidden text-center -right-1 -top-1 bg-red-600 rounded-full">
            2
          </span>
        </div>
        <div className="relative">
          <LanguageIcon className="cursor-pointer" />
          <span className="absolute w-5 h-5  text-white text-sm overflow-hidden text-center -right-1 -top-1 bg-red-600 rounded-full">
            2
          </span>
        </div>
        <SettingsIcon className="cursor-pointer" />

        <img
          className="w-8 h-8 rounded-full object-top"
          src="assets/Header/js.png"
          alt=""
        />
      </div>
    </div>
  );
}
