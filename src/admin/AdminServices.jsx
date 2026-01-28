// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   useAddServiceMutation,
//   useUpdateServiceMutation,
// } from "../redux/apis/serviceApi";

// export default function AdminServices({ editData }) {
//   const [addService] = useAddServiceMutation();
//   const [updateService] = useUpdateServiceMutation();
//   const navigate = useNavigate();

//   const emptyForm = {
//     title: "",
//     shortDesc: "",
//     longDesc: "",
//     icon: "",
//     whyChoose: [],
//     process: [],
//     technologies: [],
//     projects: [],
//   };

//   const [form, setForm] = useState(emptyForm);

//   useEffect(() => {
//     if (editData) {
//       setForm({
//         ...editData,
//         projects: editData.projects?.map((p) => ({
//           ...p,
//           file: null, // new upload only
//         })) || [],
//       });
//     } else {
//       setForm(emptyForm);
//     }
//   }, [editData]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   /* PROJECTS */
//   const addProject = () =>
//     setForm({
//       ...form,
//       projects: [
//         ...form.projects,
//         { title: "", desc: "", image: "", file: null, tech: [] },
//       ],
//     });

//   const updateProject = (i, field, value) => {
//     const arr = [...form.projects];
//     arr[i][field] = value;
//     setForm({ ...form, projects: arr });
//   };

//   const handleProjectImage = (i, file) => {
//     const arr = [...form.projects];
//     arr[i].file = file;
//     setForm({ ...form, projects: arr });
//   };

//   const removeProject = (i) => {
//     setForm({
//       ...form,
//       projects: form.projects.filter((_, idx) => idx !== i),
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const fd = new FormData();
//     fd.append("title", form.title);
//     fd.append("shortDesc", form.shortDesc);
//     fd.append("longDesc", form.longDesc);
//     fd.append("icon", form.icon);
//     fd.append("whyChoose", JSON.stringify(form.whyChoose));
//     fd.append("process", JSON.stringify(form.process));
//     fd.append("technologies", JSON.stringify(form.technologies));

//     fd.append(
//       "projects",
//       JSON.stringify(
//         form.projects.map((p) => ({
//           title: p.title,
//           desc: p.desc,
//           image: p.image || "",
//           tech: p.tech || [],
//         }))
//       )
//     );

//     // append files only for new uploads
//     form.projects.forEach((p) => {
//       if (p.file) {
//         fd.append("projectImages", p.file);
//       }
//     });

//     try {
//       if (editData) {
//         await updateService({ id: editData._id, data: fd }).unwrap();
//         toast.success("Service Updated Successfully");
//       } else {
//         await addService(fd).unwrap();
//         toast.success("Service Added Successfully");
//       }

//       navigate("/admin/serviceslist");
//     } catch (err) {
//       toast.error("Something went wrong");
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 space-y-8">
//       <h2 className="text-2xl font-bold">
//         {editData ? "Update Service" : "Create Service"}
//       </h2>

//       {/* BASIC INFO */}
//       <div className="bg-white p-6 grid md:grid-cols-2 gap-4">
//         <input className="input" name="title" placeholder="Title" value={form.title} onChange={handleChange} />
//         <input className="input" name="icon" placeholder="Icon" value={form.icon} onChange={handleChange} />
//         <textarea className="input md:col-span-2" name="shortDesc" placeholder="Short Desc" value={form.shortDesc} onChange={handleChange} />
//         <textarea className="input md:col-span-2" name="longDesc" placeholder="Long Desc" value={form.longDesc} onChange={handleChange} />
//       </div>

//       {/* PROJECTS */}
//       <Section title="Projects">
//         {form.projects.map((p, i) => (
//           <Card key={i}>
//             <div className="flex justify-between items-center">
//               <input
//                 className="input flex-1"
//                 placeholder="Title"
//                 value={p.title}
//                 onChange={(e) => updateProject(i, "title", e.target.value)}
//               />
//               <button
//                 type="button"
//                 onClick={() => removeProject(i)}
//                 className="ml-3 text-red-600 font-bold"
//               >
//                 ✕
//               </button>
//             </div>

//             <input type="file" accept="image/*" onChange={(e) => handleProjectImage(i, e.target.files[0])} />

//             {p.image && !p.file && (
//               <img src={p.image} alt="" className="w-32 h-20 object-cover rounded" />
//             )}

//             <textarea
//               className="input"
//               placeholder="Description"
//               value={p.desc}
//               onChange={(e) => updateProject(i, "desc", e.target.value)}
//             />
//           </Card>
//         ))}
//         <AddBtn onClick={addProject} text="Add Project" />
//       </Section>

//       <button className="w-full bg-blue-600 text-white py-3 rounded">
//         {editData ? "Update Service" : "Create Service"}
//       </button>
//     </form>
//   );
// }

