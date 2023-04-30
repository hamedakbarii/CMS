import React from "react";
import { transActions } from "../../datas";

const WidgetLg = () => {
  const Button = ({ text, color, bgColor }) => {
    return (
      <button
        className={`${color} ${bgColor} p-1 rounded-lg border-none w-7/12`}
      >
        {text}
      </button>
    );
  };

  return (
    <div className="w-full flex flex-col flex-[2] border p-4 shadow-xl">
      <h3 className="text-lg font-bold">Latest TransActions</h3>
      <table className="w-full border-spacing-2 mt-6">
        <tr>
          <th className="text-left">Customer</th>
          <th className="text-left">Date</th>
          <th className="text-left">Amount</th>
          <th className="text-left">Status</th>
        </tr>

        {transActions.map((transAction) => (
          <tr key={transAction.id}>
            <td className="flex items-center p-2 gap-2 w-full">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={transAction.img}
                alt="user image"
              />
              <span className="pl-3">{transAction.name}</span>
            </td>
            <td className="text-left font-[300]">{transAction.date}</td>
            <td className="text-left font-[300]">$ {transAction.price}</td>
            <td className="text-left">
              {transAction.status === "success" ? (
                <Button
                  text={transAction.status}
                  color="text-green-300"
                  bgColor="bg-green-500"
                />
              ) : transAction.status === "pending" ? (
                <Button
                  text={transAction.status}
                  color="text-yellow-300"
                  bgColor="bg-yellow-500"
                />
              ) : (
                <Button
                  text={transAction.status}
                  color="text-red-300"
                  bgColor="bg-red-500"
                />
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLg;
