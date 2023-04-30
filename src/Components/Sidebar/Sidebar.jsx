import React from "react";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  MessageOutlined,
  PermIdentity,
  Timeline,
  TrendingUp,
  // PermIdentityIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <section className="p-2 bg-gray-50 w-60 sticky">
      <div className="flex flex-col justify-center items-start w-full">
        <h3 className="text-gray-400 font-semibold">Dashboard</h3>
        <ul className="p-2 flex flex-col justify-center items-start w-full">
          <Link to="/" className="w-full">
            <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all">
              <LineStyle />
              Home
            </li>
          </Link>
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all w-full ">
            <Timeline />
            Analytics
          </li>
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all w-full ">
            <TrendingUp className="" />
            Sales
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-start">
        <h3 className="text-gray-400 font-semibold">Quick Menu</h3>
        <ul className="p-2 flex flex-col justify-center items-start w-full">
          <Link to="/users" className="w-full">
            <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all">
              <PermIdentity />
              Users
            </li>
          </Link>
          <Link to="/newusers" className="w-full">
            <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all">
              <PermIdentity />
              New User
            </li>
          </Link>

          <Link to="/products" className="w-full">
            <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all">
              <DynamicFeed />
              Products
            </li>
          </Link>
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all w-full">
            <AttachMoney />
            Transactions
          </li>
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all w-full">
            <BarChart className="" />
            Reports
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-start">
        <h3 className="text-gray-400 font-semibold">Notifications</h3>
        <ul className="p-2 flex flex-col justify-center items-start w-full">
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all w-full">
            <MailOutline />
            Mail
          </li>
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all w-full">
            <ChatBubbleOutline />
            Feedback
          </li>
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all w-full">
            <MessageOutlined />
            Messages
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-start">
        <h3 className="text-gray-400 font-semibold">Staff</h3>

        <ul className="p-2 flex flex-col justify-center items-start w-full">
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all w-full">
            <TrendingUp />
            Manage
          </li>
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all w-full">
            <BarChart />
            Analytics
          </li>
          <li className="flex justify-start items-center gap-2 p-2 hover:bg-gray-200 transition-all w-full">
            <MessageOutlined />
            Reports
          </li>
        </ul>
      </div>
    </section>
  );
}
