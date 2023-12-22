import { submitOrder } from "./orderService";

describe("Books", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it("should submit order on call of POST /orders API", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({}),
    });

    const orderDetails = {
      address: "Banglore",
      userId: "3e9b9b38-0e6d-4e7b-b582-2f6a19f6b03d",
      paymentMode: "COD",
      totalAmount: 200.5,
      orderItemsList: [
        {
          bookId: "222",
          quantity: 2,
          price: 23.5,
        },
      ],
    };
    await submitOrder(orderDetails);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:9090/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    });
  });
});
