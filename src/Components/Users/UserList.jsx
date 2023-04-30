import React, { useState } from "react";
import { userRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const UserList = () => {
  const [userDatas, setUserDatas] = useState(userRows);

  const userDelete = (userId) => {
    let filteredUsers = userDatas.filter((user) => user.id != userId);
    setUserDatas(filteredUsers);
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/">
            <div className="flex items-center gap-2">
              <img
                src={params.row.avatar}
                className="w-10 rounded-full h-10 object-cover"
              />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <Link to={`/user/${params.row.id}`}>
              <button className="px-2 py-1  bg-[#3bb077] text-white rounded-md cursor-pointer">
                Edit
              </button>
            </Link>
            <DeleteOutlineIcon
              className="text-red-500 cursor-pointer"
              onClick={() => userDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <>
      {userDatas.length > 0 && (
        <DataGrid
          rows={userDatas}
          columns={columns}
          disableRowSelectionOnClick
          initialState={{
            pagination: { paginationModel: { pageSize: 4 } },
          }}
        />
      )}
    </>
  );
};

export default UserList;
