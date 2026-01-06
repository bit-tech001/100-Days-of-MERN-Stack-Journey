import { useState } from "react";

const Forms = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // save submitted data
    setSubmittedData(data);

    // reset form
    setData({
      name: "",
      email: "",
      phone: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 gap-8">
      
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Contact Form
        </h2>

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Phone</label>
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>

      {/* SUBMITTED DATA PREVIEW */}
      {submittedData && (
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Submitted Data
          </h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Name:</strong> {submittedData.name}</li>
            <li><strong>Email:</strong> {submittedData.email}</li>
            <li><strong>Phone:</strong> {submittedData.phone}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Forms;
