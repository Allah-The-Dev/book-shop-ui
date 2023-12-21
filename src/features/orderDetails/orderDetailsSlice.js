import { createSlice } from "@reduxjs/toolkit";

export const orderDetails = createSlice({
  name: "orderDetails",
  initialState: {
    address: {
      country: "India",
      pinCode: "",
      address: "",
      alternateMobileNo: "",
    },
    paymentMode: "",
    itemDetails: [{ id: 0, quantity: 0, price: 0 }],
  },
  reducers: {
    updateOrderDetails: (state, action) => {
      return {
        address: {
          country: state.address.country,
          ...action.payload.address,
        },
        paymentMode: action.payload.paymentMode,
        itemDetails: [...action.payload.itemDetails],
      };
    },
  },
});

export const { updateOrderDetails } = orderDetails.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.books.books)`
export const selectOrderDetails = (state) => state.orderDetails;

export default orderDetails.reducer;
