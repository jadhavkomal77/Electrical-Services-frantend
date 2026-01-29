
import { useState, useEffect } from "react";
import {
  useGetSettingsQuery,
  useUpdateWhatsAppMutation,
} from "../redux/apis/settingApi";
import { FaWhatsapp, FaSave } from "react-icons/fa";

export default function WhatsappSettings() {
  const { data, isLoading } = useGetSettingsQuery();
  const [updateWhatsApp, { isLoading: updating }] =
    useUpdateWhatsAppMutation();

  const [number, setNumber] = useState("");

  useEffect(() => {
    if (data?.whatsappNumber) {
      setNumber(data.whatsappNumber);
    }
  }, [data]);

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!number) return alert("WhatsApp number required");

    await updateWhatsApp({ whatsappNumber: number });
    alert("WhatsApp number updated");
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            WhatsApp Settings
          </h1>
          <span className="badge badge-success">
            Active
          </span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-lg border p-6 space-y-6">

          {/* Input */}
          <div>
            <label className="block font-semibold mb-2">
              WhatsApp Number
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <FaWhatsapp className="text-green-500 text-xl" />
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full px-3 py-2 outline-none"
                placeholder="Enter WhatsApp number"
              />
            </div>

            <p className="text-sm text-gray-500 mt-1">
              Country code already added (91)
            </p>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Added On
              </p>
              <p className="font-medium">
                {formatDate(data.createdAt)}
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Last Updated
              </p>
              <p className="font-medium">
                {formatDate(data.updatedAt)}
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleSubmit}
            disabled={updating}
            className="w-full flex items-center justify-center gap-2
                       bg-green-600 hover:bg-green-700
                       text-white font-semibold
                       py-3 rounded-lg transition"
          >
            <FaSave />
            {updating ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
