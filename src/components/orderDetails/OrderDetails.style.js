import styled from "styled-components";

export const OrderDetailsMessage = styled.h1`
  font-size: xx-large;
`;

export const OrderDetailsFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 50px 200px;
  margin-top: 50px;
`;

export const InputLabelcontainer = styled.div`
  display: flex;
`;

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OrderDetailsForm = styled.form``;

export const InputLabel = styled.label`
  font-weight: bold;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const PaymentModeSelectionText = styled.legend`
  font-weight: bold;
`;

export const PaymentModeOptionContainer = styled(InputFieldContainer)``;

export const PaymentModeLabelContainer = styled.div`
  flex: 3;
`;

export const PaymentModeContainer = styled.div`
  flex: 1;
`;