import React from "react";
import { useSelector } from "react-redux";
import {
  InputField,
  InputFieldContainer,
  InputLabel,
  InputLabelcontainer,
  OrderDetailsContainer,
  OrderDetailsForm,
  OrderDetailsFormContainer,
  OrderDetailsMessage,
  PaymentModeContainer,
  PaymentModeLabelContainer,
  PaymentModeSelectionText,
} from "./OrderDetails.style";
import { selectOrderDetails } from "../../features/orderDetails/orderDetailsSlice";

const OrderDetails = (props) => {
  const orderDetails = useSelector(selectOrderDetails);

  return (
    <OrderDetailsContainer>
      <OrderDetailsMessage>
        Please provide address and payment mode
      </OrderDetailsMessage>
      <OrderDetailsFormContainer>
        <OrderDetailsForm>
          <InputLabelcontainer>
            <InputLabel htmlFor="country">Country</InputLabel>
          </InputLabelcontainer>
          <InputFieldContainer>
            <InputField
              name="country"
              id="country"
              type="text"
              disabled
              value={orderDetails?.address.country}
            />
          </InputFieldContainer>

          <InputLabelcontainer>
            <InputLabel htmlFor="address">Address</InputLabel>
          </InputLabelcontainer>
          <InputFieldContainer>
            <InputField name="address" id="address" type="text" />
          </InputFieldContainer>

          <InputLabelcontainer>
            <InputLabel htmlFor="pinCode">PinCode</InputLabel>
          </InputLabelcontainer>
          <InputFieldContainer>
            <InputField name="pinCode" id="pinCode" type="number" />
          </InputFieldContainer>

          <InputLabelcontainer>
            <InputLabel htmlFor="altMobileNo">Alternate Mobile No</InputLabel>
          </InputLabelcontainer>
          <InputFieldContainer>
            <InputField name="altMobileNo" id="altMobileNo" type="number" />
          </InputFieldContainer>

          <fieldset>
            <PaymentModeSelectionText>
              Please select your payment mode
            </PaymentModeSelectionText>
            <InputFieldContainer>
              <PaymentModeContainer>
                <InputField
                  name="paymentMode"
                  id="paymentModeCod"
                  type="radio"
                  defaultChecked
                  width="20%"
                />
              </PaymentModeContainer>
              <PaymentModeLabelContainer>
                <label htmlFor="paymentModeCod">Cash On Delivery</label>
              </PaymentModeLabelContainer>
            </InputFieldContainer>

            <InputFieldContainer>
              <PaymentModeContainer>
                <InputField
                  name="paymentMode"
                  id="paymentModeCard"
                  type="radio"
                />
              </PaymentModeContainer>
              <PaymentModeLabelContainer>
                <label htmlFor="paymentModeCard">Pay By Card</label>
              </PaymentModeLabelContainer>
            </InputFieldContainer>
          </fieldset>
        </OrderDetailsForm>
      </OrderDetailsFormContainer>
    </OrderDetailsContainer>
  );
};

OrderDetails.propTypes = {};

export default OrderDetails;
