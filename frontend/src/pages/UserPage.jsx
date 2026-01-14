import React from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";


const users = [
  {
    id: 1,
    name: "Michael Holz",
    date: "04/10/2013",
    role: "Admin",
    status: "Active",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Paula Wilson",
    date: "05/08/2014",
    role: "Publisher",
    status: "Active",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Antonio Moreno",
    date: "11/05/2015",
    role: "Publisher",
    status: "Suspended",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Mary Saveley",
    date: "06/09/2016",
    role: "Reviewer",
    status: "Active",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "Martin Sommer",
    date: "12/08/2017",
    role: "Moderator",
    status: "Inactive",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
];

const statusColor = {
  Active: "bg-green-500",
  Suspended: "bg-red-500",
  Inactive: "bg-yellow-500",
};

export default function UsersPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/");
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            User Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage users, roles, and status
          </p>
        </div>

        <div className="flex items-center gap-3">
  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition">
    <Plus size={16} />
    Add User
  </button>

  <button
    onClick={handleLogout}
    className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
  >
    Logout
  </button>
</div>

      </div>

      {/* Table Card */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-x-auto">

        <table className="w-full text-sm text-left min-w-[800px]">
          <thead className="bg-gray-50 text-gray-600 border-b">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Name</th>
              <th className="p-4 whitespace-nowrap">Date Created</th>
              <th className="p-4">Role</th>
              <th className="p-4 whitespace-nowrap">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                <td className="p-4">{user.id}</td>

                <td className="p-4 flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium text-gray-800 whitespace-nowrap">
                    {user.name}
                  </span>
                </td>

                <td className="p-4 whitespace-nowrap">{user.date}</td>
                <td className="p-4">{user.role}</td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${statusColor[user.status]}`}
                    ></span>
                    <span>{user.status}</span>
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-500 hover:text-blue-600">
                      <Pencil size={16} />
                    </button>
                    <button className="text-red-500 hover:text-red-600">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 p-4 text-sm text-gray-600">
          <button className="px-3 py-1 border rounded">Previous</button>
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded bg-blue-500 text-white">
            2
          </button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
