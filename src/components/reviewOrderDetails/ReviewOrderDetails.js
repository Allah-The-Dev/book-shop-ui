import React from "react";
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

const ReviewOrderDetails = () => {
  const orderDetails = useSelector(selectOrderDetails);

  const submitOrderHandler = () => {
    console.log(JSON.stringify(orderDetails));
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
    </AppContainer>
  );
};

ReviewOrderDetails.propTypes = {};

export default ReviewOrderDetails;
