import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({}),
});


export default apiSlice;