import React from "react";

import WidgetSmItem from "./WidgetSmItem";
const WidgetSm = () => {
  return (
    <div className="p-4 border flex-1 w-full">
      <span className="text-lg font-bold">New Join Members</span>
      <ul className="flex flex-col gap-1 pt-5">
        <WidgetSmItem
          name="Hamed Akbari"
          position="Developer"
          src="assets/Members/Hamed Akbari.jpg"
        />
        <WidgetSmItem
          name="Majid Amini"
          position="Engineer"
          src="assets/Members/Majid Amini.jpg"
        />
        <WidgetSmItem
          name="Amir Akbarzadeh"
          position="Designer"
          src="assets/Members/Amir Akbarzadeh.jpg"
        />
        <WidgetSmItem
          name="Raymond Reddington"
          position="Seller"
          src="assets/Members/Reymond Reddington.jpg"
        />
      </ul>
    </div>
  );
};

export default WidgetSm;
