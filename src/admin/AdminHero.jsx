// import { useEffect, useState } from "react";
// import {
//   useGetAdminHeroQuery,
//   useSaveHeroMutation,
// } from "../redux/apis/heroApi";

// const AdminHero = () => {
//   const { data } = useGetAdminHeroQuery();
//   const [saveHero, { isLoading }] = useSaveHeroMutation();

//   const [form, setForm] = useState({
//     badgeText: "",
//     mainTitle: "",
//     highlightTitle: "",
//     description: "",
//     primaryButtonText: "",
//     primaryButtonLink: "",
//     secondaryButtonText: "",
//     secondaryButtonLink: "",
//     image: null,
//     imagePreview: "",
//   });

//   useEffect(() => {
//     if (data?.hero) {
//       setForm((prev) => ({
//         ...prev,
//         ...data.hero,
//         imagePreview: data.hero.image || "",
//         image: null,
//       }));
//     }
//   }, [data]);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setForm({
//         ...form,
//         image: file,
//         imagePreview: URL.createObjectURL(file),
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const fd = new FormData();
//     Object.keys(form).forEach((key) => {
//       if (form[key] && key !== "imagePreview") {
//         fd.append(key, form[key]);
//       }
//     });

//     await saveHero(fd);
//     alert("Hero updated successfully ✅");
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-8">
//       <h1 className="text-2xl font-bold mb-8">Homepage Hero</h1>

//       <form
//         onSubmit={handleSubmit}
//         className="grid md:grid-cols-2 gap-8"
//       >
//         {/* CONTENT */}
//         <div className="space-y-4">
//           <input className="input" name="badgeText" value={form.badgeText} onChange={handleChange} placeholder="Badge text" />
//           <input className="input" name="mainTitle" value={form.mainTitle} onChange={handleChange} placeholder="Main title" />
//           <input className="input" name="highlightTitle" value={form.highlightTitle} onChange={handleChange} placeholder="Highlight title" />
//           <textarea className="input h-28" name="description" value={form.description} onChange={handleChange} placeholder="Description" />
//           <input className="input" name="primaryButtonText" value={form.primaryButtonText} onChange={handleChange} placeholder="Primary button text" />
//           <input className="input" name="primaryButtonLink" value={form.primaryButtonLink} onChange={handleChange} placeholder="Primary button link" />
//           <input className="input" name="secondaryButtonText" value={form.secondaryButtonText} onChange={handleChange} placeholder="Secondary button text" />
//           <input className="input" name="secondaryButtonLink" value={form.secondaryButtonLink} onChange={handleChange} placeholder="Secondary button link" />
//         </div>

//         {/* IMAGE */}
//         <div className="space-y-4">
//           <label className="font-medium">Hero Image</label>
//           <input type="file" accept="image/*" onChange={handleImage} />
//           {form.imagePreview && (
//             <img
//               src={form.imagePreview}
//               className="rounded-xl border shadow-sm max-h-72 object-cover"
//             />
//           )}
//         </div>

//         <button
//           disabled={isLoading}
//           className="md:col-span-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
//         >
//           {isLoading ? "Saving..." : "Save Hero"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminHero;






// admin/AdminHero.jsx
import React, { useEffect, useState } from "react";
import { useGetAdminHeroQuery, useSaveHeroMutation } from "../redux/apis/heroApi";


export default function AdminHero() {
  const { data } = useGetAdminHeroQuery();
  const [saveHero, { isLoading }] = useSaveHeroMutation();

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    buttonText: "",
    isActive: true,
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    if (data) {
      setForm({
        title: data.title || "",
        subtitle: data.subtitle || "",
        buttonText: data.buttonText || "",
        isActive: data.isActive ?? true,
      });
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("subtitle", form.subtitle);
    fd.append("buttonText", form.buttonText);
    fd.append("isActive", form.isActive);

    if (file) {
      fd.append("backgroundImage", file);
    }

    await saveHero(fd);
    alert("Hero Updated Successfully");
  };

  return (
    <div className="max-w-4xl bg-white shadow rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Hero Section</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          className="w-full border p-3 rounded"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="w-full border p-3 rounded"
          placeholder="Subtitle"
          value={form.subtitle}
          onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
        />

        <input
          className="w-full border p-3 rounded"
          placeholder="Button Text"
          value={form.buttonText}
          onChange={(e) => setForm({ ...form, buttonText: e.target.value })}
        />

        <input
          type="file"
          className="w-full"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {data?.backgroundImage && (
          <img
            src={data.backgroundImage}
            alt="hero"
            className="h-40 rounded-lg object-cover"
          />
        )}

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={form.isActive}
            onChange={(e) =>
              setForm({ ...form, isActive: e.target.checked })
            }
          />
          Active
        </label>

        <button
          disabled={isLoading}
          className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
        >
          {isLoading ? "Saving..." : "Save Hero"}
        </button>
      </form>
    </div>
  );
}
