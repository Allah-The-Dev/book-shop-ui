import styled from "styled-components";

const BaseButton = styled.button`
  border: none;
  color: white;
  padding: 10px 5px;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  margin: 5px 5px;
  border-radius: 5px;
  background-color: #4263f5;
`;

export const BaseButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export default BaseButton;
