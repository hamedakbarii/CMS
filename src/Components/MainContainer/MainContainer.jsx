import React from "react";
import TopBoxes from "./TopBoxes";
import ReactChart from "./ReactChart";
import { xAxisData } from "./../../datas";
import WidgetSm from "../WidgetSm/WidgetSm";
import WidgetLg from "../WidgetLg/WidgetLg";
const MainContainer = () => {
  return (
    <div className="w-full">
      <TopBoxes />
      <ReactChart grid title="Month Sale" data={xAxisData} dataKey="sale" />
      <div className="flex gap-2 my-2 shadow-lg">
        <WidgetSm />

        <WidgetLg />
      </div>
    </div>
  );
};

export default MainContainer;
