import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
} from "recharts";

const ReactChart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="w-full p-2 bg-white shadow-lg">
      <h3 className="font-bold py-4">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />

          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />

          <Tooltip />
          {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReactChart;
