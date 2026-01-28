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
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,   // JSON send
      }),
      invalidatesTags: ["Service"],
    }),

    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,   // JSON send
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

  }),
});

export const {
  useGetPublicServicesQuery,
  useGetServiceBySlugQuery,
  useGetAdminServicesQuery,
  useAddServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
