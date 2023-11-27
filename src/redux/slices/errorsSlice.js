import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allErrors: [],
};

export const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    addError: (state, action) => {
      const newError = {
        errorType: action.payload.errorType,
        errorMessage: action.payload.errorMessage,
      };

      const isErrorExist = state.allErrors.find(
        (item) => item.errorType == action.payload.errorType
      );

      if (isErrorExist) {
        state.allErrors = state.allErrors.filter(
          (item) => item.errorType != action.payload.errorType
        );
        state.allErrors.push(newError);
      } else {
        state.allErrors.push(newError);
      }
    },
  },
});

export const errorsActions = errorsSlice.actions;

export default errorsSlice.reducer;
