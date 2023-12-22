import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  InputField,
  InputFieldContainer,
  InputLabel,
  InputLabelcontainer,
  OrderDetailsForm,
  OrderDetailsFormContainer,
  OrderDetailsMessage,
  PaymentModeContainer,
  PaymentModeLabelContainer,
  PaymentModeSelectionText,
} from "./OrderDetails.style";
import {
  selectOrderDetails,
  updateAddress,
  updatePinCode,
  updateAlternateMobileNo,
  updatePaymentMode,
} from "../../features/orderDetails/orderDetailsSlice";
import AppContainer from "../container";
import BaseButton from "../baseButton";
import { BaseButtonContainer } from "../baseButton/BaseButton";

const OrderDetails = () => {
  const orderDetails = useSelector(selectOrderDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function orderDetailsHandler() {
    navigate("/order/review");
  }

  return (
    <AppContainer>
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
              placeholder="India"
              disabled
              value={orderDetails?.address.country}
            />
          </InputFieldContainer>

          <InputLabelcontainer>
            <InputLabel htmlFor="address">Address</InputLabel>
          </InputLabelcontainer>
          <InputFieldContainer>
            <InputField
              name="address"
              id="address"
              type="text"
              placeholder="E-city Bangalore"
              value={orderDetails?.address.address}
              onChange={(e) => dispatch(updateAddress(e.target.value))}
            />
          </InputFieldContainer>

          <InputLabelcontainer>
            <InputLabel htmlFor="pinCode">PinCode</InputLabel>
          </InputLabelcontainer>
          <InputFieldContainer>
            <InputField
              name="pinCode"
              id="pinCode"
              type="number"
              placeholder={123456}
              value={orderDetails?.address.pinCode}
              onChange={(e) => dispatch(updatePinCode(e.target.value))}
            />
          </InputFieldContainer>

          <InputLabelcontainer>
            <InputLabel htmlFor="altMobileNo">Alternate Mobile No</InputLabel>
          </InputLabelcontainer>
          <InputFieldContainer>
            <InputField
              name="altMobileNo"
              id="altMobileNo"
              type="number"
              placeholder={9876543210}
              value={orderDetails?.address.alternateMobileNo}
              onChange={(e) =>
                dispatch(updateAlternateMobileNo(e.target.value))
              }
            />
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
                  value="COD"
                  type="radio"
                  checked={orderDetails?.paymentMode === "COD"}
                  onChange={(e) => dispatch(updatePaymentMode(e.target.value))}
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
                  value="Card"
                  type="radio"
                  checked={orderDetails?.paymentMode === "Card"}
                  onChange={(e) => dispatch(updatePaymentMode(e.target.value))}
                />
              </PaymentModeContainer>
              <PaymentModeLabelContainer>
                <label htmlFor="paymentModeCard">Pay By Card</label>
              </PaymentModeLabelContainer>
            </InputFieldContainer>
          </fieldset>

          <BaseButtonContainer>
            <BaseButton type="button" onClick={orderDetailsHandler}>
              Confirm & Review
            </BaseButton>
          </BaseButtonContainer>
        </OrderDetailsForm>
      </OrderDetailsFormContainer>
    </AppContainer>
  );
};

OrderDetails.propTypes = {};

export default OrderDetails;
