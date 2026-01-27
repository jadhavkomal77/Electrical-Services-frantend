// redux/apis/serviceApi.js
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
    getPublicServices: builder.query({
      query: () => "/public",
      providesTags: ["Service"],
    }),

    getAdminServices: builder.query({
      query: () => "/",
      providesTags: ["Service"],
    }),

    addService: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Service"],
    }),

    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Service"],
    }),
    getServiceBySlug: builder.query({
  query: (slug) => `/public/${slug}`,
}),

  }),
});

export const {
  useGetPublicServicesQuery,
  useGetAdminServicesQuery,
  useAddServiceMutation,
  useGetServiceBySlugQuery,
  useUpdateServiceMutation,
} = serviceApi;