// /* UI Helpers */
// const Section = ({ title, children }) => (
//   <div className="bg-gray-50 p-6 space-y-4">
//     <h3 className="text-lg font-semibold">{title}</h3>
//     {children}
//   </div>
// );

// const Card = ({ children }) => (
//   <div className="bg-white border p-4 space-y-2 rounded">{children}</div>
// );

// const AddBtn = ({ onClick, text }) => (
//   <button type="button" onClick={onClick} className="text-blue-600 font-medium">
//     + {text}
//   </button>
// );
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useAddServiceMutation,
  useUpdateServiceMutation,
} from "../redux/apis/serviceApi";

export default function AdminServices({ editData }) {
  const [addService] = useAddServiceMutation();
  const [updateService] = useUpdateServiceMutation();
  const navigate = useNavigate();

  const emptyForm = {
    title: "",
    shortDesc: "",
    longDesc: "",
    icon: "",
    whyChoose: [],
    process: [],
    technologies: [],
    projects: [],
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editData) {
      setForm({
        ...editData,
        projects:
          editData.projects?.map((p) => ({
            ...p,
            file: null, // only for new upload
          })) || [],
      });
    } else {
      setForm(emptyForm);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* PROJECTS */
  const addProject = () =>
    setForm({
      ...form,
      projects: [
        ...form.projects,
        { title: "", desc: "", image: "", file: null, tech: [] },
      ],
    });

  const updateProject = (i, field, value) => {
    const arr = [...form.projects];
    arr[i][field] = value;
    setForm({ ...form, projects: arr });
  };

  const handleProjectImage = (i, file) => {
    const arr = [...form.projects];
    arr[i].file = file; // mark new file
    setForm({ ...form, projects: arr });
  };

  const removeProject = (i) => {
    setForm({
      ...form,
      projects: form.projects.filter((_, idx) => idx !== i),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("shortDesc", form.shortDesc);
    fd.append("longDesc", form.longDesc);
    fd.append("icon", form.icon);
    fd.append("whyChoose", JSON.stringify(form.whyChoose));
    fd.append("process", JSON.stringify(form.process));
    fd.append("technologies", JSON.stringify(form.technologies));

    // 🔥 important part
    fd.append(
      "projects",
      JSON.stringify(
        form.projects.map((p) => ({
          title: p.title,
          desc: p.desc,
          image: p.file ? "__new__" : p.image || "",
          tech: p.tech || [],
        }))
      )
    );

    // append only new files
    form.projects.forEach((p) => {
      if (p.file) {
        fd.append("projectImages", p.file);
      }
    });

    try {
      if (editData) {
        await updateService({ id: editData._id, data: fd }).unwrap();
        toast.success("Service Updated Successfully");
      } else {
        await addService(fd).unwrap();
        toast.success("Service Added Successfully");
      }

      navigate("/admin/serviceslist");
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold">
        {editData ? "Update Service" : "Create Service"}
      </h2>

      {/* BASIC INFO */}
      <div className="bg-white p-6 grid md:grid-cols-2 gap-4">
        <input
          className="input"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          className="input"
          name="icon"
          placeholder="Icon"
          value={form.icon}
          onChange={handleChange}
        />
        <textarea
          className="input md:col-span-2"
          name="shortDesc"
          placeholder="Short Desc"
          value={form.shortDesc}
          onChange={handleChange}
        />
        <textarea
          className="input md:col-span-2"
          name="longDesc"
          placeholder="Long Desc"
          value={form.longDesc}
          onChange={handleChange}
        />
      </div>

      {/* PROJECTS */}
      <Section title="Projects">
        {form.projects.map((p, i) => (
          <Card key={i}>
            <div className="flex justify-between items-center">
              <input
                className="input flex-1"
                placeholder="Title"
                value={p.title}
                onChange={(e) => updateProject(i, "title", e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeProject(i)}
                className="ml-3 text-red-600 font-bold"
              >
                ✕
              </button>
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleProjectImage(i, e.target.files[0])}
            />

            {p.image && !p.file && (
              <img
                src={p.image}
                alt=""
                className="w-32 h-20 object-cover rounded"
              />
            )}

            <textarea
              className="input"
              placeholder="Description"
              value={p.desc}
              onChange={(e) => updateProject(i, "desc", e.target.value)}
            />
          </Card>
        ))}
        <AddBtn onClick={addProject} text="Add Project" />
      </Section>

      <button className="w-full bg-blue-600 text-white py-3 rounded">
        {editData ? "Update Service" : "Create Service"}
      </button>
    </form>
  );
}

/* UI Helpers */
const Section = ({ title, children }) => (
  <div className="bg-gray-50 p-6 space-y-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    {children}
  </div>
);

const Card = ({ children }) => (
  <div className="bg-white border p-4 space-y-2 rounded">{children}</div>
);

const AddBtn = ({ onClick, text }) => (
  <button type="button" onClick={onClick} className="text-blue-600 font-medium">
    + {text}
  </button>
);
