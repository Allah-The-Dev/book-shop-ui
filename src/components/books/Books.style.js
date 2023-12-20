import styled from "styled-components";
import BaseButton from "../baseButton";

export const BooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Book = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 2px solid #b5c1f7;
  width: 300px;
  margin: 10px 0px;
`;

export const BookImageContainer = styled.div`
  flex: 1;
`;

export const BookImage = styled.img``;

export const BookDetailsAndActionsContainer = styled.div`
  margin-left: 20px;
  flex: 4;
`;

export const BookTitle = styled.h1``;

export const BookAuthor = styled.h5``;

export const BookPrice = styled.h5``;

export const BuyNowButton = styled(BaseButton)`
  background-color: ${({ disabled }) => (disabled ? "grey" : "#4263f5")};
`;

export const AddToCardButton = styled(BaseButton)`
  background-color: ${({ disabled }) => (disabled ? "grey" : "#738af0")};
`;

export const BookDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionOnBookContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
