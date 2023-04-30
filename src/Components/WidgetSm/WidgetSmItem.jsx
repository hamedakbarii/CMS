import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
const WidgetSmItem = ({ name, position, src }) => {
  return (
    <>
      <li className="flex items-center justify-between gap-2 my-1">
        <img
          className="w-10 h-10 object-cover rounded-full"
          src={src}
          alt="members"
        />
        <div className="flex flex-col justify-center items-start">
          <span>{name}</span>
          <span className="text-gray-400">{position}</span>
        </div>
        <button className="p-2 flex justify-center items-center bg-[#eeeef7] rounded-lg text-[#555]">
          <VisibilityIcon className="" />
        </button>
      </li>
    </>
  );
};

export default WidgetSmItem;
