import React from "react";
import ReactChart from "../../Components/MainContainer/ReactChart";
import { productData } from "../../datas";
import { Link } from "@mui/material";
import { Publish } from "@mui/icons-material";

export default function product() {
  return (
    <div className="w-full mx-2">
      <div className="flex flex-col">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-bold text-2xl">Product</h1>

          <Link to="/newProduct">
            <button className="py-1 px-4 bg-teal-700 rounded-[.3rem] text-white">
              Create
            </button>
          </Link>
        </div>

        <div className="mx-6">
          <div className="mt-4 flex justify-around items-start w-full gap-4">
            <div className="w-full">
              <ReactChart
                title="Sale in Month"
                data={productData}
                dataKey="sales"
              />
            </div>

            <div className="bg-white shadow-lg p-4 rounded-xl w-full flex flex-col justify-center items-start">
              <div className="flex justify-center items-center gap-2">
                <img
                  src="/assets/products/dell.avif"
                  alt="dellLaptop"
                  className="w-14"
                />
                <span className="font-semibold">Dell Laptop</span>
              </div>

              <div className="flex flex-col p-2">
                <div className="flex justify-start items-center gap-12">
                  <span className="font-semibold">ID :</span>
                  <span className="text-gray-500">132</span>
                </div>
                <div className="flex justify-start items-center gap-12">
                  <span className="font-semibold">Name :</span>
                  <span className="text-gray-500">Dell Laptop</span>
                </div>
                <div className="flex justify-start items-center gap-12">
                  <span className="font-semibold">Sales :</span>
                  <span className="text-gray-500">$90000</span>
                </div>
                <div className="flex justify-start items-center gap-12">
                  <span className="font-semibold">Active :</span>
                  <span className="text-gray-500">Yes</span>
                </div>

                <div className="flex justify-start items-center gap-12">
                  <span className="font-semibold">In Stock :</span>
                  <span className="text-gray-500">No</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-white shadow-lg mt-4 p-4 flex justify-between items-center">
            <div>
              <h2 className="text-gray-500 font-semibold text-lg">
                Product Name
              </h2>
              <div className="pt-4">
                <input
                  type="text"
                  placeholder="Dell Laptop"
                  className="border-b-gray-400 border-b-2 p-1 text-sm placeholder:text-gray-500"
                />

                <div className="flex flex-col py-2">
                  <span className="font-semibold text-gray-500">In Stock</span>
                  <select className="border border-gray-300 w-48 rounded-sm my-2">
                    <option value="yes" className="text-gray-500">
                      Yes
                    </option>
                    <option value="no" className="text-gray-500">
                      No
                    </option>
                  </select>
                </div>

                <div className="flex flex-col py-2">
                  <span className="font-semibold text-gray-500">Active</span>
                  <select className="border border-gray-300 w-48 rounded-sm my-2">
                    <option value="yes" className="text-gray-500">
                      Yes
                    </option>
                    <option value="no" className="text-gray-500">
                      No
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex justify-center items-center gap-4">
                <img
                  src="/assets/products/dell.avif"
                  alt="dellLaptop"
                  className="w-28"
                />
                <label>
                  <Publish />
                </label>
                <input type="file" className="hidden" />
              </div>
              <button className="bg-blue-950 text-white p-1 rounded-lg text-sm ">
                Upload (Edit)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
