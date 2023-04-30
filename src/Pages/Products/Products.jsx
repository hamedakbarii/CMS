import React, { useState } from "react";
import { products, userRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Products = () => {
  const [productsData, setProductsData] = useState(products);

  const productDelete = (productId) => {
    let filteredProducts = productsData.filter(
      (product) => product.id != productId
    );
    setProductsData(filteredProducts);
  };
  const columns = [
    {
      field: "checkBox",
      headerName: <input type="checkbox" />,
      width: 90,
      renderCell: (params) => {
        return <input type="checkbox" name="" id="" />;
      },
    },
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`}>
            <div className="flex items-center gap-2">
              <img
                src={params.row.avatar}
                className="w-10 h-10 rounded-full object-cover"
              />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <Link to={`/product/${params.row.id}`}>
              <button className="px-2 py-1  bg-[#3bb077] text-white rounded-md cursor-pointer">
                Edit
              </button>
            </Link>
            <DeleteOutlineIcon
              className="text-red-500 cursor-pointer"
              onClick={() => productDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="w-full m-2">
      {productsData.length > 0 && (
        <DataGrid
          rows={productsData}
          columns={columns}
          disableRowSelectionOnClick
          initialState={{
            pagination: { paginationModel: { pageSize: 4 } },
          }}
        />
      )}
    </div>
  );
};

export default Products;
