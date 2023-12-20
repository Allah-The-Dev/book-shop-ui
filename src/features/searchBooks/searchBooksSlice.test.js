import searchBooksReducer, {
  updateSearchText,
} from "./searchBooksSlice";

test("should return the initial state", () => {
  expect(searchBooksReducer(undefined, { type: undefined })).toEqual({
    searchText: "",
  });
});

test("should handle books being added to an empty list", () => {
  const previousState = { searchText: "python" };

  expect(searchBooksReducer(previousState, updateSearchText("java"))).toEqual({
    searchText: "java",
  });
});
