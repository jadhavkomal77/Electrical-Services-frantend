import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL
      ? import.meta.env.VITE_BACKEND_URL + "/api/adminservice"
      : "/api/adminservice",
    credentials: "include",
  }),

  tagTypes: ["Service"],

  endpoints: (builder) => ({

    /* 🌍 Public */
    getPublicServices: builder.query({
      query: () => "/public",
      providesTags: ["Service"],
    }),

    getServiceBySlug: builder.query({
      query: (slug) => `/public/${slug}`,
    }),

    /* 🔐 Admin */
    getAdminServices: builder.query({
      query: () => "/",
      providesTags: ["Service"],
    }),

    addService: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,   // ✅ FormData
      }),
      invalidatesTags: ["Service"],
    }),

    updateService: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: formData,   // ✅ FormData
      }),
      invalidatesTags: ["Service"],
    }),

    deleteService: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Service"],
    }),
    getpublicServiceBySlug: builder.query({
  query: (slug) => `/public/${slug}`,
}),


  }),
});

export const {
  useGetPublicServicesQuery,
  useGetServiceBySlugQuery,
  useGetpublicServiceBySlugQuery,
  useGetAdminServicesQuery,
  useAddServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
