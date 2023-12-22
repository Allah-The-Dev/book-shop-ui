import styled from "styled-components";
import BaseButton from "../baseButton";

export const ReviewDetailsTable = styled.table`
  margin-top: 10px;
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  text-align: center;
  th td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const ReviewOrderDetailsMessage = styled.h1`
  font-size: xx-large;
`;

export const ReviewOrderSubHeading = styled.h2`
  margin-top: 50px;
  font-size: large;
`;

export const SubmitOrderButton = styled(BaseButton)`
  background-color: ${({ disabled }) => (disabled ? "grey" : "#4263f5")};
`;
