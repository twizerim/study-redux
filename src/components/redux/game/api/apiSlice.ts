import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://anapioficeandfire.com/api/" }),
  endpoints: (builder) => ({
    getHouses: builder.query<any, void>({
      query: () => "houses",
    }),
    getHouseDetails: builder.query<any, string>({
      query: (houseId) => `houses/${houseId}`,
    }),
  }),
});

export const { useGetHousesQuery, useGetHouseDetailsQuery } = apiSlice;
