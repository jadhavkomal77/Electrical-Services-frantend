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
// );import { useState } from "react";





import { useEffect, useState } from "react";
import { useAddServiceMutation, useUpdateServiceMutation } from "../redux/apis/serviceApi";
import slugify from "slugify";

export default function AdminService({ editData }) {
  const [addService] = useAddServiceMutation();
  const [updateService] = useUpdateServiceMutation();

  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [icon, setIcon] = useState("⚡");

  const [whyChoose, setWhyChoose] = useState([]);
  const [process, setProcess] = useState([]);
  const [technologies, setTechnologies] = useState("");
  const [projects, setProjects] = useState([]);

  /* ✅ PREFILL WHEN EDIT */
  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setShortDesc(editData.shortDesc);
      setLongDesc(editData.longDesc);
      setIcon(editData.icon || "⚡");
      setWhyChoose(editData.whyChoose || []);
      setProcess(editData.process || []);
      setTechnologies((editData.technologies || []).join(","));
      setProjects(
        (editData.projects || []).map((p) => ({
          title: p.title,
          desc: p.desc,
          tech: (p.tech || []).join(","),
          image: null, // new image optional
        }))
      );
    }
  }, [editData]);

  /* WHY CHOOSE */
  const addWhyChoose = () =>
    setWhyChoose([...whyChoose, { icon: "", title: "", desc: "" }]);
  const updateWhyChoose = (i, field, value) => {
    const copy = [...whyChoose];
    copy[i][field] = value;
    setWhyChoose(copy);
  };
  const removeWhyChoose = (i) =>
    setWhyChoose(whyChoose.filter((_, idx) => idx !== i));

  /* PROCESS */
  const addProcess = () =>
    setProcess([...process, { step: process.length + 1, title: "", desc: "" }]);
  const updateProcess = (i, field, value) => {
    const copy = [...process];
    copy[i][field] = value;
    setProcess(copy);
  };
  const removeProcess = (i) =>
    setProcess(process.filter((_, idx) => idx !== i));

  /* PROJECTS */
  const addProject = () =>
    setProjects([...projects, { title: "", desc: "", tech: "", image: null }]);
  const updateProject = (i, field, value) => {
    const copy = [...projects];
    copy[i][field] = value;
    setProjects(copy);
  };
  const removeProject = (i) =>
    setProjects(projects.filter((_, idx) => idx !== i));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    const slug = slugify(title, { lower: true, strict: true });

    fd.append("title", title);
    fd.append("slug", slug);
    fd.append("shortDesc", shortDesc);
    fd.append("longDesc", longDesc);
    fd.append("icon", icon);

    fd.append("whyChoose", JSON.stringify(whyChoose));
    fd.append("process", JSON.stringify(process));
    fd.append("technologies", JSON.stringify(technologies.split(",")));

    const projectData = projects.map((p) => ({
      title: p.title,
      desc: p.desc,
      tech: p.tech.split(","),
    }));

    fd.append("projects", JSON.stringify(projectData));

    projects.forEach((p) => {
      if (p.image) fd.append("projects", p.image);
    });

    if (editData) {
      await updateService({ id: editData._id, formData: fd });
      alert("Service Updated");
    } else {
      await addService(fd);
      alert("Service Added");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        {editData ? "✏️ Edit Service" : "➕ Add New Service"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* BASIC INFO */}
        <div className="bg-white shadow rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-lg">Basic Info</h3>
          <input className="input" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <textarea className="input" placeholder="Short Description" value={shortDesc} onChange={(e)=>setShortDesc(e.target.value)} />
          <textarea className="input" placeholder="Long Description" value={longDesc} onChange={(e)=>setLongDesc(e.target.value)} />
          <input className="input" placeholder="Icon (⚡)" value={icon} onChange={(e)=>setIcon(e.target.value)} />
        </div>

        {/* WHY CHOOSE */}
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-lg">Why Choose</h3>
            <button type="button" onClick={addWhyChoose} className="btn-blue">+ Add</button>
          </div>
          {whyChoose.map((w,i)=>(
            <div key={i} className="grid grid-cols-3 gap-3 mb-3">
              <input className="input" placeholder="Icon" onChange={e=>updateWhyChoose(i,"icon",e.target.value)} />
              <input className="input" placeholder="Title" onChange={e=>updateWhyChoose(i,"title",e.target.value)} />
              <input className="input" placeholder="Desc" onChange={e=>updateWhyChoose(i,"desc",e.target.value)} />
              <button type="button" onClick={()=>removeWhyChoose(i)} className="btn-red col-span-3">Remove</button>
            </div>
          ))}
        </div>

        {/* PROCESS */}
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-lg">Process</h3>
            <button type="button" onClick={addProcess} className="btn-blue">+ Add</button>
          </div>
          {process.map((p,i)=>(
            <div key={i} className="grid grid-cols-3 gap-3 mb-3">
              <input className="input bg-gray-100" value={p.step} disabled />
              <input className="input" placeholder="Title" onChange={e=>updateProcess(i,"title",e.target.value)} />
              <input className="input" placeholder="Desc" onChange={e=>updateProcess(i,"desc",e.target.value)} />
              <button type="button" onClick={()=>removeProcess(i)} className="btn-red col-span-3">Remove</button>
            </div>
          ))}
        </div>

        {/* TECHNOLOGIES */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-2">Technologies</h3>
          <input className="input" placeholder="React,Node,Next" onChange={(e)=>setTechnologies(e.target.value)} />
        </div>

        {/* PROJECTS */}
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-lg">Projects</h3>
            <button type="button" onClick={addProject} className="btn-blue">+ Add</button>
          </div>
          {projects.map((p,i)=>(
            <div key={i} className="grid grid-cols-2 gap-3 mb-4">
              <input className="input" placeholder="Title" onChange={e=>updateProject(i,"title",e.target.value)} />
              <input className="input" placeholder="Desc" onChange={e=>updateProject(i,"desc",e.target.value)} />
              <input className="input" placeholder="Tech (React,Node)" onChange={e=>updateProject(i,"tech",e.target.value)} />
              <input type="file" className="input" onChange={e=>updateProject(i,"image",e.target.files[0])} />
              <button type="button" onClick={()=>removeProject(i)} className="btn-red col-span-2">Remove</button>
            </div>
          ))}
        </div>

        <button type="submit" className="btn-green w-full text-lg">💾 Save Service</button>
      </form>
    </div>
  );
}

