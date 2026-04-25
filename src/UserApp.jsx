import React, { useState } from "react";
import { Plus, Trash2, Home } from "lucide-react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Portfolio } from "./Portfolio";

export default function UserApp() {
  const [view, setView] = useState("home");
  const [selectedOption, setSelectedOption] = useState(null);
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    para: "",
    village: "",
  });

  const validate = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });

    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddUser = () => {
    if (!validate()) return;
    setUsers([...users, formData]);
    setFormData({ name: "", phone: "", age: "", para: "", village: "" });
    setErrors({});
    setShowForm(false);
  };

  const handleDeleteUser = (index) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter((_, i) => i !== index));
    }
  };

  if (view === "home") {
    return (
      <div className="min-h-screen bg-gray-100 p-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Select Option</h1>
        <div className="grid  grid-cols-1 md:grid-cols-2  gap-6 h-130 font-bold ">
          {
            [
            { name: "Cricket", gradient: "from-green-400 to-green-700" },
            { name: "Football", gradient: "from-blue-400 to-blue-600" },
            { name: "Basketball", gradient: "from-orange-400 to-orange-600" },
            { name: "Tennis", gradient: "from-yellow-400 to-yellow-600" },
            { name: "Badminton", gradient: "from-pink-400 to-pink-600" },
            { name: "Hockey", gradient: "from-purple-400 to-purple-600" },
            { name: "Volleyball", gradient: "from-red-400 to-red-600" },
            { name: "Kabaddi", gradient: "from-indigo-400 to-indigo-600" },
            { name: "Table Tennis", gradient: "from-teal-400 to-teal-600" },
            { name: "Baseball", gradient: "from-cyan-400 to-cyan-600" },
          ].map((sport, index) => (
            <button
              key={index}
              onClick={() => {
               // navigate("/portfolio" );
                setSelectedOption(sport.name); 
                setView("users");
              }}
              className={`bg-gradient-to-r ${sport.gradient} font-bold text-white p-4 rounded-2xl shadow-lg hover:scale-105 transition transform`}
            >
               {sport.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative">
      <button
        onClick={() => setView("home")}
        className="mb-4 text-blue-600 underline text-left flex items-center gap-2"
        style={{ display: 'block' }}
      >
        <Home size={20} className="w-15 h-15 bg-amber-600 text-white inline-block p-2 rounded-full" /> Home
      </button>

      <h2 className="text-red-500 text-2xl font-semibold mb-4">
        {selectedOption}
      </h2>

      {users.length === 0 ? (
        <p className="text-gray-500">No users added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left font-semibold">Name</th>
                <th className="px-4 py-2 text-left font-semibold">Phone</th>
                <th className="px-4 py-2 text-left font-semibold">Age</th>
                <th className="px-4 py-2 text-left font-semibold">Para</th>
                <th className="px-4 py-2 text-left font-semibold">Village</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-blue-400 font-bold">{user.name}</td>
                  <td className="px-4 py-2">{user.phone}</td>
                  <td className="px-4 py-2">{user.age}</td>
                  <td className="px-4 py-2">{user.para}</td>
                  <td className="px-4 py-2">{user.village}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => {
                        handleDeleteUser(index);
                      }}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-red-800 shadow-lg hover:bg-red-700 transition duration-150"
                      title="Delete"
                    >
                      <Trash2 size={25} className="text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 hover:scale-105 transition transform"
      >
        <Plus size={24} />
      </button>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-amber-50 bg-opacity-10 flex items-center justify-center z-40">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Add New User</h3>

            {Object.keys(formData).map((key) => (
              <div key={key} className="mb-3">
                <input
                  type={key === "phone" || key === "age" ? "number" : "text"}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={formData[key]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                  className={`w-full p-2 border rounded-lg ${
                    errors[key] ? "border-red-500" : ""
                  }`}
                />
                {errors[key] && (
                  <p className="text-red-500 text-sm mt-1">{errors[key]}</p>
                )}
              </div>
            ))}

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => {
                  setShowForm(false);
                  setErrors({});
                }}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddUser}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
