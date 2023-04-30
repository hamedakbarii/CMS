import Box from "./Box";
import React from "react";

const TopBoxes = () => {
  return (
    <div className="flex justify-between">
      <Box
        title="Revenue"
        price="2,415"
        arrowNum="-11.4"
        arrowColor="text-red-500"
        desc="Compared to last Month"
      />
      <Box
        title="Sales"
        price="4,415"
        arrowNum="-1.4"
        arrowColor="text-red-500"
        desc="Compared to last Month"
      />
      <Box
        title="Cost"
        price="2,225"
        arrowNum="+2.4"
        arrowColor="text-green-500"
        desc="Compared to last Month"
      />
    </div>
  );
};

export default TopBoxes;
