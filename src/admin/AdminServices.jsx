import React, { useEffect, useState } from "react";
import { useAddServiceMutation, useGetAdminServicesQuery, useUpdateServiceMutation } from "../redux/apis/serviceApi";


export default function AdminServices() {
  const { data: services, isLoading } = useGetAdminServicesQuery();
  const [addService] = useAddServiceMutation();
  const [updateService] = useUpdateServiceMutation();

  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    icon: "⚡",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({ title: "", shortDesc: "", icon: "⚡" });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateService({
        id: editingId,
        data: form,
      });
    } else {
      await addService(form);
    }

    resetForm();
  };

  const handleEdit = (service) => {
    setEditingId(service._id);
    setForm({
      title: service.title,
      shortDesc: service.shortDesc,
      icon: service.icon || "⚡",
    });
  };

  const toggleActive = async (service) => {
    await updateService({
      id: service._id,
      data: { ...service, isActive: !service.isActive },
    });
  };

  if (isLoading) return <p>Loading services...</p>;

  return (
    <div className="max-w-6xl bg-white shadow rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-2">Services</h2>
      <p className="text-gray-500 mb-8">
        Manage all services shown on the website.
      </p>

      {/* ADD / EDIT FORM */}
      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-6 mb-12">
        <input
          type="text"
          name="title"
          placeholder="Service Title"
          value={form.title}
          onChange={handleChange}
          required
          className="border px-4 py-3 rounded"
        />

        <input
          type="text"
          name="shortDesc"
          placeholder="Short Description"
          value={form.shortDesc}
          onChange={handleChange}
          required
          className="border px-4 py-3 rounded"
        />

        <input
          type="text"
          name="icon"
          placeholder="Icon (⚡ 🔧 💡)"
          value={form.icon}
          onChange={handleChange}
          className="border px-4 py-3 rounded"
        />

        <div className="md:col-span-3 flex gap-4">
          <button
            className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600"
          >
            {editingId ? "Update Service" : "Add Service"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="border px-8 py-3 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* SERVICES LIST */}
      <div className="space-y-4">
        {services?.map((service) => (
          <div
            key={service._id}
            className="flex items-center justify-between border rounded-lg p-5"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{service.icon || "⚡"}</span>

              <div>
                <h4 className="font-semibold text-lg">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-sm">
                  {service.shortDesc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => handleEdit(service)}
                className="text-blue-600 font-medium"
              >
                Edit
              </button>

              <button
                onClick={() => toggleActive(service)}
                className={`font-medium ${
                  service.isActive ? "text-green-600" : "text-gray-400"
                }`}
              >
                {service.isActive ? "Active" : "Inactive"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
