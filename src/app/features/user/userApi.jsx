import apiSlice from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user) => ({
                method: 'POST',
                url: '/user',
                body: user
            }),
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                method: 'PATCH',
                url: '/updateUser',
                body: data
            })
        }),
        // getUserByEmail: builder.query({
        //     query: (email) => ({
        //         url: `/users/${email}`,
        //     })
        // })
    }),
});

export const { useRegisterMutation, useUpdateUserMutation, } = userApi;