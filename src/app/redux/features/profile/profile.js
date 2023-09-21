import { api } from "../../api/apiSlice";

const profileApi = api.injectEndpoints({
    endpoints: (builder) => ({
      createProfile: builder.mutation({
        query: ({ data }) => ({
          url: `/profile`,
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["profile"],
      }),
      getAllProfile: builder.query({
        query: () => ({
          url: `/profile`,
        }),
        providesTags: ["profile"],
      }),
      getSingleProfile: builder.query({
        query: (id) => ({
          url: `/profile-view/${id}`,
        }),
        providesTags: ["profile"],
      })
    })
})


export const {
    useCreateProfileMutation,
    useGetAllProfileQuery,
    useGetSingleProfileQuery
} = profileApi