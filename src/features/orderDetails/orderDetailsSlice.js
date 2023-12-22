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
    paymentMode: "COD",
    itemDetails: [{ id: 0, name: "", author: "", quantity: 0, price: 0 }],
  },
  reducers: {
    updateOrderDetails: (state, action) => {
      return {
        address: {
          ...action.payload.address,
          country: state.address.country,
        },
        paymentMode: action.payload.paymentMode,
        itemDetails: [...action.payload.itemDetails],
      };
    },
    updatePinCode: (state, action) => {
      state.address.pinCode = action.payload;
    },
    updateAddress: (state, action) => {
      state.address.address = action.payload;
    },
    updateAlternateMobileNo: (state, action) => {
      state.address.alternateMobileNo = action.payload;
    },
    updatePaymentMode: (state, action) => {
      state.paymentMode = action.payload;
    },
    updateItemDetails: (state, action) => {
      state.itemDetails = action.payload;
    },
  },
});

export const {
  updateOrderDetails,
  updateAddress,
  updatePinCode,
  updateAlternateMobileNo,
  updatePaymentMode,
  updateItemDetails,
} = orderDetails.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.books.books)`
export const selectOrderDetails = (state) => state.orderDetails;

export default orderDetails.reducer;
