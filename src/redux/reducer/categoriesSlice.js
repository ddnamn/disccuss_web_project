import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      const categories = payload.reduce((accumulator, thread) => {
        if (!accumulator.includes(thread.category.toLowerCase())) {
          accumulator.push(thread.category.toLowerCase());
        }
        return accumulator;
      }, []);
      state.entities = categories;
    },
    addCategories: (state, { payload }) => {
      if (!state.entities.includes(payload.toLowerCase()))
        state.entities.push(payload.toLowerCase());
    },
  },
});

export default categoriesSlice.reducer;
export const { setCategories, addCategories } = categoriesSlice.actions;
