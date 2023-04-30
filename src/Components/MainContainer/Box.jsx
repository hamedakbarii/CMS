import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const Box = (props) => {
  // let [title,price,arrowNum,arrowColor,desc] = props
  return (
    <div className="flex flex-col items-start gap-2 border w-80 p-8 rounded-md shadow-md">
      <h3>{props.title}</h3>
      <div className="flex justify-around items-center gap-2">
        <h4 className="font-semibold text-2xl">$ {props.price}</h4>
        <span>{props.arrowNum}</span>
        {props.arrowNum > 0 ? (
          <ArrowUpwardIcon className={props.arrowColor} />
        ) : (
          <ArrowDownwardIcon className={props.arrowColor} />
        )}
      </div>
      <span className="text-gray-400">{props.desc}</span>
    </div>
  );
};

export default Box;
