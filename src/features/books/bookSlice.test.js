import booksReducer, { addBooks } from "./booksSlice";

test("should return the initial state", () => {
  expect(booksReducer(undefined, { type: undefined })).toEqual({ books: [] });
});

test("should handle books being added to an empty list", () => {
  const previousState = [];

  const booksToAdd = { books: [{ name: "java", author: "gosling" }] };
  expect(booksReducer(previousState, addBooks(booksToAdd))).toEqual({
    books: [{ name: "java", author: "gosling" }],
  });
});
