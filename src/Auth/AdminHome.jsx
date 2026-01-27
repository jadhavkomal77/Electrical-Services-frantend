import React from "react";
import { motion } from "framer-motion";

export default function AdminHome() {
  const stats = [
    {
      title: "Total Products",
      value: 124,
      border: "border-indigo-600",
      text: "text-indigo-600",
      desc: "All active products",
    },
    {
      title: "Active Orders",
      value: 18,
      border: "border-green-600",
      text: "text-green-600",
      desc: "Orders in progress",
    },
    {
      title: "Pending Enquiries",
      value: 7,
      border: "border-yellow-600",
      text: "text-yellow-600",
      desc: "New enquiries awaiting response",
    },
  ];

  return (
    <div className="bg-gray-100 p-6 space-y-10">
      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-1 text-lg">
          Manage Products • Orders • Enquiries • Profile Settings
        </p>
      </div>

      {/* ================= STATS CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className={`p-7 rounded-2xl shadow-xl bg-white border-l-4 ${item.border}`}
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <h2 className={`text-5xl font-extrabold mt-2 ${item.text}`}>
              {item.value}
            </h2>
            <p className="mt-3 text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ================= RECENT ORDERS ================= */}
      <div className="bg-white p-7 rounded-2xl shadow-md border">
        <h3 className="text-2xl font-bold text-gray-900">Recent Orders</h3>
        <p className="text-gray-600 text-sm mb-4">
          Latest 5 orders placed by customers
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="text-xs text-gray-500">
                <th className="pb-2">Order ID</th>
                <th className="pb-2">Customer</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>

            <tbody>
              <OrderRow
                id="ORD-2201"
                name="Komal S."
                amount="₹799"
                status="Delivered"
                color="green"
              />
              <OrderRow
                id="ORD-2202"
                name="Rahul M."
                amount="₹499"
                status="Preparing"
                color="yellow"
              />
              <OrderRow
                id="ORD-2203"
                name="Pooja R."
                amount="₹249"
                status="Cancelled"
                color="red"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <div className="p-7 bg-white rounded-2xl shadow-md border">
        <h3 className="text-2xl font-bold text-gray-900">Quick Actions</h3>

        <div className="mt-5 flex gap-5 flex-wrap">
          <ActionBtn label="Add New Product" primary />
          <ActionBtn label="View All Orders" />
          <ActionBtn label="Respond to Enquiries" />
          <ActionBtn label="Edit Profile" />
        </div>
      </div>
    </div>
  );
}

/* ================= ORDER ROW ================= */

const OrderRow = ({ id, name, amount, status, color }) => {
  const colorMap = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-t">
      <td className="py-3 font-semibold">{id}</td>
      <td className="py-3 text-sm">{name}</td>
      <td className="py-3 text-sm">{amount}</td>
      <td className="py-3 text-sm">
        <span
          className={`px-3 py-1 rounded-full text-xs ${colorMap[color]}`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
};

/* ================= ACTION BUTTON ================= */

const ActionBtn = ({ label, primary }) => (
  <button
    className={`px-5 py-2 rounded-xl shadow transition
      ${
        primary
          ? "bg-indigo-600 text-white hover:bg-indigo-700"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
  >
    {label}
  </button>
);
