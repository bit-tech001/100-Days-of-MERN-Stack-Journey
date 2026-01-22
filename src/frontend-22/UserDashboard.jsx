import React, { useState } from "react";
import axios from "axios";

const UserDashboard = () => {
  // all users
  const [user, setUserData] = useState([]);

  // form state
  const [form, setForm] = useState({
    _id: "",
    name: "",
    email: "",
    address: "",
  });

  // FETCH USERS
  const fetchUser = async () => {
    try {
      const res = await axios.get("/api/read");
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ADD USER
  const addUser = async () => {
    try {
      await axios.post("/api/create", form);
      setForm({ _id: "", name: "", email: "", address: "" });
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE USER
  const deleteUser = async (_id) => {
    try {
      await axios.delete(`/api/delete/${_id}`);
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT USER (fill form)
  const editUser = (u) => {
    setForm(u);
  };

  // UPDATE USER
  const updateUser = async () => {
    try {
      await axios.put(`/api/update/${form._id}`, form);
      setForm({ _id: "", name: "", email: "", address: "" });
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="min-h-screen bg-[#0B0F19] text-gray-200">

    {/* Header */}
    <header className="border-b border-gray-800 bg-[#0E1424]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-[#A78BFA]">
            User Management
          </h1>
          <p className="text-sm text-gray-400">
            Admin Dashboard
          </p>
        </div>
        <button
          onClick={fetchUser}
          className="px-4 py-2 text-sm bg-[#3B82F6] text-white rounded-md hover:bg-[#2563EB]"
        >
          Fetch Users
        </button>
      </div>
    </header>

    {/* Content */}
    <main className="max-w-7xl mx-auto p-9 space-y-6">

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#0E1424] border border-gray-800 rounded-lg p-5">
          <p className="text-sm text-gray-400">Total Users</p>
          <h2 className="text-3xl font-semibold text-[#3B82F6]">
            {user.length}
          </h2>
        </div>

        <div className="bg-[#0E1424] border border-gray-800 rounded-lg p-5">
          <p className="text-sm text-gray-400">Active Records</p>
          <h2 className="text-3xl font-semibold text-[#22C55E]">
            {user.length}
          </h2>
        </div>

        <div className="bg-[#0E1424] border border-gray-800 rounded-lg p-5">
          <p className="text-sm text-gray-400">Last Update</p>
          <h2 className="text-lg font-medium text-[#A78BFA]">
            Just now
          </h2>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Form */}
        <section className="bg-[#0E1424] border border-gray-800 rounded-lg">
          <div className="border-b border-gray-800 px-5 py-4">
            <h2 className="font-medium text-[#A78BFA]">
              {form._id ? "Update User" : "Add New User"}
            </h2>
          </div>

          <div className="p-5 space-y-4">
            <input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2 bg-[#0B0F19] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-[#3B82F6] outline-none"
            />
            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3 py-2 bg-[#0B0F19] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-[#3B82F6] outline-none"
            />
            <input
              placeholder="Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full px-3 py-2 bg-[#0B0F19] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-[#3B82F6] outline-none"
            />

            <div className="flex gap-3 pt-2">
              <button
                onClick={addUser}
                className="flex-1 py-2 bg-[#22C55E] text-black font-medium rounded-md hover:bg-[#16A34A]"
              >
                Add
              </button>
              <button
                onClick={updateUser}
                className="flex-1 py-2 bg-[#3B82F6] text-white font-medium rounded-md hover:bg-[#2563EB]"
              >
                Update
              </button>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="lg:col-span-2 bg-[#0E1424] border border-gray-800 rounded-lg">
          <div className="border-b border-gray-800 px-5 py-4 flex justify-between items-center">
            <h2 className="font-medium text-[#A78BFA]">
              Users
            </h2>
            <input
              placeholder="Search..."
              className="px-3 py-1.5 text-sm bg-[#0B0F19] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-[#3B82F6] outline-none"
            />
          </div>

          <table className="w-full text-sm">
            <thead className="bg-[#111827] text-gray-400 uppercase text-xs">
              <tr>
                <th className="px-5 py-3 text-left">Name</th>
                <th className="px-5 py-3 text-left">Email</th>
                <th className="px-5 py-3 text-left">Address</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {user.map((u) => (
                <tr
                  key={u._id}
                  className="border-t border-gray-800 hover:bg-[#111827]"
                >
                  <td className="px-5 py-3 font-medium text-white">
                    {u.name}
                  </td>
                  <td className="px-5 py-3 text-gray-400">
                    {u.email}
                  </td>
                  <td className="px-5 py-3 text-gray-400">
                    {u.address}
                  </td>
                  <td className="px-5 py-3 text-right space-x-4">
                    <button
                      onClick={() => editUser(u)}
                      className="text-[#3B82F6] hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(u._id)}
                      className="text-[#EF4444] hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {user.length === 0 && (
            <p className="text-center text-gray-400 py-8">
              No users found
            </p>
          )}
        </section>
      </div>
    </main>
  </div>


  );
};

export default UserDashboard;
