// import {
//   useGetAdminProjectsQuery,
//   useDeleteProjectMutation,
//   useUpdateProjectMutation,
// } from "../redux/apis/projectApi";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function AdminProjects() {
//   const navigate = useNavigate();
//   const { data: projects = [], isLoading } = useGetAdminProjectsQuery();
//   const [deleteProject] = useDeleteProjectMutation();
//   const [updateProject] = useUpdateProjectMutation();

//   if (isLoading) return <p className="p-6">Loading...</p>;

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this project?")) return;
//     try {
//       await deleteProject(id).unwrap();
//       toast.success("Project deleted");
//     } catch {
//       toast.error("Delete failed");
//     }
//   };

//   const toggleStatus = async (p) => {
//     const formData = new FormData();
//     formData.append("status", p.status === "active" ? "inactive" : "active");

//     try {
//       await updateProject({ id: p._id, data: formData }).unwrap();
//       toast.success("Status updated");
//     } catch {
//       toast.error("Status update failed");
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Projects</h1>
//         <button
//           onClick={() => navigate("/admin/projects/new")}
//           className="bg-red-500 text-white px-5 py-2 rounded-md font-medium"
//         >
//           + Add Project
//         </button>
//       </div>

//       <div className="overflow-x-auto bg-white rounded-lg shadow">
//         <table className="w-full text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-3 text-left">Image</th>
//               <th className="p-3 text-left">Title</th>
//               <th className="p-3 text-left">Category</th>
//               <th className="p-3 text-left">Status</th>
//               <th className="p-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {projects.map((p) => (
//               <tr key={p._id} className="border-t">
//                 <td className="p-3">
//                   <img src={p.image} className="h-12 w-16 object-cover rounded" />
//                 </td>
//                 <td className="p-3 font-medium">{p.title}</td>
//                 <td className="p-3">{p.category}</td>

//                 <td className="p-3">
//                   <button
//                     onClick={() => toggleStatus(p)}
//                     className={`px-3 py-1 rounded text-xs font-semibold
//                       ${p.status === "active"
//                         ? "bg-green-100 text-green-700"
//                         : "bg-red-100 text-red-700"}
//                     `}
//                   >
//                     {p.status}
//                   </button>
//                 </td>
// <td className="p-3">
//   <div className="flex gap-2">
//     {/* EDIT */}
//     <button
//       onClick={() => navigate(`/admin/projects/edit/${p._id}`)}
//       className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-blue-200 transition"
//     >
//       ✏️ Edit
//     </button>

//     {/* DELETE */}
//     <button
//       onClick={() => handleDelete(p._id)}
//       className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-red-200 transition"
//     >
//       🗑 Delete
//     </button>
//   </div>
// </td>

//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

// }



import {
  useGetAdminProjectsQuery,
  useDeleteProjectMutation,
} from "../redux/apis/projectApi";
import { useNavigate } from "react-router-dom";

export default function AdminProjects() {
  const navigate = useNavigate();
  const { data: projects = [], isLoading } = useGetAdminProjectsQuery();
  const [deleteProject] = useDeleteProjectMutation();

  if (isLoading) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button
          onClick={() => navigate("/admin/projects/new")}
          className="bg-red-500 text-white px-5 py-2 rounded-md font-medium"
        >
          + Add Project
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p._id} className="border-t">
                <td className="p-3">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-12 w-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 font-medium">{p.title}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3 flex gap-3">
                  <button
                    onClick={() =>
                      navigate(`/admin/projects/edit/${p._id}`)
                    }
                    className="text-blue-600 font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProject(p._id)}
                    className="text-red-500 font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



