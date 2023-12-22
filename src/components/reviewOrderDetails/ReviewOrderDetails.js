import React, { useState } from "react";
import { useSelector } from "react-redux";
import AppContainer from "../container";
import {
  ReviewDetailsTable,
  ReviewOrderDetailsMessage,
  ReviewOrderSubHeading,
} from "./ReviewOrderDetails.style";
import { selectOrderDetails } from "../../features/orderDetails/orderDetailsSlice";
import BaseButton from "../baseButton";
import { BaseButtonContainer } from "../baseButton/BaseButton";
import { submitOrder } from "../../service/orderService";

const ReviewOrderDetails = () => {
  const orderDetails = useSelector(selectOrderDetails);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [showOrderFailed, setShowOrderFailed] = useState(false);

  const submitOrderHandler = async () => {
    try {
      const orderDetailsToSubmit = {
        address: `${JSON.stringify(orderDetails.address)}`,
        userId: "3e9b9b38-0e6d-4e7b-b582-2f6a19f6b03d",
        paymentMode: orderDetails.paymentMode,
        totalAmount: orderDetails.price,
        orderItemsList: [],
      };
      orderDetails.itemDetails.forEach((item) => {
        orderDetailsToSubmit.orderItemsList.push({
          bookId: item.id,
          quantity: item.quantity,
          price: item.price,
        });
      });
      await submitOrder(orderDetailsToSubmit);
      setShowOrderSuccess(true);
    } catch (error) {
      setShowOrderFailed(true);
    }
  };

  return (
    <AppContainer>
      <ReviewOrderDetailsMessage>
        Please review your order
      </ReviewOrderDetailsMessage>
      <ReviewOrderSubHeading>Item Details</ReviewOrderSubHeading>
      <ReviewDetailsTable>
        <tr>
          <th>Book Name</th>
          <th>Author</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {orderDetails?.itemDetails.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.author}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </ReviewDetailsTable>

      <ReviewOrderSubHeading>Address and Payment Mode</ReviewOrderSubHeading>
      <ReviewDetailsTable>
        <tr>
          <th>Country</th>
          <th>Address</th>
          <th>Pin Code</th>
          <th>Alternate Mobile No</th>
          <th>Payment Mode</th>
        </tr>
        <tr>
          <td>{orderDetails?.address.country}</td>
          <td>{orderDetails?.address.address}</td>
          <td>{orderDetails?.address.pinCode}</td>
          <td>{orderDetails?.address.alternateMobileNo}</td>
          <td>{orderDetails?.paymentMode}</td>
        </tr>
      </ReviewDetailsTable>

      <BaseButtonContainer>
        <BaseButton type="button" onClick={submitOrderHandler}>
          Submit Order
        </BaseButton>
      </BaseButtonContainer>

      {showOrderSuccess && (
        <ReviewOrderDetailsMessage style={{ color: "red", marginTop: 30 }}>
          Your order have been placed successfully
        </ReviewOrderDetailsMessage>
      )}

      {showOrderFailed && (
        <ReviewOrderDetailsMessage style={{ color: "red", marginTop: 30 }}>
          Sorry! We were not able to place your order, please try again.
        </ReviewOrderDetailsMessage>
      )}
    </AppContainer>
  );
};

ReviewOrderDetails.propTypes = {};

export default ReviewOrderDetails;
