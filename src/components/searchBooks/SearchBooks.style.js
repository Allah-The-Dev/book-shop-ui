import styled from "styled-components";
import BaseButton from "../baseButton";

export const SearchBookContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const SearchBookInputBox = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 6px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const SearchButton = styled(BaseButton)`
  background-color: #0e31c9;
`;
