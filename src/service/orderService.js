export const submitOrder = async (orderDetails) => {
  var url = "http://localhost:9090/orders";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderDetails),
  });
  return response;
};
