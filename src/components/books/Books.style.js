import styled from "styled-components";
import BaseButton from "../baseButton";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const BooksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Book = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 2px solid #b5c1f7;
  width: 500px;
  height: 300px;
  margin: 10px 20px;
`;

export const BookImageContainer = styled.div`
  flex: 2;
  padding: 20px 20px;
`;

export const BookImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: fill;
`;

export const BookDetailsAndActionsContainer = styled.div`
  padding-top: 10px;
  margin-left: 20px;
  flex: 3;
  flex-direction: column;
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
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const OutOfStockWarningText = styled.p`
  color: #e00914;
  font-size: medium;
  margin-top: 10px;
`;
