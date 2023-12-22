import orderDetailsReducer, { updateOrderDetails } from "./orderDetailsSlice";

test("should return the initial state", () => {
  expect(orderDetailsReducer(undefined, { type: undefined })).toEqual({
    address: {
      country: "India",
      pinCode: "",
      address: "",
      alternateMobileNo: "",
    },
    paymentMode: "COD",
    itemDetails: [{ id: 0, author: "", name: "", quantity: 0, price: 0 }],
  });
});

test("should handle books being added to an empty list", () => {
  const previousState = {
    address: {
      country: "India",
      pinCode: "",
      address: "",
      alternateMobileNo: "",
    },
    paymentMode: "COD",
    itemDetails: [{ id: 0, author: "", name: "", quantity: 0, price: 0 }],
  };

  expect(
    orderDetailsReducer(
      previousState,
      updateOrderDetails({
        address: {
          pinCode: "444444",
          address: "this is delhi",
          alternateMobileNo: "1234567890",
        },
        paymentMode: "COD",
        itemDetails: [
          {
            id: 1,
            author: "tulsi",
            name: "ramcharitmanas",
            quantity: 2,
            price: 200,
          },
        ],
      })
    )
  ).toEqual({
    address: {
      country: "India",
      pinCode: "444444",
      address: "this is delhi",
      alternateMobileNo: "1234567890",
    },
    paymentMode: "COD",
    itemDetails: [
      {
        id: 1,
        author: "tulsi",
        name: "ramcharitmanas",
        quantity: 2,
        price: 200,
      },
    ],
  });
});
